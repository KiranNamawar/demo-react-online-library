import { BookOpen, BookPlus, Home, Library } from "lucide-react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2 text-xl font-bold text-blue-500">
          <Library className="h-8 w-8" />
          <h1 className="hidden sm:block text-slate-100">Online Library</h1>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-slate-300">
          <Link 
            to="/" 
            className="flex items-center gap-2 transition-colors hover:text-blue-400"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
          <Link 
            to="/browse" 
            className="flex items-center gap-2 transition-colors hover:text-blue-400"
          >
            <BookOpen className="h-4 w-4" />
            <span className="hidden sm:inline">Browse</span>
          </Link>
          <Link 
            to="/book" 
            className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
          >
            <BookPlus className="h-4 w-4" />
            <span className="hidden sm:inline">New Book</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
