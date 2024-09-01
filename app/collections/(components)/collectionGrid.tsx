"use client";

import { CollectionResponse, Collections } from "@/app/(models)";
import axios from "axios";
import { useEffect, useState } from "react";

export function CollectionGrid() {
  const [collections, setCollections] = useState<Collections>();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) return;

    axios
      .get<CollectionResponse>(`api/collections/${userId}`)
      .then((response) => setCollections(response.data.content))
      .catch(() =>
        axios
          .post<CollectionResponse>(`api/collections/${userId}`)
          .then((response) => setCollections(response.data.content))
      );
  }, []);

  return (
    <section className="flex flex-wrap gap-8 mt-14 mx-14">
      {collections?.collections.map((collection) => (
        <div className="w-full max-w-96" key={collection.id}>
          <div className="rounded-md overflow-hidden h-72">
            <img
              src={collection.photos[0].urls.small}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-black dark:text-white font-medium mt-4 text-xl">
            {collection.name}
          </p>
          <p className="text-black dark:text-white mt-1">
            {collection.photos.length} photos
          </p>
        </div>
      ))}
    </section>
  );
}
