import { END_LOADING, START_LOADING } from '../../Common/REDUX/CONSTANT/actionTypes';
import * as api from '../API/adminApi'
import { CREATESALES, DELETESALES, GETSALES, UPDATESALES } from '../CONSTANT/actionTypes';


export const getAllSALES = () => async (dispatch) => {
    try {
        dispatch({ type: START_LOADING })
        const { data } = await api.fetchSales();
        dispatch({ type: GETSALES, payload: data })
        dispatch({ type: END_LOADING })
    } catch (error) {
        console.log(error.message)
    }
}

export const createSALES = (roleForm, setLoading, setSuccess, setFailure, clearRoleForm, setApiError) => async (dispatch) => {
    try {
        setSuccess(false)
        setFailure(false)
        setApiError(false)
        const { data } = await api.createSales(roleForm);
        dispatch({ type: CREATESALES, payload: data });
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

export const updateSALES = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updateSales(id, post);
        dispatch({ type: UPDATESALES, payload: data });
    } catch (error) {
        console.log(error);
        // alert('Ohpps, unable to create new post due to an error.')
    }
}

export const deleteSALES = (id) => async (dispatch) => {
    try {
        await api.deleteSales(id);
        dispatch({ type: DELETESALES, payload: id });
        // alert("Post deleted successfully. Refresh your browser to view")
    } catch (error) {
        // alert("0hpps, Unable to delete Post")
        console.log(error)
    }
}