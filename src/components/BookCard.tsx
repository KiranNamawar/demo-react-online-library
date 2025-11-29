import { Link } from "react-router";
import type { Book } from "../types/book";

interface Props {
  book: Book;
}

function BookCard({ book }: Props) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900 transition-all hover:border-slate-700 hover:shadow-lg hover:shadow-blue-500/10">
      <div className="aspect-[2/3] w-full overflow-hidden bg-slate-800">
        <img
          src={book.coverImage}
          alt={book.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h2 className="line-clamp-1 text-lg font-semibold text-slate-100" title={book.title}>
          {book.title}
        </h2>
        <p className="mb-4 text-sm text-slate-400">by {book.author}</p>
        <div className="mt-auto">
          <Link
            to={`/book/${encodeURIComponent(book.id)}`}
            className="inline-flex w-full items-center justify-center rounded-md bg-slate-800 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-slate-700 hover:text-white group-hover:bg-blue-600 group-hover:text-white"
          >
            View Detail
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
