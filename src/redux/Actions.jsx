import {
    LOADER_OFF,
    LOADER_ON,
    SET_SEARCH_QUERY,
    SET_CATEGORY,
    SET_ORDER_BY,
    SET_BOOKS,
    SET_START_INDEX,
    GET_BOOK,
} from "../redux/Types"
import axios from "axios"
import { apiKey } from "../store/keys"


export const loaderOn = (visibleContent = false) => { return { type: LOADER_ON, visibleContent } }

export const loaderOff = (visibleContent = true) => { return { type: LOADER_OFF, visibleContent } }

export const setSeaechQuery = (searchQuery) => { return { type: SET_SEARCH_QUERY, searchQuery} }

export const setCategory = (category) => { return { type: SET_CATEGORY, category} }

export const setOrderBy = (orderBy) => { return { type: SET_ORDER_BY, orderBy} }

export const setStartIndex = (startIndex) => { return { type: SET_START_INDEX, startIndex} }

export const getBooks = (params, isUpdate = false) => {
    return async dispatch => {
        dispatch(loaderOn(isUpdate));
        try {
            if (params) {     
                const url = `https://www.googleapis.com/books/v1/volumes?q=` +
                            `${params.searchQuery.split(' ').join('+')}+${params.category.value}` +
                            `&orderBy=${params.orderBy.value}` +
                            `&startIndex=${params.startIndex}` +
                            `&maxResults=${params.maxResults}`;
                const {data} = await axios.get((apiKey !== '') ? `${url}&key=${apiKey}` : url);

                dispatch({
                    type: SET_BOOKS,
                    isUpdate,
                    data
                });
            }
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(loaderOff());
        }
    }
}

export const getBook = (id) => {   
    return async dispatch => {
        dispatch(loaderOn());
        try {
            const url = `https://www.googleapis.com/books/v1/volumes/${id}`;
            const {data} = await axios.get((apiKey !== '') ? `${url}?key=${apiKey}` : url);

            dispatch({
                type: GET_BOOK,
                data
            });
        } catch (e) {
            console.log(e);
        } finally {
            dispatch(loaderOff());
        }
    }
}
