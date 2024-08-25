"use client";

import { Search } from "../(components)";

interface Props {
  searchParams: { query: string };
}

export default function Home({ searchParams }: Props) {
  return (
    <section>
      <div className="bg-gradient-image h-20"></div>
      <div className="relative -mt-7">
        <Search onSubmit={() => {}} initialValue={searchParams.query} />
      </div>
      <p className="dark:text-white">Query {searchParams.query}</p>
    </section>
  );
}
