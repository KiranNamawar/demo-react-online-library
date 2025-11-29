import { useMemo, useState } from "react";
import { useAppSelector } from "../redux/hooks";
import BookCard from "../components/BookCard";

const popularCategories = [
  "Drama",
  "Fiction",
  "Adventure",
  "History",
  "Horror",
  "Biography",
] as const;

type Option = (typeof popularCategories)[number] | "All";

function Browse() {
  const [query, setQuery] = useState("");
  const [option, setOption] = useState<Option>("All");
  const allBooks = useAppSelector((state) => state.books);

  const filteredBooks = useMemo(() => {
    const search = query.trim().toLowerCase();
    const categoryFilter = option === "All" ? null : option.toLowerCase();

    return allBooks.filter((book) => {
      const bookCategories = book.categories.join(" ").toLowerCase();
      const bookTitle = book.title.toLowerCase();
      const bookAuthor = book.author.toLowerCase();

      // 1. Check Category Match (if a category is selected)
      // If category is selected AND book doesn't have it, remove it.
      if (categoryFilter && !bookCategories.includes(categoryFilter)) {
        return false;
      }

      // 2. Check Search Match (if user typed something)
      if (search) {
        return bookTitle.includes(search) || bookAuthor.includes(search);
      }

      // 3. If no search, but passed category check, keep it.
      return true;
    });
  }, [query, option, allBooks]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold text-slate-100">Browse Books</h1>
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            type="search"
            placeholder="Search by title or author..."
            value={query}
            onChange={(evt) => setQuery(evt.target.value)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-64"
          />
          <select
            value={option}
            onChange={(evt) => setOption(evt.target.value as Option)}
            className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-slate-100 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-48"
          >
            <option value="All">All Categories</option>
            {popularCategories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredBooks.length === 0 ? (
        <div className="flex h-64 flex-col items-center justify-center rounded-lg border border-dashed border-slate-800 bg-slate-900/50 text-center">
          <p className="text-lg text-slate-400">No books found matching your criteria.</p>
          <button
            onClick={() => { setQuery(""); setOption("All"); }}
            className="mt-4 text-blue-500 hover:text-blue-400 hover:underline"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredBooks.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Browse;
