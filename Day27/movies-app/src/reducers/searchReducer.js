import {
    FETCH_MOVIES_BEGIN,
    FETCH_MOVIES_SUCCESS,
    FETCH_MOVIES_FAILURE,
    FETCH_MOVIE_DETAILS_BEGIN,
    FETCH_MOVIE_DETAILS_SUCCESS
} from '../actions/types';

const initialState = {
    movies: [],
    isLoading: false,
    movie: {},
    error: null
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movies: action.payload.movies
            };

        case FETCH_MOVIES_FAILURE:
            return {
                ...state,
                isLoading: false,
                movies: [],
                error: action.payload.error
            };

        case FETCH_MOVIE_DETAILS_BEGIN:
            return {
                ...state,
                isLoading: true,
                error: null
            };

        case FETCH_MOVIE_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                movie: action.payload.movie
            };

        default:
            return state;
    }
};

export default searchReducer;