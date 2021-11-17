import * as actionTypes from './actionType';

export const addPlace = place => dispatch => {
    fetch("https://my-places-d6079-default-rtdb.asia-southeast1.firebasedatabase.app/places.json", {
        method: "POST",
        body: JSON.stringify(place)
    })
        .catch(error => console.log(error))
        .then(response => response.json())
        .then(data => console.log(data))
    }


export const deletePlace = key => {
    return {
        type: actionTypes.DELETE_PLACE,
        payload: key
    }
}