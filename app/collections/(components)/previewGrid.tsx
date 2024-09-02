import type { Photo } from "@/app/(models)";

interface Props {
  photos: Photo[];
}

const commonStyles = "w-full h-full object-cover text-black dark:text-white";

export function PreviewGrid({ photos }: Props) {
  if (photos.length === 1) {
    return (
      <img
        src={photos[0].urls.small}
        alt={photos[0].alt_description}
        className={commonStyles}
      />
    );
  }

  if (photos.length === 2) {
    return (
      <div className="w-full h-full grid grid-cols-2">
        <img
          src={photos[0].urls.small}
          alt={photos[0].alt_description}
          className={commonStyles}
        />
        <img
          src={photos[1].urls.small}
          alt={photos[1].alt_description}
          className={commonStyles}
        />
      </div>
    );
  }

  return (
    <div className="w-full h-full grid grid-cols-2 grid-rows-2 gap-1">
      <img
        src={photos[0].urls.small}
        alt={photos[0].alt_description}
        className={`${commonStyles} row-span-2`}
      />
      <img
        src={photos[1].urls.small}
        alt={photos[1].alt_description}
        className={`${commonStyles} col-start-2 row-span-1`}
      />
      <img
        src={photos[2].urls.small}
        alt={photos[2].alt_description}
        className={`${commonStyles} col-start-2 row-span-1`}
      />
    </div>
  );
}
