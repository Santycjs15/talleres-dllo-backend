// book.controller.ts
import {
    createBookAction,
    updateBook,
    deactivateBook,
    getBook,
    getBooks,
    reserveBook
} from '../services/book.action';

export const createBookController = async (bookData: object) => {
    return await createBookAction(bookData);
};

export const updateBookController = async (bookId: string, updates: object) => {
    return await updateBook(bookId, updates);
};

export const deactivateBookController = async (bookId: string) => {
    return await deactivateBook(bookId);
};

export const getBookController = async (bookId: string) => {
    return await getBook(bookId);
};

export const getBooksController = async (filters: any) => {
    return await getBooks(filters);
};

export const reserveBookController = async (bookId: string, userId: string) => {
    return await reserveBook(bookId, userId);
};

