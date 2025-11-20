import { Outlet } from "react-router";
import { Library } from "lucide-react";
import books from "./books.json";
import { useAppDispatch } from "./redux/hooks";
import { useEffect } from "react";
import { loadBooks } from "./redux/books-slice";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBooks(books));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="text-3xl flex items-center gap-1">
          <Library size={30} />
          <h1>Online Library</h1>
        </div>
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
}

export default App;
