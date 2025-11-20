import { Link } from "react-router";
import type { Book } from "../types/book";

interface Props {
  book: Book;
}

function BookCard({ book }: Props) {
  return (
    <div>
      <img src={book.coverImage} alt={book.title} />
      <h2>{book.title}</h2>
      <p>by {book.author}</p>
      <Link to={`/book/${encodeURIComponent(book.id)}`}>View Detail</Link>
    </div>
  );
}

export default BookCard;
