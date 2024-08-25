"use client";

import { Search } from "../(components)";

interface Props {
  searchParams: { query: string };
}

function updateSearchParams(query: string): void {
  const urlData = new URL(window.location.href);
  urlData.searchParams.set("query", query);
  window.history.pushState({}, "", urlData.toString());
}

export default function SearchPage({ searchParams }: Props) {
  return (
    <section>
      <div className="bg-gradient-image h-20"></div>
      <div className="relative -mt-7">
        <Search
          onSubmit={(value) => updateSearchParams(value)}
          initialValue={searchParams.query}
        />
      </div>
      <p className="dark:text-white">Query {searchParams.query}</p>
    </section>
  );
}
