import * as actionTypes from './actionType';

const initState = {
    palceList: []
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
        default:
            return state;
    }
}