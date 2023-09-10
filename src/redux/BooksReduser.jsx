import { SET_BOOKS, GET_BOOK } from "../redux/Types";

const init = {
    books: [],
    booksCount: 0,
    book: null,
}

export const BooksReduser = (state = init, action) => {

    switch (action.type) {
        
        case SET_BOOKS: {
            var booksCount = state.booksCount;
            if (action.isUpdate) {
                var books = [...state.books, ...action.data.items];
            } else {
                books = action.data.items;
                booksCount = action.data.totalItems;
            }

            return {
                ...state,
                books,
                booksCount
            }
        }
        case GET_BOOK: {

            return {
                ...state,
                book: action.data
            }
        }

        default: return state
    }
};
