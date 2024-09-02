export interface PhotoUrl {
  small: string;
  small_s3: string;
  thumb: string;
  raw: string;
  regular: string;
  full: string;
}

export interface Photo {
  id: string;
  alt_description: string;
  urls: PhotoUrl;
}

export interface Collection {
  id: string;
  name: string;
  photos: Photo[];
}

export interface Collections {
  collections: Collection[];
}

// API

export interface ResponseProps<T> {
  message: string;
  content?: T;
  error?: unknown;
}

export interface CollectionResponse extends ResponseProps<Collections> {}
