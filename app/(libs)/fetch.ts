import axios from "axios";

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
  alt_description: string;
}

export interface ApiPhotoResponse {
  message: string;
  content: PhotoResponse;
}
