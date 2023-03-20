import {GET__SEARCH__FILMS} from './actionConst'

interface Istate2 {
    films: any[],
    isAuth: Boolean,
}

let initialState: Istate2 = {
    films: [],
    isAuth: false
}
const headerReducer = (state = initialState, action: any) => {
switch (action.type) {
    case GET__SEARCH__FILMS:
        return {...state, films: [...action.films]}
    default: return state;
}

}

export default headerReducer;