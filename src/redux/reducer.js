import * as actionTypes from './actionType';

const initState = {
    palceList: [],
    isAuth: false,
    token: null
}

export const rootReducer = (state=initState, action) => {
    switch(action.type) {
        case actionTypes.ADD_PLACE:
            return {
                ...state,
                palceList: state.palceList.concat(action.payload)
            }
        case actionTypes.DELETE_PLACE:
            return {
                ...state,
                palceList: state.palceList.filter(place => place.key !== action.payload)
            }
        case actionTypes.SET_PLACES:
            return {
                ...state,
                palceList: action.payload
            }
        case actionTypes.AUTHENTICATE_USER:
            return {
                ...state,
                isAuth: true,
                token: action.payload
            }
        default:
            return state;
    }
}