import { useMutation } from "@tanstack/react-query";

/* const deleteBook = async (id: number) => {
  
    const res = await fetch(`http://localhost:8080/api/books/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Failed to delete book!");
  }
  return res.json();
}; */

const deleteBook = async (id: number) => {
  const res = await fetch(`http://localhost:8080/api/books/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error("Failed to delete book");

  return true;
};

export const useDeleteBook = () => {
  return useMutation({
    mutationFn: deleteBook,
    onSuccess: () => {
      console.log("Book deleted!");
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
