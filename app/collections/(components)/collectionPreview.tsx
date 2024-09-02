import { Collection } from "@/app/(models)";
import { PreviewGrid } from "./previewGrid";
import Link from "next/link";
import { getQuantityLabel } from "@/app/api/(utils)/labels";

interface Props {
  collection: Collection;
}

export function CollectionPreview({ collection }: Props) {
  return (
    <Link
      href={`/collection/${collection.id}`}
      className="w-full max-w-96 hover:cursor-pointer"
    >
      <div className="rounded-md overflow-hidden h-72">
        <PreviewGrid photos={collection.photos} />
      </div>
      <p className="text-black dark:text-white font-medium mt-4 text-xl">
        {collection.name}
      </p>
      <p className="text-black dark:text-white mt-1">
        {getQuantityLabel(collection.photos.length, "photo", "photos")}
      </p>
    </Link>
  );
}
