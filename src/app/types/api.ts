export type Book = {
  id: number;
  title: string;
  year: number;
  price: number;
  inStock: boolean;
  author: Author;
  genres: Genre[];
};

export type Genre = {
  id: number;
  name: string;
  description: string | null;
};

export type Author = {
  id: number;
  name: string;
  bio: string | null;
};

export type BookDTO = {
  title: string;
  author: string;
  year: number;
  genreNames: string[];
  price: number;
  inStock: boolean;
};
