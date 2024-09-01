import { NextResponse } from "next/server";

interface ResponseProps {
  message: string;
  content?: unknown;
  error?: unknown;
}

export const CustomResponse = {
  OK: (props: ResponseProps) => NextResponse.json(props, { status: 200 }),
  NOT_FOUND: (props: ResponseProps) =>
    NextResponse.json(props, { status: 404 }),
  INTERNAL_SERVER_ERROR: (props: ResponseProps) =>
    NextResponse.json(props, { status: 500 }),
  CREATED: (props: ResponseProps) => NextResponse.json(props, { status: 201 }),
  BAD_REQUEST: (props: ResponseProps) =>
    NextResponse.json(props, { status: 400 }),
};
