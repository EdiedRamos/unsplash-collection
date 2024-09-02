"use client";

import { useEffect, useState } from "react";
import { Search } from "../(components)";
import Link from "next/link";

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

interface ApiSearchResponse {
  message: string;
  content: SearchResponse;
}

function updateSearchParams(query: string): void {
  const urlData = new URL(window.location.href);
  urlData.searchParams.set("query", query);
  window.history.pushState({}, "", urlData.toString());
}

async function search(query: string): Promise<SearchItem[]> {
  const response = await fetch(`api/search/${query}`);
  const data = (await response.json()) as ApiSearchResponse;
  if (Array.isArray(data.content.results)) return data.content.results;
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
          <Link key={info.id} href={`photo/${info.id}`}>
            <img
              className="w-full h-auto object-cover mb-6 rounded-md"
              src={info.urls.regular}
              alt={info.slug}
              loading="lazy"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
