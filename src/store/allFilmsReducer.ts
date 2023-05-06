import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RATING__MAX, RATING__MIN, YEAR__MAX, YEAR__MIN } from "../consts/filtersConst";
import { IFilm } from "../types/IFilm";

interface Istate3 {
    rating: number[],
    year: number[],
    films: IFilm[],
    preloaderState: boolean,
    genres: string[],
    total?: number,
    totalPages?: number
}

interface action {
    items: IFilm[],
    total:number,
    totalPages: number
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

const filmsMainReducer = createSlice({
    name:'allFilms',
    initialState,
    reducers: {
        setRating: (state, {payload}: PayloadAction<number[]>) => {
            state.rating=payload
        },
        setYear: (state, {payload}: PayloadAction<number[]>) => {
            state.year=payload
        },
        setFilms: (state, {payload}: PayloadAction<action>) => {            
            state.films = [...payload.items] // может не нужно spread 
            state.total = payload.total
            state.totalPages= payload.totalPages
        },
        togglePreloader: (state) => {
            state.preloaderState=!state.preloaderState
        },
    }
})

export const {setRating,setYear,setFilms,togglePreloader} = filmsMainReducer.actions

export default filmsMainReducer.reducer;
