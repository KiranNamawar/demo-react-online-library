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
    <>
      <search>
        <input
          type="search"
          placeholder="Search for book, author"
          value={query}
          onChange={(evt) => setQuery(evt.target.value)}
        />
        <select
          value={option}
          onChange={(evt) => setOption(evt.target.value as Option)}
        >
          <option value="All">All</option>
          {popularCategories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </search>
      <ul>
        {filteredBooks.map((book) => (
          <li key={book.id}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </>
  );
}

export default Browse;
