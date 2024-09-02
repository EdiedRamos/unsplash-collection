import { NextRequest } from "next/server";
import { CustomResponse } from "../../(utils)";

interface Params {
  params: { query: string };
}

export async function GET(_: NextRequest, { params }: Params) {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_CLIENT_ID}&query=${params.query}`
  );
  const data = await response.json();
  return CustomResponse.OK({ message: "Photos found", content: data });
}
