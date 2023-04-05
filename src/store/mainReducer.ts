import { GET_FILMS, GET_MORE_FILMS, GET_INFO_ABOUT_FILM } from './actionConst'
import { IFilms } from '../types/IFilms'
import { IFilm } from '../types/IFilm'
import { getFilmsActionType, getMoreFilmsActionType } from './action'

let initialState: IFilms = {
    films: [],
    infoAboutFilm: [],
}
type someAction = getFilmsActionType | getMoreFilmsActionType

const mainReducer = (state = initialState, action: any) => {
    // if (increment.match(action)) {
    switch (action.type) {
        case GET_FILMS:
            return {
                ...state,
                films: action.films
            };
        // case GET_MORE_FILMS:
        //     console.log(action.films)
        //     return {
        //         ...state,
        //         films: [...state.films, ...action.films]
        //     };
        // case GET_INFO_ABOUT_FILM:
        //     console.log(action.filmId)
        //     return {
        //         ...state,
        //         infoAboutFilm: action.filmId
        //     };
        default: return state;
    }
    // }
}

export default mainReducer;