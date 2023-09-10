import { combineReducers } from "redux";
import { LoaderReduser } from "../redux/LoaderReduser";
import { SearchReduser } from "../redux/SearchReduser";
import { BooksReduser } from "../redux/BooksReduser";


export const RootReducer = combineReducers({
    LoaderReduser,
    SearchReduser,
    BooksReduser,
});
