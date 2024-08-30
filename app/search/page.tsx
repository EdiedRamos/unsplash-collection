"use client";

import { useEffect, useState } from "react";
import { Search } from "../(components)";

interface Props {
  searchParams: { query: string };
}

interface SearchItem {
  id: string;
  slug: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
}

interface SearchResponse {
  results: SearchItem[];
}

function updateSearchParams(query: string): void {
  const urlData = new URL(window.location.href);
  urlData.searchParams.set("query", query);
  window.history.pushState({}, "", urlData.toString());
}

async function search(query: string): Promise<SearchItem[]> {
  const response = await fetch(
    `https://api.unsplash.com/search/photos?client_id=${process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID}&query=${query}`
  );
  const data = (await response.json()) as SearchResponse;
  if (Array.isArray(data.results)) return data.results;
  return [];
}

export default function SearchPage({ searchParams }: Props) {
  const [results, setResults] = useState<SearchItem[]>([]);

  useEffect(() => {
    search(searchParams.query).then((result) => setResults(result));
  }, [searchParams]);

  const handleSubmit = (query: string) => {
    updateSearchParams(query);
    search(query).then((result) => setResults(result));
  };

  return (
    <section>
      <div className="bg-gradient-image h-20"></div>
      <div className="relative -mt-7">
        <Search onSubmit={handleSubmit} initialValue={searchParams.query} />
      </div>
      <div className="columns-1 md:columns-2 lg:columns-3 mt-12 gap-6 mx-8">
        {results.map((info) => (
          <img
            key={info.id}
            className="w-full h-auto object-cover mb-6 rounded-md"
            src={info.urls.regular}
            alt={info.slug}
            loading="lazy"
          />
        ))}
      </div>
    </section>
  );
}
