import { APPLIED_SHIFTS, BIDS_RESULT, BIDS_RESULT_COMPLETED, BIDS_RESULT_REJECTED, EVENTS_DATA, FACILITY, GET_SHIFTS, KEYWORDS, RUNNING_SHIFT } from "../types";

const initialState = {
    shifts: null,
    appliedShifts: null,
    bidResults: null,
    bidResultsRejected: null,
    bidResultsCompleted: null,
    keywords: null,
    facility: null,
    runningShift: null,
    scheduleData: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SHIFTS:
            return {
                ...state,
                shifts: action.payload
            }
        case APPLIED_SHIFTS:
            return {
                ...state,
                appliedShifts: action.payload
            }
        case BIDS_RESULT:
            return {
                ...state,
                bidResults: action.payload
            }
        case BIDS_RESULT_REJECTED:
            return {
                ...state,
                bidResultsRejected: action.payload
            }
        case BIDS_RESULT_COMPLETED:
            return {
                ...state,
                bidResultsCompleted: action.payload
            }
        case KEYWORDS:
            return {
                ...state,
                keywords: action.payload
            }
        case FACILITY:
            return {
                ...state,
                facility: action.payload
            }
        case RUNNING_SHIFT:
            return {
                ...state,
                runningShift: action.payload
            }
        case EVENTS_DATA:
            return {
                ...state,
                scheduleData: action.payload
            }
        default:
            return state;
    }
}