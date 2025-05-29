"use client";

import { useQuery } from "@tanstack/react-query";
import React from "react";
import BookView from "./BookView";

async function fetchBooks() {
  const res = await fetch("http://localhost:8080/api/books");
  if (!res.ok) throw new Error("Failed to fetch all Books!");
  return res.json();
}

/* export type Book = {
  id: number;
  title: string;
  author: string;
  year: number;
  genre: string;
  price: number;
  available: boolean;
}; */

const AllBooks = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: fetchBooks,
  });

  if (isLoading) return <p>LOADING ALL BOOKS!</p>;
  if (error instanceof Error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div>
      <ul>
        {data.map((book: any) => {
          return <BookView book={book} key={book.id} />;
        })}
      </ul>
    </div>
  );
};

export default AllBooks;
