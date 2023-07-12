import { END_LOADING, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import * as api from "../USERAPI/userApi";

import { GETUSER, DELETEUSER, UPDATEUSER, CREATEUSER, GETSINGLEUSER } from "../USERCONSTANT/actionTypes";

export const getAllUSER = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchUsers();
        dispatch({ type: GETUSER, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: END_LOADING })
        console.log(error.message)
    }
}

export const getSINGLEUSER = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleUser(id);

        dispatch({ type: GETSINGLEUSER, payload: data })
    } catch (error) {
        console.log(error.message)
    }
}

export const createUSER = (values, setLoading, setSuccess, setFailure, clearCodeData, setSendInvite) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createUser(values);
        dispatch({ type: CREATEUSER, payload: data });
        setLoading(false);
        clearCodeData()
        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
            setSendInvite(false)
        }, 5000)



    } catch (error) {
        setLoading(false);
        setSuccess(false)
        setFailure(true)
        console.log(error)
    }
}

export const updateUSER = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateUser(id, post);
        dispatch({ type: UPDATEUSER, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteUSER = (id) => async (dispatch) => {
    try {
        await api.deleteUser(id);
        dispatch({ type: DELETEUSER, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}