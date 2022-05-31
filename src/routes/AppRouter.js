import { useEffect, useReducer } from "react"
import Login from "../components/Login"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Register from "../components/Register"
import { AuthContext } from "../context/AuthContext"
import { authReducer } from "../reducers/authReducer"
import PublicRoute from "./PublicRoute"
import PrivateRoute from "./PrivateRoute"
import RoutesApp from "./RoutesApp"
import { QuestionRouter } from "./QuestionRouter"



const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { isAuthenticated:false }
}

const AppRouter = () =>{
    const[user, dispatch] = useReducer(authReducer, {}, init);
    useEffect(()=>{
        if(!user) return 
        localStorage.setItem('user',JSON.stringify(user))
    },[user]);

    return(
        <AuthContext.Provider value={{user, dispatch}}>
            <BrowserRouter>
            <Routes>
                <Route path='/login' element={
                    <PublicRoute>
                        <Login/>
                    </PublicRoute>
                }/>
                <Route path='/register' element={
                    <PublicRoute>
                        <Register/>
                    </PublicRoute>
                }/>
                <Route path='/*' element={
                    <PrivateRoute>
                        <RoutesApp/>
                        
                    </PrivateRoute>
                }/>
                <Route path='/questions' element={
                    <PrivateRoute>
                        <QuestionRouter/>
                    </PrivateRoute>
                }/>
            </Routes>
            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default AppRouter