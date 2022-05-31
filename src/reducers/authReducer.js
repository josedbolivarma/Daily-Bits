import { useReducer } from "react";
import { getAuth } from "../helpers/getAuth"
import { AuthContext } from "../context/AuthContext";
import { types } from "../types/types";


const initialState={
    isAuthenticated: getAuth(),
    user:null,
    token:null,
};

export const authReducer = (state= initialState, action)=>{
    switch (action.type) {
        case types.login:
          localStorage.setItem("token", JSON.stringify(action.payload.token));
          return {
            ...state,
            isAuthenticated: true,
            user: action.payload.user,
            token: action.payload.token,
          };
        case types.logout:
          localStorage.removeItem("token")
          return {
            ...state,
            isAuthenticated: false,
            user: action.payload.user,
            token: action.payload.token,
          }
        default:
          return state
      }
};

export const AuthProvider = ({children}) => {
    const [state, dispatch] = useReducer (authReducer, initialState);
    return(
        <AuthContext.Provider
          value={
            {
              ...state,
              dispatch,
            }}>
            {children}
        </AuthContext.Provider>
    );
};





