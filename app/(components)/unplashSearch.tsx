"use client";
import { useRouter } from "next/navigation";
import { Search } from "./search";

export function UnplashSearch() {
  const router = useRouter();
  return (
    <div className="mt-14 pt-40 h-[80vh] bg-none lg:bg-hero-image bg-no-repeat bg-contain bg-center">
      <h2 className="text-black dark:text-white text-cs-300 font-semibold text-center">
        Search
      </h2>
      <p className="text-black dark:text-slate-300 text-center pt-2">
        Search high-resolution images from Unsplash
      </p>
      <div className="mt-6">
        <Search onSubmit={(value) => router.push(`/search?query=${value}`)} />
      </div>
    </div>
  );
}
