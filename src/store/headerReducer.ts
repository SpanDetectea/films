import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilm } from '../types/IFilm';

let initialState = {
    films: null as IFilm[] | null,
    isAuth: false
}
const headerReducer = createSlice({
    name:'header',
    initialState,
    reducers: {
        getSerchFilms: (state, { payload }: PayloadAction<IFilm[]>) => {
            state.films = payload;
        },
    }
})
export const {getSerchFilms} = headerReducer.actions

export default headerReducer.reducer;