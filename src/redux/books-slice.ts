import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Book } from "../types/book";

const initialState: Book[] = [];

const books = createSlice({
  name: "books",
  initialState,
  reducers: {
    loadBooks: (_, action: PayloadAction<Book[]>) => action.payload,
    addBook: (state, action: PayloadAction<Book>) => {
      state.unshift(action.payload);
    },
  },
});

export const booksReducer = books.reducer;
export const { loadBooks, addBook } = books.actions;
