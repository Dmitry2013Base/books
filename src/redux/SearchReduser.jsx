import { SET_SEARCH_QUERY, SET_CATEGORY, SET_ORDER_BY, SET_START_INDEX } from "../redux/Types";

const init = {
    categories: [
        { text: 'all', value: 'all' },
        { text: 'art', value: 'art' },
        { text: 'biography', value: 'biography' },
        { text: 'computers', value: 'computers' },
        { text: 'history', value: 'history' },
        { text: 'medical', value: 'medical' },
        { text: 'poetry', value: 'poetry' },
    ],
    sorted: [
        { text: 'relevance', value: 'relevance' },
        { text: 'newest', value: 'newest' },
    ],
    searchQuery: '',
    category: { text: 'all', value: 'all' },
    orderBy: { text: 'relevance', value: 'relevance' },
    startIndex: 0,
    maxResults: 30,
}

export const SearchReduser = (state = init, action) => {

    switch (action.type) {
        
        case SET_SEARCH_QUERY: {

            return {
                ...state,
                searchQuery: action.searchQuery
            }
        }
        case SET_CATEGORY: {

            return {
                ...state,
                category: state.categories.find(e => e.value === action.category)
            }
        }
        case SET_ORDER_BY: {

            return {
                ...state,
                orderBy: state.sorted.find(e => e.value === action.orderBy)
            }
        }
        case SET_START_INDEX: {
            
            return {
                ...state,
                startIndex: action.startIndex
            }
        }

        default: return state
    }
};
