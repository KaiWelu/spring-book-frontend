import React from "react";
import { Book, Genre } from "../types/api";

type BookViewProps = {
  book: Book;
  genre: Genre;
};

const BookTile = ({ book, genre }: BookViewProps) => {
  return (
    <div className="m-3 p-4 bg-pink-300 flex-row rounded-2xl border-2 border-pink-400">
      <div className="flex-col w-fit">
        <h1 className="text-2xl pb-2">Title: {book.title}</h1>
        <h2 className="text-xl pb-1">Author: {book.author.name}</h2>
      </div>
      <div className="flex-col">
        <div>{book.author.bio}</div>
      </div>
    </div>
  );
};

export default BookTile;
