import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilm } from '../types/IFilm';
import { IFact, IGetFacts, IGetSimilarFilms } from '../types/IAboutFilm';

let initialState = {
    film: {} as IFilm,
    facts: [] as IFact[],
    similars: [] as [] | IFilm[],
    similarsTotal: 0
}
const aboutFilmReducer = createSlice({
    name: 'aboutFilm',
    initialState,
    reducers: {
        getFilm: (state, { payload }: PayloadAction<IFilm>) => {
            state.film = payload
        },
        getFacts: (state, { payload }: PayloadAction<IGetFacts>) => {
            state.facts = payload.items
        },
        getSimilarFilms : (state, { payload }: PayloadAction<IGetSimilarFilms>)=> {
            state.similars = payload.items
            state.similarsTotal = payload.total
        }
    }
})
export const { getFilm, getFacts, getSimilarFilms} = aboutFilmReducer.actions

export default aboutFilmReducer.reducer;