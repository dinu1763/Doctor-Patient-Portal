import { GET_DOCTOR_DETAILS, GET_DOCTOR_LOADING } from "./actionTypes"

const init = { doctorData: [], loading: true };
export const DoctorReducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET_DOCTOR_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_DOCTOR_DETAILS:
            return {
                ...state,
                doctorData: payload,
                loading: false,
            };
        default:
            return state;
    }
};