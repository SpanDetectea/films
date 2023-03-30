import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { moviesApi } from "../api/api";
import { setFilms, togglePreloaderState } from "./action";
import { RootState }  from '../store/store'

export const setFilmsTC = (rating: number[] = [0,10], year: number[] = [1963, 2022], curPage: number = 1): ThunkAction<void, RootState, unknown, AnyAction> => {
    return async (dispatch) => {
        dispatch(togglePreloaderState());
        let response = await moviesApi.getFilmsFilters(
            rating[0],
            rating[1],
            year[0],
            year[1],
            curPage
        )
        dispatch(setFilms(response));
        dispatch(togglePreloaderState());
    }
}