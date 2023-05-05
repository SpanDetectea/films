import { IFilms } from '../types/IFilms';
import { IFilm } from '../types/IFilm';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

let initialState: IFilms = {
    films: [],
    infoAboutFilm: [],
}
const mainReducer = createSlice({
    name:'main',
    initialState,
    reducers: {
        getFilms: (state, { payload }: PayloadAction<IFilm[]>) => {
            state.films = payload
        },
        getMoreFilms: (state, { payload }: PayloadAction<IFilm[]>) => {
            state.films = [...state.films, ...payload]
        },
        getInfoAboutFilm: (state, { payload }: PayloadAction<[]>) => {
            state.infoAboutFilm = payload
        }
    }
})

// getInfoAboutFilm ?? нету
export const {getFilms, getMoreFilms, getInfoAboutFilm} = mainReducer.actions


export default mainReducer.reducer;