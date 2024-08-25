interface Props {
  searchParams: { query: string };
}

export default function Home({ searchParams }: Props) {
  return (
    <section>
      <p className="dark:text-white">Query {searchParams.query}</p>
    </section>
  );
}
