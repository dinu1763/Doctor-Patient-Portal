import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { detailsReducer } from "../features/patients/reducer"
import { DoctorReducer } from "../features/doctors/reducer"

const rootReducer = combineReducers({
    detailsReducer: detailsReducer,
    DoctorReducer: DoctorReducer,
});

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);