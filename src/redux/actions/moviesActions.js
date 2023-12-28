import { RNToasty } from "react-native-toasty";
import http from "../../services/api";
import { LOADING, MOVIES_DETAIL, MOVIES_LIST, SEARCH_MOVIES_LIST } from "../types";

export const GetMoviesListApi = (pageNo=1, cb) =>  (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true
    })

    const {moviesList} = getState().movies
    
    http.get(`movie/now_playing`, {
        params: {
            page: pageNo
        }
    })
        .then(async response => {
            console.log("response", response.data)
            if (response.data.results) {
                dispatch({
                    type: LOADING,
                    payload: false
                })
                dispatch({
                    type: MOVIES_LIST,
                    payload: pageNo > 1 ? [ ...moviesList, ...response.data.results] : response.data.results

                })
                cb(response.data.page + 1)
                RNToasty.Success({
                    title: response.data.status_message || "Movies List Fected Successfully",
                    duration: 2
                })
            }
            else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2
                })
                dispatch({
                    type: MOVIES_LIST,
                    payload: null
                })
                dispatch({
                    type: LOADING,
                    payload: false
                })
            }
        })
        .catch(error => {
            console.log("error", error)
            dispatch({
                type: LOADING,
                payload: false
            })
            dispatch({
                type: MOVIES_LIST,
                payload: null
            })
            RNToasty.Error({
                title: error?.response?.data?.status_message || "Something went wrong",
                duration: 2
            })
        })
}


export const GetSearchMoviesListApi = (query) =>  (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true
    })
    const {page, total_pages, searchMoviesList} = getState().movies

    http.get(`search/movie?query=${query}`, {
        params: {
            page: page ? page + 1 : 1
        }
    })
        .then(async response => {
            if (response.data.results) {
                dispatch({
                    type: LOADING,
                    payload: false
                })
                dispatch({
                    type: SEARCH_MOVIES_LIST,
                    payload: page > 1 ? [...response.data.results, ...searchMoviesList] : response.data.results
                })
                RNToasty.Success({
                    title: "Movie Searches Fected Successfully",
                    duration: 2
                })
            }
            else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2
                })
                dispatch({
                    type: SEARCH_MOVIES_LIST,
                    payload: null
                })
                dispatch({
                    type: LOADING,
                    payload: false
                })
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false
            })
            dispatch({
                type: SEARCH_MOVIES_LIST,
                payload: null
            })
            RNToasty.Error({
                title: error?.response?.data?.status_message || "Something went wrong",
                duration: 2
            })
        })
}

export const GetMovieDetailApi = (mId) =>  (dispatch, getState) => {
    dispatch({
        type: LOADING,
        payload: true
    })
    http.get(`movie/${mId}?&append_to_response=videos`)
        .then(async response => {
            if (response.data) {
                dispatch({
                    type: LOADING,
                    payload: false
                })
                dispatch({
                    type: MOVIES_DETAIL,
                    payload: response.data
                })
                RNToasty.Success({
                    title: "Movie Detail Fected Successfully",
                    duration: 2
                })
            }
            else {
                RNToasty.Info({
                    title: response.data.message,
                    duration: 2
                })
                dispatch({
                    type: MOVIES_DETAIL,
                    payload: null
                })
                dispatch({
                    type: LOADING,
                    payload: false
                })
            }
        })
        .catch(error => {
            dispatch({
                type: LOADING,
                payload: false
            })
            dispatch({
                type: MOVIES_DETAIL,
                payload: null
            })
            RNToasty.Error({
                title: error?.response?.data?.status_message || "Something went wrong",
                duration: 2
            })
        })
}
