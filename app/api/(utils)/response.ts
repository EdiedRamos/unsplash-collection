import type { ResponseProps } from "@/app/(models)";
import { NextResponse } from "next/server";

export const CustomResponse = {
  OK: <T>(props: ResponseProps<T>) => NextResponse.json(props, { status: 200 }),
  NOT_FOUND: <T>(props: ResponseProps<T>) =>
    NextResponse.json(props, { status: 404 }),
  INTERNAL_SERVER_ERROR: <T>(props: ResponseProps<T>) =>
    NextResponse.json(props, { status: 500 }),
  CREATED: <T>(props: ResponseProps<T>) =>
    NextResponse.json(props, { status: 201 }),
  BAD_REQUEST: <T>(props: ResponseProps<T>) =>
    NextResponse.json(props, { status: 400 }),
  NO_CONTENT: () => new Response(null, { status: 204 }),
};
