import { GET_PATIENT_DETAIL, GET_PATIENT_LOADING } from "./actionTypes"

export const getPatientDetails = (payload) => ({
    type: GET_PATIENT_DETAIL,
    payload
});

export const GET_PATIENT_LOADING = () => ({
    type: GET_PATIENT_LOADING,
});

export const getDetailsByApi = (payload) => (dispatch) => {
    fetch(`http://localhost:2345/patient/${payload}`)
        .then((e) => e.json())
        .then((e) => dispatch(getPatientDetails(e)));
}