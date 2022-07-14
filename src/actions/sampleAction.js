import Axios from 'axios';
import { SAMPLE_DETAILS_FAIL, SAMPLE_DETAILS_REQUEST, SAMPLE_DETAILS_SUCCESS, SAMPLE_LIST_FAIL, SAMPLE_LIST_REQUEST, SAMPLE_LIST_SUCCESS } from '../constants/sampleConstant'


export const detailsSample = (sampleId) => async (dispatch) =>{
    dispatch({
        type: SAMPLE_DETAILS_REQUEST, payload: sampleId });
    try {
        const { data } = await Axios.get(`/api/sample/`);
        dispatch({ type: SAMPLE_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ 
            type: SAMPLE_DETAILS_FAIL, 
            payload: 
            error.response && error.response.data.message 
            ? error.response.data.message 
            : error.message,
        });
    }
};


export const listSamples = ({}) => async (dispatch) => {
    dispatch({
      type: SAMPLE_LIST_REQUEST,
    });
    try {
      const { data } = await Axios.get(
        `/api/sample/`
      );
      dispatch({ type: SAMPLE_LIST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: SAMPLE_LIST_FAIL, payload: error.message });
    }
  };