"use client";

import { GradientTitle } from "@/app/(components)";
import type { Collection, CollectionResponse } from "@/app/(models)";
import { getQuantityLabel } from "@/app/api/(utils)/labels";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Props {
  params: { collectionId: string };
}

export default function CollectionPage(props: Props) {
  const router = useRouter();

  const [collection, setCollection] = useState<Collection>();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      router.replace("/");
      return;
    }

    axios
      .get<CollectionResponse>(`/api/collections/${userId}`)
      .then((response) => {
        const collections = response.data.content?.collections;
        if (!Array.isArray(collections)) {
          router.replace("/collections");
          return;
        }
        const target = collections.find(
          (collection) => collection.id === props.params.collectionId
        );
        if (target) setCollection(target);
        else router.replace("/collections");
      });
  }, [props.params.collectionId, router]);

  if (!collection)
    return (
      <div className="min-h-screen flex justify-center items-center">
        <p className="text-black dark:text-white text-xl text-center mt-2 animate-pulse">
          Loading...
        </p>
      </div>
    );

  return (
    <div>
      <GradientTitle>{collection.name}</GradientTitle>
      <p className="mt-2 text-black dark:text-white text-center">
        {getQuantityLabel(collection.photos.length, "photo", "photos")}
      </p>
      <div className="columns-1 md:columns-2 lg:columns-3 mt-12 gap-6 mx-8">
        {collection.photos.map((info) => (
          <Link key={info.id} href={`photo/${info.id}`}>
            <img
              className="w-full h-auto object-cover mb-6 rounded-md"
              src={info.urls.regular}
              alt={info.alt_description}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
