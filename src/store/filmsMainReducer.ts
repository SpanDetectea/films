import { RATING__MAX, RATING__MIN, YEAR__MAX, YEAR__MIN } from "../consts/filtersConst";
import {SET__RATING, SET__YEAR, SET__FILMS, TOGGLE__PRELOADER} from "./actionConst"

interface Istate3 {
    rating: number[],
    year: number[],
    films: any,
    preloaderState: boolean,
    genres: string[]
}

let initialState: Istate3 = {
    rating: [RATING__MIN, RATING__MAX],
    year: [YEAR__MIN, YEAR__MAX],
    films: [],
    preloaderState: false,
    genres: [
        'Все жанры',
        'Семейные',
        'Биографии',
        'Боевики',
        'Вестерны',
        'Военные',
        'Детективы',
        'Детские',
        'Документальные',
        'Драмы',
        'Исторические',
        'Комедии',
        'Короткометражки',
        'Криминал',
        'Мелодрамы',
        'Музыкальные',
        'Мюзиклы',
        'Новости',
        'Приключения',
        'Спортивные',
        'Триллеры',
        'Ужасы',
        'Фантастика',
        'Фильмы-нуар',
        'Фэнтези',
    ],
}

const filmsMainReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET__RATING: {
            return {
                ...state,
                rating: [...action.rating]
            }
        }
        case SET__YEAR: {
            return {
                ...state,
                year: [...action.year]
            }
        }
        case SET__FILMS: {
            return {
                ...state,
                films: [...action.films.items],
                total: action.films.total,
                totalPages: action.films.totalPages
            }
        }
        case TOGGLE__PRELOADER: {
            return {
                ...state,
                preloaderState: !state.preloaderState
            }
        }
        default: return state;
    }
}

export default filmsMainReducer;
