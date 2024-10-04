import { combineReducers } from "redux";
import userReducer from "./UserModule";
import hospitalReducer from "./HospitalModule";
import hospitalScheduleReducer from "./HospitalScheduleModule";
import reservationReducer from "./ReservationModule";


const rootReducer = combineReducers({
    user: userReducer, // user 리듀서를 user 키로 결합
    hospital: hospitalReducer,
    hospitalSchedule: hospitalScheduleReducer,
    reservation: reservationReducer,
});

export default rootReducer;