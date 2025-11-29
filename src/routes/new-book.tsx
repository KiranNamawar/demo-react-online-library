import type { FormEvent } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../redux/hooks";
import { addBook } from "../redux/books-slice";
import type { Book } from "../types/book";

function NewBook() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    const formData = new FormData(evt.currentTarget);

    const title = formData.get("title") as string;
    const author = formData.get("author") as string;
    const coverImage = formData.get("coverImage") as string;
    const description = formData.get("description") as string;
    const categories = formData.get("categories") as string;
    const rating = Number(formData.get("rating"));

    const book: Book = {
      id: crypto.randomUUID(),
      title,
      author,
      coverImage,
      description,
      rating,
      categories: categories.split(",").map((c) => c.trim()),
    };

    dispatch(addBook(book));

    evt.currentTarget.reset();

    navigate("/browse");
  }

  return (
    <div className="container mx-auto max-w-2xl px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold text-slate-100">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-xl sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium text-slate-300">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="author" className="text-sm font-medium text-slate-300">Author</label>
            <input
              id="author"
              name="author"
              type="text"
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="categories" className="text-sm font-medium text-slate-300">Categories (comma separated)</label>
          <input
            id="categories"
            name="categories"
            type="text"
            placeholder="Fiction, Drama, History"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="rating" className="text-sm font-medium text-slate-300">Rating (1-5)</label>
          <div className="flex items-center gap-4">
            <input
              id="rating"
              name="rating"
              type="range"
              defaultValue={5}
              min="1"
              max="5"
              step="1"
              required
              className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-700 accent-blue-500"
            />
            <span className="w-12 text-center text-lg font-bold text-blue-500">5</span>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="coverImage" className="text-sm font-medium text-slate-300">Cover Image URL</label>
          <input
            id="coverImage"
            name="coverImage"
            type="url"
            placeholder="https://picsum.photos/200/300"
            required
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="text-sm font-medium text-slate-300">Description</label>
          <textarea
            id="description"
            name="description"
            required
            rows={4}
            className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
        >
          Add Book
        </button>
      </form>
    </div>
  );
}

export default NewBook;
