import { Outlet } from "react-router";
import { useEffect } from "react";
import { useAppDispatch } from "./redux/hooks";
import { loadBooks } from "./redux/books-slice";
import Header from "./components/Header";
import Footer from "./components/Footer";
import books from "./books.json";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadBooks(books));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
