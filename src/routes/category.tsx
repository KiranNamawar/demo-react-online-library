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
    book.categories.join(" ").includes(category.toLowerCase())
  );

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <BookCard book={book} />
        </li>
      ))}
    </ul>
  );
}

export default Category;
