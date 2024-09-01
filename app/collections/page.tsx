import { GradientTitle } from "../(components)";
import { CollectionGrid } from "./(components)";

export default function CollectionPage() {
  return (
    <div>
      <GradientTitle>Collections</GradientTitle>
      <p className="text-black dark:text-white mx-auto text-center max-w-[400px] mt-2">
        Explore the world through collections of beautiful photos free to use
        under the{" "}
        <a href="#" className="underline">
          Unsplash License
        </a>
        .
      </p>
      <CollectionGrid />
    </div>
  );
}
