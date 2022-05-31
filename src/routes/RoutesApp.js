
import { Navigate, Route, Routes } from "react-router-dom"
import Home from "../components/Home"
import Profile from "../components/Profile"
import Question from "../components/Questions"
import Register from "../components/Register"
import Statistics from "../components/Statistics"

const RoutesApp=()=> {
    return(
        <>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/statistics' element={<Statistics/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path='/*' element={<Navigate to='/'/>}/>

            
        </Routes>
        </>
    )
}

export default RoutesApp