import { GET_FILMS, GET_MORE_FILMS, GET_INFO_ABOUT_FILM } from './actionConst'
import { IFilms } from '../types/IFilms'

let initialState: IFilms = {
    films: [],
    infoAboutFilm: [],
}
// const increment = createAction<number>('increment')
interface dsa {
    type:string,
    films: IFilms,
}
interface dsa2 {
    type:string,
    filmId: number
}
type Action = dsa | dsa2;
const mainReducer = (state = initialState, action: Action) => {
    // if (increment.match(action)) {
        switch (action.type) {
            case GET_FILMS:
                return {
                    ...state,
                    films: action.films.films
                };
            case GET_MORE_FILMS:
                return {
                    ...state,
                    films: [...state.films, ...action.films.films]
                };
            case GET_INFO_ABOUT_FILM:
                return {
                    ...state,
                    infoAboutFilm: action.filmId
                };
            default: return state;
        }
    // }
}

export default mainReducer;