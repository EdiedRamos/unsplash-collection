import { Collection } from "@/app/(models)";
import { PreviewGrid } from "./previewGrid";

interface Props {
  collection: Collection;
}

function getQuantityLabel(length: number) {
  return `photo${length > 1 ? "s" : ""}`;
}

export function CollectionPreview({ collection }: Props) {
  return (
    <div className="w-full max-w-96">
      <div className="rounded-md overflow-hidden h-72">
        <PreviewGrid photos={collection.photos} />
      </div>
      <p className="text-black dark:text-white font-medium mt-4 text-xl">
        {collection.name}
      </p>
      <p className="text-black dark:text-white mt-1">
        {collection.photos.length} {getQuantityLabel(collection.photos.length)}
      </p>
    </div>
  );
}
