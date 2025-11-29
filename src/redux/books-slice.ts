import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../types/book";

const initialState: Book[] = [];

const books = createSlice({
  name: "books",
  initialState,
  reducers: {
    // Action to load the initial list of books
    loadBooks: (_, action: PayloadAction<Book[]>) => action.payload,
    // Action to add a new book to the beginning of the list
    addBook: (state, action: PayloadAction<Book>) => {
      state.unshift(action.payload);
    },
  },
});

export const booksReducer = books.reducer;
export const { loadBooks, addBook } = books.actions;
