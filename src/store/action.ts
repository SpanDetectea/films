import { IFacts } from '../types/IFacts';
import { IFilm } from '../types/IFilm';
import { IFilms } from '../types/IFilms';
import { ISimilarFilms } from '../types/ISimilarFilms';
import {
    GET_FILM, GET_FACTS, GET_SIMILAR_FILM,
    SET__RATING, SET__YEAR, SET__FILMS, TOGGLE__PRELOADER,
    GET__SEARCH__FILMS, GET_FILMS, GET_MORE_FILMS,
    GET_INFO_ABOUT_FILM, SET_AUTH
}
    from './actionConst';

export const getFilm = (data: IFilm) => {
    return { type: GET_FILM, data }
};
export const getFacts = (data: IFacts[]) => {    
    return { type: GET_FACTS, data }
};
export const getSimilatFilms = (data: ISimilarFilms) => {        
    return { type: GET_SIMILAR_FILM, data }
};
export const setRating = (rating: number[]) => {    
    return { type: SET__RATING, rating }
}
export const setYear = (year: number[]) => {    
    return { type: SET__YEAR, year }
}
export type setFilmsType = {
    type: typeof SET__FILMS
    films: IFilm[]
}
export const setFilms = (films: IFilm[]):setFilmsType => {    
    return { type: SET__FILMS, films }
}
export type togglePreloaderStateType = {
    type: typeof TOGGLE__PRELOADER
}
export const togglePreloaderState = ():togglePreloaderStateType => {
    return { type: TOGGLE__PRELOADER }
}
export type setSearchFilmsActionType = {
    type: typeof GET__SEARCH__FILMS
    films: IFilm[]
}

export const setSearchFilms = (films: IFilm[]):setSearchFilmsActionType => {
    return {type: GET__SEARCH__FILMS, films}
}
export type getFilmsActionType = {
    type: typeof GET_FILMS
    films: IFilm[]
}
export const getFilms = (films: IFilm[]): getFilmsActionType => {   
    // console.log(films); 
    return ({type: GET_FILMS, films})
};
export type getMoreFilmsActionType = {
    type: typeof GET_MORE_FILMS
    films: IFilms
}
export const getMoreFilms = (films: IFilms):getMoreFilmsActionType => {    
    
    
    return {type: GET_MORE_FILMS, films}
}
export const getInfoAboutFilm = (filmId: number) => {
    console.log(filmId);
    
    return {type: GET_INFO_ABOUT_FILM, filmId}
}
export const setAuth = (isAuth: any) => {
    return {type: SET_AUTH, isAuth}
}