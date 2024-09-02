"use client";
import { CollectionPreview } from "./collectionPreview";
import { useCollection } from "@/app/(hooks)";

export function CollectionGrid() {
  const { collections } = useCollection();

  return (
    <section className="flex flex-wrap gap-8 mt-14 md:mx-14">
      {collections?.collections.map((collection) => (
        <CollectionPreview key={collection.id} collection={collection} />
      ))}
    </section>
  );
}
