import { Outlet } from "react-router";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { loadBooks } from "./redux/books-slice";
import Header from "./components/Header";
import books from "./books.json";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBooks(books));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>
        {/* TODO: add github link */}
        Footer
      </footer>
    </div>
  );
}

export default App;
