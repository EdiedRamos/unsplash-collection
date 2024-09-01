import { firebaseDB } from "@/app/(libs)/firestore.admin";
import { NextRequest } from "next/server";
import { CustomResponse, generateDefaultCollection } from "../../(utils)";

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

// Controllers
export async function GET(_: NextRequest, { params }: CollectionParams) {
  try {
    const data = await getCollectionByUserId(params.userId);
    if (data.exists)
      return CustomResponse.OK({
        message: "Collections found",
        content: data.data(),
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
      content: data,
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
