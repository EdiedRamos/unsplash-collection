import { firebaseDB } from "@/app/(libs)/firestore.admin";
import { NextRequest } from "next/server";
import { CustomResponse, generateDefaultCollection } from "../../(utils)";
import { Collections, Photo } from "@/app/(models)";
import { fetchPhotoInformation } from "@/app/photo/[PhotoId]/page";

const COLLECTION = "collections";

interface CollectionParams {
  params: {
    userId: string;
  };
}

// Services
async function createDefaultCollection(userId: string) {
  const defaultCollection = generateDefaultCollection();
  await firebaseDB.collection(COLLECTION).doc(userId).set(defaultCollection);
  return defaultCollection;
}

async function getCollectionByUserId(userId: string) {
  const collections = await firebaseDB.collection(COLLECTION).doc(userId).get();
  return collections;
}

async function removeImageFromCollection(
  userId: string,
  collectionId: string,
  imageId: string
) {
  try {
    const collectionsRef = firebaseDB.collection(COLLECTION).doc(userId);
    const collectionData = await collectionsRef.get();
    if (!collectionData.exists) return null;
    const data = collectionData.data() as Collections;
    const result = data.collections.map((collection) => {
      if (collection.id !== collectionId) return collection;
      return {
        ...collection,
        photos: collection.photos.filter((photo) => photo.id !== imageId),
      };
    });
    await collectionsRef.set({
      collections: result,
    });
    return {
      collections: result,
    };
  } catch {
    return null;
  }
}

async function inserImageToCollection(
  userId: string,
  collectionId: string,
  imageId: string
) {
  try {
    const photoInfo = await fetchPhotoInformation(imageId);
    const newPhoto: Photo = {
      id: photoInfo.id,
      alt_description: photoInfo.alt_description,
      urls: photoInfo.urls,
    };

    const collectionsRef = firebaseDB.collection(COLLECTION).doc(userId);
    const collectionData = await collectionsRef.get();
    if (!collectionData.exists) return null;

    const data = collectionData.data() as Collections;

    let alreadyExist = false;

    const result = data.collections.map((collection) => {
      if (collection.id !== collectionId) return collection;
      if (collection.photos.some((photo) => photo.id === imageId)) {
        alreadyExist = true;
        return collection;
      }
      return {
        ...collection,
        photos: [...collection.photos, newPhoto],
      };
    });

    if (alreadyExist) return null;

    await collectionsRef.set({
      collections: result,
    });
    return {
      collections: result,
    };
  } catch {
    return null;
  }
}

// Controllers
export async function GET(_: NextRequest, { params }: CollectionParams) {
  try {
    const data = await getCollectionByUserId(params.userId);
    if (data.exists)
      return CustomResponse.OK({
        message: "Collections found",
        content: data.data() as Collections,
      });
    return CustomResponse.NOT_FOUND({ message: "Collections not found" });
  } catch (err) {
    let errorMessage = "unknown";
    if (err instanceof Error) errorMessage = err.message;
    return CustomResponse.INTERNAL_SERVER_ERROR({
      message: "Internal error",
      error: errorMessage,
    });
  }
}

// Register default collection to the given user
export async function POST(_: NextRequest, { params }: CollectionParams) {
  try {
    const userCollections = await getCollectionByUserId(params.userId);

    if (userCollections.exists)
      return CustomResponse.BAD_REQUEST({
        message: "The given user already has collections",
      });

    const data = await createDefaultCollection(params.userId);
    return CustomResponse.CREATED({
      message: "Default collection registered",
      content: data as Collections,
    });
  } catch (err) {
    let errorMessage = "unknown";
    if (err instanceof Error) errorMessage = err.message;
    return CustomResponse.INTERNAL_SERVER_ERROR({
      message: "Internal error",
      error: errorMessage,
    });
  }
}

// Delete image from collection
export async function PATCH(
  request: NextRequest,
  { params }: CollectionParams
) {
  const body = await request.json();

  if (!body.collectionId || !body.imageId)
    return CustomResponse.BAD_REQUEST({
      message: "collectionId and imageId are required",
    });

  const removeResult = await removeImageFromCollection(
    params.userId,
    body.collectionId,
    body.imageId
  );
  if (!removeResult)
    return CustomResponse.BAD_REQUEST({
      message: "Coult not remove image from collection",
    });

  return CustomResponse.OK({
    message: "Image removed from collection",
    content: removeResult,
  });
}

// Insert image to collection
export async function PUT(request: NextRequest, { params }: CollectionParams) {
  const body = await request.json();

  if (!body.collectionId || !body.imageId)
    return CustomResponse.BAD_REQUEST({
      message: "collectionId and imageId are required",
    });

  const insertResult = await inserImageToCollection(
    params.userId,
    body.collectionId,
    body.imageId
  );

  if (!insertResult)
    return CustomResponse.BAD_REQUEST({
      message: "Coult not insert image to collection",
    });

  return CustomResponse.OK({
    message: "Image inserted to collection",
    content: insertResult,
  });
}
