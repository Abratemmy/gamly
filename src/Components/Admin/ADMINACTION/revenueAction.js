import { END_LOADING, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import * as api from "../API/adminApi";
import { CREATEREVENUE, DELETEREVENUE, GETREVENUE, UPDATEREVENUE } from "../CONSTANT/actionTypes";

export const getAllREVENUE = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchRevenue();
        dispatch({ type: GETREVENUE, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message)
    }
}

export const createREVENUE = (roleForm, setLoading, setSuccess, setFailure, clearRoleForm, setApiError) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        setApiError(false)
        const { data } = await api.createRevenue(roleForm);
        dispatch({ type: CREATEREVENUE, payload: data });
        setLoading(false);
        clearRoleForm()
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 5000)


    } catch (error) {
        setLoading(false);
        setApiError(error)
        setSuccess(false)
        setFailure(true)
        console.log(error)
    }
}

export const updateREVENUE = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateRevenue(id, post);
        dispatch({ type: UPDATEREVENUE, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteREVENUE = (id) => async (dispatch) => {
    try {
        await api.deleteRevenue(id);
        dispatch({ type: DELETEREVENUE, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}