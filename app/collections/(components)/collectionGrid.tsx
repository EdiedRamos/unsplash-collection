"use client";

import { CollectionResponse, Collections } from "@/app/(models)";
import axios from "axios";
import { useEffect, useState } from "react";
import { CollectionPreview } from "./collectionPreview";

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
    <section className="flex flex-wrap gap-8 mt-14 md:mx-14">
      {collections?.collections.map((collection) => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </section>
  );
}
