import {GET_FILM, GET_FACTS, GET_SIMILAR_FILM} from './actionConst';

interface IState {
    film: any[],
    facts: any[],
    similars: any[],
    similarsTotal: any | null,
}

let initialState: IState = {
    film: [],
    facts: [],
    similars: [],
    similarsTotal: null
}

const aboutFilmReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_FILM:
            let newFilm = [];
            newFilm.push(action.data)
            return {
                ...state,
                film: newFilm
            };
        case GET_FACTS:
            return {
                ...state,
                facts: [...action.data.items]
            };
        case GET_SIMILAR_FILM:
            return {
                ...state,
                similars: [...action.data.items],
                similarsTotal:  action.data.total
            };
        default: return state;
    }
}

export default aboutFilmReducer;