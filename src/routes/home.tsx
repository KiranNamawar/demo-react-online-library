import { Link } from "react-router";
import { useAppSelector } from "../redux/hooks";
import BookCard from "../components/BookCard";

const popularCategories = [
  "Drama",
  "Fiction",
  "Adventure",
  "History",
  "Horror",
  "Biography",
];

function Home() {
  const books = useAppSelector((state) => state.books);
  const popularBooks = books.filter((book) => book.rating === 5);

  return (
    <div className="space-y-12 pb-12">
      <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-slate-900/0" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl">
            Welcome to <span className="text-blue-500">Online Library</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400">
            Discover your next favorite book from our extensive collection of classics, bestsellers, and hidden gems.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Link
              to="/browse"
              className="rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Browse Books
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h3 className="mb-8 text-2xl font-bold text-slate-100">Popular Categories</h3>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {popularCategories.map((category) => (
            <li key={category}>
              <Link
                to={`/browse/${encodeURIComponent(category)}`}
                className="flex h-24 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-4 text-center font-medium text-slate-300 transition-all hover:border-blue-500/50 hover:bg-slate-800 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-100">Popular Books</h3>
          <Link to="/browse" className="text-sm font-medium text-blue-500 hover:text-blue-400">
            View all
          </Link>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {popularBooks.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Home;
