import { BookOpen, BookPlus, Home, Library } from "lucide-react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="flex justify-between items-center p-6">
      <div className="text-3xl flex items-center gap-1">
        <Library size={30} />
        <h1>Online Library</h1>
      </div>
      <nav className="flex gap-4 *:flex *:gap-1">
        <Link to="/">
          <Home />
          <span>Home</span>
        </Link>
        <Link to="/browse">
          <BookOpen />
          <span>Browse Books</span>
        </Link>
        <Link to="/book">
          <BookPlus />
          <span>New Book</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
