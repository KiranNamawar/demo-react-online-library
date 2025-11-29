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
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/browse"
        className="mb-6 inline-flex items-center text-sm font-medium text-slate-400 hover:text-blue-500"
      >
        ← Back to Browse
      </Link>

      <article className="grid gap-8 md:grid-cols-[300px_1fr] lg:gap-12">
        <div className="overflow-hidden rounded-xl shadow-xl">
          <img
            src={book.coverImage}
            alt={book.title}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-100 sm:text-4xl">{book.title}</h1>
            <p className="mt-2 text-xl text-slate-400">by <span className="text-slate-200">{book.author}</span></p>
          </div>

          <div className="flex flex-wrap gap-2">
            {book.categories.map((c) => (
              <span
                key={c}
                className="rounded-full bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 ring-1 ring-inset ring-blue-500/20"
              >
                {c}
              </span>
            ))}
            <span className="flex items-center gap-1 rounded-full bg-yellow-500/10 px-3 py-1 text-sm font-medium text-yellow-500 ring-1 ring-inset ring-yellow-500/20">
              ★ {book.rating}
            </span>
          </div>

          <div className="prose prose-invert max-w-none">
            <h3 className="text-xl font-semibold text-slate-200">Description</h3>
            <p className="leading-relaxed text-slate-300">{book.description}</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default BookDetail;
