import { createActions, handleActions } from "redux-actions";


/* 초기 state값 */
const initialState = {
    schedules: [], // 병원 일정 초기 상태
};


/* 병원 일정 관련 액션 타입 설정 */
export const FETCH_HOSPITAL_SCHEDULES = 'hospital/FETCH_HOSPITAL_SCHEDULES';
export const ADD_HOSPITAL_SCHEDULE = 'hospital/ADD_HOSPITAL_SCHEDULE';
export const UPDATE_HOSPITAL_SCHEDULE = 'hospital/UPDATE_HOSPITAL_SCHEDULE';
export const DELETE_HOSPITAL_SCHEDULE = 'hospital/DELETE_HOSPITAL_SCHEDULE';



/* 병원 관련 액션 함수 */
export const {
    hospitalSchedules: {
        fetchHospitalSchedules,
        addHospitalSchedule,
        updateHospitalSchedule,
        deleteHospitalSchedule
    }
} = createActions({
    /* 병원 일정 관련 액션 */
    [FETCH_HOSPITAL_SCHEDULES]: (data) => data,
    [ADD_HOSPITAL_SCHEDULE]: (data) => data,
    [UPDATE_HOSPITAL_SCHEDULE]: (data) => data,
    [DELETE_HOSPITAL_SCHEDULE]: (scheduleId) => scheduleId
});


/* 리듀서 함수 */
const hospitalReducer = handleActions(
    {

        /* 병원 일정 관련 리듀서 처리 */
        [FETCH_HOSPITAL_SCHEDULES]: (state, { payload }) => {
            return {
                ...state,
                schedules: payload,
                loading: false,
            };
        },

        [ADD_HOSPITAL_SCHEDULE]: (state, { payload }) => {
            return {
                ...state,
                schedules: [...state.schedules, payload],
            };
        },

        [UPDATE_HOSPITAL_SCHEDULE]: (state, { payload }) => {
            return {
                ...state,
                schedules: state.schedules.map(schedule =>
                    schedule.id === payload.id ? payload : schedule
                ),
            };
        },

        [DELETE_HOSPITAL_SCHEDULE]: (state, { payload }) => {
            return {
                ...state,
                schedules: state.schedules.filter(schedule => schedule.id !== payload),
            };
        },
    },
    initialState
);

export default hospitalReducer;


