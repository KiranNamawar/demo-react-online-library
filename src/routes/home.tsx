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
    <>
      <section>
        <p>
          Welcome to <span>Online Library</span>
        </p>
      </section>
      <section>
        <h3>Popular Categories</h3>
        <ul>
          {popularCategories.map((category) => (
            <li key={category}>
              <Link to={`/browse/${encodeURIComponent(category)}`}>
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Popular Books</h3>
        <ul>
          {popularBooks.map((book) => (
            <li key={book.id}>
              <BookCard book={book} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
