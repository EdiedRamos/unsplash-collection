"use client";

import { useCollection } from "@/app/(hooks)";
import { Button } from "@/app/(ui)";

function setToHttps(url: string): string {
  if (url.startsWith("https")) return url;
  return url.replace("http", "https");
}

async function download(imageUrl: string, imageName: string) {
  const data = await fetch(setToHttps(imageUrl));
  const blob = await data.blob();
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = imageName ?? "photo";
  link.click();
}

export function Controls({
  photoId,
  photoUrl,
  photoName,
}: {
  photoId: string;
  photoUrl: string;
  photoName: string;
}) {
  const { collections, handleInserImage } = useCollection();

  if (!collections?.collections) return null;

  return (
    <div className="flex flex-wrap gap-5 mt-5">
      <Button
        onClick={() =>
          handleInserImage(collections.collections[0]?.id ?? "", photoId)
        }
      >
        Add to Collection
      </Button>
      <Button onClick={() => download(photoUrl, photoName)}>Download</Button>
    </div>
  );
}
