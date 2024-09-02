"use client";

import type { Collection } from "@/app/(models)";
import { getQuantityLabel } from "@/app/api/(utils)/labels";
import Link from "next/link";
import { useState } from "react";

interface Props {
  collection: Collection;
  photoId: string;
  handleRemoveImage: (collectionId: string, photoId: string) => void;
}

export function CollectionControl({
  collection,
  handleRemoveImage,
  photoId,
}: Props) {
  const [renderDelete, setRenderDelete] = useState<boolean>(false);

  return (
    <Link
      href={`/collection/${collection.id}`}
      className="flex gap-5 items-center hover:bg-slate-200 dark:hover:bg-slate-800 p-4 rounded-xl"
      onMouseEnter={() => setRenderDelete(true)}
      onMouseLeave={() => setRenderDelete(false)}
    >
      <div className="w-16 h-16 rounded-lg overflow-hidden">
        <img
          src={collection.photos[0].urls.small}
          alt={collection.photos[0].alt_description}
          className="w-full h-full object-cover "
        />
      </div>
      <div className="flex flex-1 justify-between">
        <div>
          <p className="text-black dark:text-white font-medium">
            {collection.name}
          </p>
          <p className="text-black dark:text-white">
            {getQuantityLabel(collection.photos.length, "photo", "photos")}
          </p>
        </div>
        {renderDelete && (
          <button
            className="text-black dark:text-white"
            onClick={(event) => {
              event.preventDefault();
              handleRemoveImage(collection.id, photoId);
            }}
          >
            - Remove
          </button>
        )}
      </div>
    </Link>
  );
}
