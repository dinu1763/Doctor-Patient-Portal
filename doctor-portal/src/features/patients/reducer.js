import { GET_PATIENT_DETAIL, GET_PATIENT_LOADING } from "./actionTypes";

const init = { data: {}, loading: true };
export const detailsReducer = (state = init, { type, payload }) => {
    switch (type) {
        case GET_PATIENT_LOADING:
            return {
                ...state,
                loading: true,
            };
        case GET_PATIENT_DETAIL:
            return {
                ...state,
                data: payload,
                loading: false,
            };
        default:
            return state;
    }
};