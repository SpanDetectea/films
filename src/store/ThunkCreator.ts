import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { moviesApi } from "../api/api";
import { RootState } from "../store/store";
import { setFilms, togglePreloader } from "./allFilmsReducer";
import {
  RATING__MAX,
  RATING__MIN,
  YEAR__MAX,
  YEAR__MIN,
} from "../consts/filtersConst";

export const setFilmsTC = (
  rating: number[] = [RATING__MIN, RATING__MAX],
  year: number[] = [YEAR__MIN, YEAR__MAX],
  curPage: number = 1
): ThunkAction<void, RootState, unknown, AnyAction> => {
  return async (dispatch) => {
    dispatch(togglePreloader());
    let response = await moviesApi.getFilmsFilters(
      rating[0],
      rating[1],
      year[0],
      year[1],
      curPage
    );
    dispatch(setFilms(response));
    dispatch(togglePreloader());
  };
};
