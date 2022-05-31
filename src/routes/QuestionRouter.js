import React from "react";
import { Route, Routes } from "react-router-dom";
import QuestionsApp from "../containers/QuestionsApp";

export const QuestionRouter = () =>{
    return(
        <>
        
            <Route exact path="/questions/:category" element={<QuestionsApp />} />
        
        </>
    )
}