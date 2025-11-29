import { useParams } from "react-router";
import { useAppSelector } from "../redux/hooks";
import BookCard from "../components/BookCard";
import ErrorPage from "./error";

function Category() {
  const { category } = useParams();
  if (!category) {
    return (
      <ErrorPage
        error={new Error("No books found for category: " + category)}
      />
    );
  }

  const data = useAppSelector((state) => state.books);
  const books = data.filter((book) =>
    book.categories.join(" ").toLowerCase().includes(category.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold capitalize text-slate-100">{category} Books</h1>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {books.map((book) => (
          <li key={book.id}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Category;
