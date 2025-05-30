import React, { useState } from "react";
import { BookDTO } from "../types/api";
import { useMutation } from "@tanstack/react-query";

const BookForm = () => {
  // form state with default values
  const [formData, setFormData] = useState<BookDTO>({
    title: "",
    author: "",
    year: 2023,
    price: 15,
    inStock: true,
    genreNames: ["Tragedy"],
  });

  const mutation = useMutation({
    mutationFn: async (book: BookDTO) => {
      const res = await fetch("http://localhost:8080/api/books/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(book),
      });
      if (!res.ok) throw new Error("Something wrent wrong wit the submit!");
      return res.json();
    },
    onSuccess: () => {
      console.log("Submit succesful!");
    },
  });

  // handling the changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" // this handles checkboxes
          ? checked
          : type === "number" // this handles numbers, otherwise they would be stored as strings
          ? Number(value)
          : value,
    }));
  };

  // calls react query mutation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
    //console.log("Submitting: ", formData);
  };

  return (
    <section>
      <form
        className="flex flex-col gap-2 p-4 bg-blue-300"
        onSubmit={handleSubmit}
      >
        <input
          className="p-1 bg-white"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          className="p-1 bg-white"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          className="p-1 bg-white"
          name="year"
          type="number"
          placeholder="Year Published"
          value={formData.year}
          onChange={handleChange}
        />
        <input
          className="p-1 bg-white"
          name="price"
          type="number"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <label className="flex flex-row gap-2">
          <input
            name="inStock"
            type="checkbox"
            checked={formData.inStock}
            onChange={handleChange}
          />
          In stock?
        </label>
        <button className="bg-orange-500 w-fit p-2 text-amber-50" type="submit">
          SUBMIT BOOOK
        </button>
      </form>
    </section>
  );
};

export default BookForm;
