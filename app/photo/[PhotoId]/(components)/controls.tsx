"use client";

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
  photoUrl,
  photoName,
}: {
  photoUrl: string;
  photoName: string;
}) {
  return (
    <div className="flex flex-wrap gap-5 mt-5">
      <Button>Add to Collection</Button>
      <Button onClick={() => download(photoUrl, photoName)}>Download</Button>
    </div>
  );
}
