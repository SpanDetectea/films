import {GET_FILMS, GET_MORE_FILMS, GET_INFO_ABOUT_FILM} from './actionConst'
import { PayloadAction } from '@reduxjs/toolkit'

export interface IFilm {
    filmId: number,
    nameRu: string | null | undefined,
    nameEn: string | null | undefined,
    year: string,
    filmLength: string,
    countries: Icountries[],
    genres: IGenres[],
    rating: string,
    ratingVoteCount: number,
    posterUrl: string,
    posterUrlPreview: string,
    ratingChange: null,
}

interface Icountries {
    country: string
}
interface IGenres {
    genre: string
}

interface IFilms {
    films: IFilm[],
    infoAboutFilm: []
}

let initialState: IFilms = {
    films: [],
    infoAboutFilm: [],
}

const mainReducer = (state = initialState, action: any) => {
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
}

export default mainReducer;