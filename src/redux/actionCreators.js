import * as actionTypes from './actionType';

export const addPlace = place => {
    return {
        type: actionTypes.ADD_PLACE,
        payload: place
    }
}

export const deletePlace = key => {
    return {
        type: actionTypes.DELETE_PLACE,
        payload: key
    }
}