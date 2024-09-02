import { CustomResponse } from "@/app/api/(utils)";
import { NextRequest } from "next/server";

interface Params {
  params: { photoId: string };
}

export async function GET(_: NextRequest, { params }: Params) {
  const response = await fetch(
    `https://api.unsplash.com/photos/${params.photoId}?client_id=${process.env.UNSPLASH_CLIENT_ID}`
  );
  const data = await response.json();
  return CustomResponse.OK({ message: "Image found", content: data });
}
