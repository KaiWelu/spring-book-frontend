import React from "react";
import { Book } from "../types/api";

type BookViewProps = {
  book: Book;
  //genre: Genre; this is not needed atm
};

const BookTile = ({ book }: BookViewProps) => {
  return (
    <div className="m-3 p-4 bg-amber-50 flex flex-row rounded-e-xs items-start border-1 border-amber-100">
      <div className="flex flex-col flex-1 p-3 bg-pink-200 rounded-br-4xl rounded-xs shadow-md h-auto gap-2">
        <div>
          <h1 className="text-2xl font-bold">{book.title}</h1>
          <div className="text-lg">
            {book.author.name} - {book.year}
          </div>
        </div>
        <div>
          <ul className="text-sm flex flex-row gap-1">
            {book.genres.map((genre) => (
              <div
                className="bg-emerald-100 p-1 rounded-md font-bold shadow-md"
                key={genre.id}
              >
                {genre.name}
              </div>
            ))}
          </ul>
          <div className="mt-2 ">
            <p className="bg-pink-400 w-fit p-2 text-white font-bold rounded-md shadow-md">
              {book.price} €
            </p>
            <p className="italic mt-2">
              {book.inStock ? "In stock ✅" : "Out of stock ❌"}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 flex-2 p-3 bg-emerald-100 rounded-br-4xl rounded-xs shadow-md">
        <h2 className="text-xl pb-1 font-bold">{book.author.name}</h2>
        <div className="italic">{book.author.bio}</div>
      </div>
    </div>
  );
};

export default BookTile;
