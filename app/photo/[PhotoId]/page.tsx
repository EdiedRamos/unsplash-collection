import { ToastContainer } from "react-toastify";
import { Collections, Controls } from "./(components)";
import "react-toastify/dist/ReactToastify.css";
import { ApiPhotoResponse } from "@/app/(libs)/fetch";
import axios from "axios";

interface Props {
  params: { PhotoId: string };
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

export default async function PhotoPage(props: Props) {
  const request = await axios.get<ApiPhotoResponse>(
    `${process.env.DOMAIN}/api/photo/${props.params.PhotoId}`
  );
  const photoInformation = request.data.content;

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
          photoId={props.params.PhotoId}
          photoUrl={photoInformation.urls.full}
          photoName={photoInformation.slug}
        />
        <Collections photoId={props.params.PhotoId} />
      </div>
      <ToastContainer />
    </section>
  );
}
