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

export async function fetchPhotoInformation(
  photoId: string
): Promise<PhotoResponse> {
  const response = await fetch(
    `https://api.unsplash.com/photos/${photoId}?client_id=_OHJPjYgHv6JdtpzVHMZ8NBrCrCm_zVQunR3VOzWv0I`
  );
  const data = (await response.json()) as PhotoResponse;
  return data;
}
