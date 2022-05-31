import { createContext } from "react";

export const AuthContext = createContext({
    isAuthenticated:false,
    user:{},
})

export const AuthConsumer = AuthContext.Consumer;
