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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" name="title" type="text" required />
      </div>
      <div>
        <label htmlFor="author">Author</label>
        <input id="author" name="author" type="text" required />
      </div>
      <div>
        <label htmlFor="categories">Categories</label>
        <input id="categories" name="categories" type="text" required />
      </div>
      <div>
        <label htmlFor="rating">Rating</label>
        <input
          id="rating"
          name="rating"
          type="range"
          defaultValue={1}
          min="1"
          max="5"
          step="1"
          required
        />
      </div>
      <div>
        <label htmlFor="coverImage">Cover Image URL</label>
        <input id="coverImage" name="coverImage" type="url" required />
      </div>
      <div>
        <label htmlFor="description">Description</label>
        <textarea id="description" name="description" required></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewBook;
