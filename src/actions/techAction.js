import { GET_TECHS, ADD_TECHS, DELETE_TECHS, TECHS_ERROR, SET_LOADING } from "./types";

// Get Techs from server
export const getTechs = () => async dispatch =>{
    try{
        setLoading()

        const res = await fetch('/techs')
        const data = await res.json()

        dispatch({
            type: GET_TECHS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}
// Add Techs f
export const addTechs = (tech) => async dispatch =>{
    try{
        setLoading()

        const res = await fetch('/techs', {
            method: 'POST',
            body: JSON.stringify(tech),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()

        dispatch({
            type: ADD_TECHS,
            payload: data
        })
    }catch(err){
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

// Delete Techs
export const deleteTech = (id) => async dispatch => {
    try{
        setLoading()

        await fetch(`/techs/${id}`,{
            method: 'DELETE'
        })
        dispatch({
            type: DELETE_TECHS,
            payload: id
        })
    } catch (err) {
        dispatch({
            type: TECHS_ERROR,
            payload: err.response.statusText
        })
    }
}

// Set loading to true
export const setLoading = () =>{
    return{
        type: SET_LOADING
    }
}