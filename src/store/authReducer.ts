import {SET_AUTH} from './actionConst'
let initialState = {
    isAuth: false
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        default:
            return state;
    }
}

export default authReducer;