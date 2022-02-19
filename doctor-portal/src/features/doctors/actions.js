import { GET_DOCTOR_LOADING, GET_DOCTOR_DETAILS } from "./actionTypes";

export const getDoctorLoading = () => ({
    type: GET_DOCTOR_LOADING,
});

export const getDoctorDetails = (payload) => ({
    type: GET_DOCTOR_DETAILS,
    payload,
});

export const fetchDoctorDetails = () => (dispatch) => {
    fetch("http://localhost:2345/doctor")
        .then((e) => e.json())
        .then((e) => dispatch(getDoctorDetails(e)));
};