export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Data;
  series: Data;
  stories: Data;
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Data {
  available: number;
  items: Item[];
}

export interface Item {
  resourceURI: number;
  name: string;
}
