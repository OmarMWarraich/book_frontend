import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import getBooks from '../utils/api';

export const initialState = {
    books: [],
    status: 'idle',
    error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
    const response = await getBooks();
    return response;
});

export const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
          .addCase(fetchBooks.pending, (state, action) => {
            state.status = 'loading';
          })
          .addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.books = state.books.concat(action.payload);
          });
      },
});

export default bookSlice.reducer;