import { Button } from "@/app/(ui)";
import { Collections, Controls } from "./(components)";

interface Props {
  params: { PhotoId: string };
}

interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface User {
  name: string;
  profile_image: {
    small: string;
    medium: string;
    large: string;
  };
}

interface PhotoResponse {
  id: string;
  slug: string;
  created_at: string;
  urls: Urls;
  user: User;
}

function customDate(date: string) {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dateObj = new Date(date);
  return `${
    MONTHS[dateObj.getMonth()]
  } ${dateObj.getDate()}, ${dateObj.getFullYear()}`;
}

async function fetchPhotoInformatio(photoId: string): Promise<PhotoResponse> {
  const response = await fetch(
    `https://api.unsplash.com/photos/${photoId}?client_id=_OHJPjYgHv6JdtpzVHMZ8NBrCrCm_zVQunR3VOzWv0I`
  );
  const data = (await response.json()) as PhotoResponse;
  return data;
}

export default async function PhotoPage(props: Props) {
  const photoInformation = await fetchPhotoInformatio(props.params.PhotoId);
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-10 mx-8">
      <img
        src={photoInformation.urls.regular}
        alt="Image"
        className="rounded-lg"
      />
      <div className="">
        <div className="flex items-center gap-4">
          <img
            src={photoInformation.user.profile_image.medium}
            alt="author profile image"
            className="rounded-full"
          />
          <p className="text-black dark:text-white">
            {photoInformation.user.name}
          </p>
        </div>
        <p className="text-black dark:text-white mt-5">
          Published on {customDate(photoInformation.created_at)}
        </p>
        <Controls
          photoUrl={photoInformation.urls.full}
          photoName={photoInformation.slug}
        />
        <Collections />
      </div>
    </section>
  );
}
