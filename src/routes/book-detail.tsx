import { Link, useParams } from "react-router";
import { useAppSelector } from "../redux/hooks";
import ErrorPage from "./error";

function BookDetail() {
  const { bookId } = useParams();
  const book = useAppSelector((state) =>
    state.books.find((book) => book.id == bookId)
  );

  if (!book) {
    return <ErrorPage error={new Error("Invalid Book Id: " + bookId)} />;
  }

  return (
    <>
      <Link to="/browse">Back to Browse</Link>
      <article>
        <img src={book.coverImage} alt={book.title} />
        <div>
          <h2>{book.title}</h2>
          <p>by {book.author}</p>
          <p>rating: {book.rating}</p>
          <p>Categories</p>
          {book.categories.map((c) => (
            <span key={c}>{c}, </span>
          ))}
        </div>
        <p>{book.description}</p>
      </article>
    </>
  );
}

export default BookDetail;
