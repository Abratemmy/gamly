import { END_LOADING, PAGE_ERROR, START_LOADING } from "../../Common/REDUX/CONSTANT/actionTypes";
import * as api from "../USERAPI/userApi";

import { GETUSERWITHDRAWALMANAGEMENT, DELETEUSERWITHDRAWALMANAGEMENT, UPDATEUSERWITHDRAWALMANAGEMENT, CREATEUSERWITHDRAWALMANAGEMENT, GETSINGLEUSERWITHDRAWALMANAGEMENT } from "../USERCONSTANT/actionTypes";

export const getAllUSERWITHDRAWAL = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchUserWithdrawal();
        dispatch({ type: GETUSERWITHDRAWALMANAGEMENT, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: END_LOADING })
        dispatch({ type: PAGE_ERROR })
        console.log(error.message)
    }
}

export const getSINGLEUSERWITHDRAWAL = (id) => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchSingleUserWithdrawal(id);

        dispatch({ type: GETSINGLEUSERWITHDRAWALMANAGEMENT, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        dispatch({ type: END_LOADING })
        dispatch({ type: PAGE_ERROR })
        console.log(error.message)
    }
}

export const createWITHDRAWAL = (values, setLoading, setSuccess, setFailure, clearCodeData, setSendInvite) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        const { data } = await api.createUserWithdrawal(values);
        dispatch({ type: CREATEUSERWITHDRAWALMANAGEMENT, payload: data });
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

export const updateWITHDRAWAL = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateUserWithdrawal(id, post);
        dispatch({ type: UPDATEUSERWITHDRAWALMANAGEMENT, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteWITHDRAWAL = (id) => async (dispatch) => {
    try {
        await api.deleteUserWithdrawal(id);
        dispatch({ type: DELETEUSERWITHDRAWALMANAGEMENT, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}