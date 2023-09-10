import BookList from "../pages/BookList";
import BookView from "../pages/BookView";

export const routes = [
    {
        path: '/',
        element: <BookList />
    },
    {
        path: '/bookList',
        element: <BookList />
    },
    {
        path: 'book/:id',
        element: <BookView />
    },
]
