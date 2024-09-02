"use client";
import { CollectionResponse, Collections } from "@/app/(models)";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export function useCollection() {
  const router = useRouter();

  const [collections, setCollections] = useState<Collections>();

  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) {
      router.replace("/");
      return;
    }

    axios
      .get<CollectionResponse>(`/api/collections/${userId}`)
      .then((response) => setCollections(response.data.content))
      .catch(() =>
        axios
          .post<CollectionResponse>(`/api/collections/${userId}`)
          .then((response) => setCollections(response.data.content))
      );
  }, [router]);

  return {
    collections,
  };
}
