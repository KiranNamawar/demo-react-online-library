import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./routes/home";
import Browse from "./routes/browse";
import Category from "./routes/category";
import NewBook from "./routes/new-book";
import BookDetail from "./routes/book-detail";
import ErrorPage from "./routes/error";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "browse",
        children: [
          {
            index: true,
            Component: Browse,
          },
          {
            path: ":category",
            Component: Category,
          },
        ],
      },
      {
        path: "book",
        children: [
          {
            index: true,
            Component: NewBook,
          },
          {
            path: ":bookId",
            Component: BookDetail,
          },
        ],
      },
    ],
    ErrorBoundary: ErrorPage,
  },
]);

export default router;
