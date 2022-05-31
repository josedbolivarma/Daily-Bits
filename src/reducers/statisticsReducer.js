// import { useReducer } from "react";
// import { StatisticsContext } from "../context/StatisticsContext";
// import { types } from "../types/types";
// import alfa from "../utils/constants";

// const {TOTAL_RESPONSES, SUCCESS, FAILED} = alfa;

// const initialState = {
//   totalResponse: 0,
//   successResponses: 0,
//   failedResponses: 0,
//   hours: 0,
//   userId: 0,
//   id: 0,
// };


// export const statisticsReducer = (state, action) => {
//     switch (action.type) {
//         case types.get:
//             localStorage.setItem(SUCCESS, action.payload.successResponses || 0);
//             localStorage.setItem(FAILED, action.payload.failedResponses || 0);
//             localStorage.setItem(TOTAL_RESPONSES, action.payload.totalResponse || 0)
//             return{
//                 ...state,
//                 totalResponse: action.payload.totalResponse || 0,
//                 successResponses: action.payload.successResponses || 0,
//                 failedResponses: action.payload.failedResponses || 0,
//                 hours: action.payload.hours || 0,
//                 userId: action.payload.userId,
//                 id: action.payload.id,  
//             };
//         default:
//             return state;
//     }
// };

// export const StatisticsProvider = ({children})=>{
//     const [state, dispatch] = useReducer(statisticsReducer, initialState);
//     return (
//         <StatisticsContext.Provider
//             value={{
//                 ...state,
//                 dispatch,
//             }}
//         >
//             {children}
//         </StatisticsContext.Provider>
//     );
// };


