"use client";

import { useEffect } from "react";

export function useRegister() {
  useEffect(() => {
    const userId = localStorage.getItem("user_id");
    if (!userId) localStorage.setItem("user_id", crypto.randomUUID());
  }, []);
}
