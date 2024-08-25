import { GradientTitle } from "@/app/(components)";

interface Props {
  params: { collectionId: string };
}

export default function CollectionPage(props: Props) {
  return (
    <div>
      <GradientTitle>Autume Vibe</GradientTitle>
      <p className="mt-2 text-black dark:text-white text-center">16 photos</p>
    </div>
  );
}
