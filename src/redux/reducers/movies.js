import { MOVIES_LIST, LOADING, SEARCH_MOVIES_LIST, MOVIES_DETAIL } from "../types";

const initialState = {
    loading: false,
    moviesList: null,
    searchMoviesList: null,
    movieDetail: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_LIST:
            return {
                ...state,
                moviesList: action.payload
            }
        case MOVIES_DETAIL:
            return {
                ...state,
                movieDetail: action.payload
            }
        case SEARCH_MOVIES_LIST:
            return {
                ...state,
                searchMoviesList: action.payload
            }
        case LOADING:
            return {
                ...state,
                loading: action.payload
            }
        default:
            return state;
    }
}