import { log } from 'console';
import { IFilm } from '../types/IFilm';
import { setSearchFilmsActionType } from './action';
import {GET__SEARCH__FILMS} from './actionConst'
import { IFilms } from '../types/IFilms';
import { AnyAction } from '@reduxjs/toolkit';


let initialState = {
    films: null as IFilm[] | null,
    isAuth: false
}
type initialStateType = typeof initialState
type ActionsTypes = setSearchFilmsActionType
const headerReducer = (state: initialStateType = initialState, action:  ActionsTypes):initialStateType => {
switch (action.type) {
    case GET__SEARCH__FILMS:        
    console.log(action.films)
        let a =  {...state, films: [...action.films]} 
        console.log(a);
              
        return {...state, films: [...action.films]}
    default: return state;
}

}

export default headerReducer;