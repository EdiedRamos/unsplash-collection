"use client";
import { useCollection } from "@/app/(hooks)";
import type { Collection } from "@/app/(models)";
import { useEffect, useState } from "react";
import { CollectionControl } from ".";

interface Props {
  photoId: string;
}

export function Collections({ photoId }: Props) {
  const { collections, handleRemoveImage } = useCollection();

  const [belongCollections, setBelongCollections] = useState<Collection[]>();

  useEffect(() => {
    if (!collections || !Array.isArray(collections.collections)) return;
    const belong = collections.collections.filter((collection) =>
      collection.photos.some((photo) => photo.id === photoId)
    );
    setBelongCollections(belong);
  }, [collections, photoId]);

  if (
    !belongCollections ||
    (belongCollections && belongCollections.length === 0)
  )
    return null;

  return (
    <section className="mt-9">
      <h3 className="text-black dark:text-white text-lg font-bold">
        Collections
      </h3>
      <div className="mt-2 flex flex-wrap flex-col gap-3">
        {belongCollections.map((collection) => (
          <CollectionControl
            key={collection.id}
            collection={collection}
            handleRemoveImage={handleRemoveImage}
            photoId={photoId}
          />
        ))}
      </div>
    </section>
  );
}
