import { createActions, handleActions } from 'redux-actions';

/* 초기 상태 */
const initialState = {
    reviews: [], //리뷰 리스트 초기 상태
    review: [], // 리뷰 단일 정보 초기 상태 
};

/* 액션 타입 설정 */
export const ALL_REVIEW = 'review/ALL_REVIEW';
export const REVIEW_DETAIL = 'review/REVIEW_DETAIL';
export const ADMIN_GET_ALL_REVIEWS = 'review/ADMIN_GET_ALL_REVIEWS'; // 관리자 리뷰 조회 액션 타입
export const REVIEW_DETAIL_BY_USER = 'review/REVIEW_DETAIL_BY_USER';
export const ADD_REVIEW = 'review/ADD_REVIEW';
export const UPDATE_REVIEW = 'review/UPDATE_REVIEW';
export const DELETE_REVIEW = 'review/DELETE_REVIEW';

/* 리뷰 관련 액션 함수 */
export const { review : { 
    allReview, 
    reviewDetail, 
    adminGetAllReviews, 
    reviewDetailByUser, 
    addReview,
    updateReview,
    deletereview,

}} = createActions({

    [ALL_REVIEW]: (data) => (data),
    [REVIEW_DETAIL] : (data) => (data),
    [ADMIN_GET_ALL_REVIEWS]: (reviews) => reviews, // 관리자 리뷰 액션 생성 함수
    [REVIEW_DETAIL_BY_USER] : (data) => (data),
    [ADD_REVIEW] : (data) => data,
    [UPDATE_REVIEW] : (data) => data,
    [DELETE_REVIEW] : (data) => data,

});

/* 리듀서 함수 */
const reviewReducer = handleActions(
    {
        /* 사용자 리뷰 목록을 상태에 저장 */
        [ALL_REVIEW]: (state, { payload }) => ({
            ...state,
            reviews: payload, // 서버에서 받아온 사용자 리뷰 목록을 상태에 저장
        }),

        /* 병원 관리자의 해당 병원 리뷰 조회 */
        [REVIEW_DETAIL]: (state, { payload }) => {
            console.log(payload);

            return {
                ...state,
                hospital: payload,
            }
            
        },

        /* 관리자 리뷰 목록을 상태에 저장 */
        [ADMIN_GET_ALL_REVIEWS]: (state, { payload }) => ({
            ...state,
            reviews: payload, // 서버에서 받아온 관리자 리뷰 목록을 상태에 저장
        }),

        /* 사용자 아이디로 해당 리뷰 전체 조회 */
        [REVIEW_DETAIL_BY_USER]: (state, { payload }) => {
            console.log("payload", payload);

            return {
                ...state,
                userReview: payload,
            }
            
        },

        /* 리뷰 추가 */
        [ADD_REVIEW]: (state, {payload}) => {
            return {
                ...state,
                addReview: [...state, payload],
            };
        },

        /* 리뷰 수정 */
        [UPDATE_REVIEW]: (state, {payload}) => {
            return {
                ...state,
                updateReview: state.review.map(review =>
                    review.id === payload.id ? payload : review
                ),
            };
        },

        /* 리뷰 삭제 */
        [DELETE_REVIEW]: (state, {payload}) => {
            return {
                ...state,
                deletereview: state.review.filter(review => review.id !== payload),
            };
        },


    },
    initialState
);

export default reviewReducer;
