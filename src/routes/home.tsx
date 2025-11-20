import { useAppSelector } from "../redux/hooks";

function Home() {
  const books = useAppSelector((state) => state.books);
  return (
    <>
      <h2>Home</h2>
      {books.map((book) => (
        <div key={book.id}>
          <img src={book.coverImage} alt={book.title} />
          <h2>{book.title}</h2>
          <p>by {book.author}</p>
          <p>rating: {book.rating}</p>
          <p>Categories</p>
          {book.categories.map((c) => (
            <span key={c}>{c}, </span>
          ))}
          <br />
          <p>{book.description}</p>
        </div>
      ))}
    </>
  );
}

export default Home;
