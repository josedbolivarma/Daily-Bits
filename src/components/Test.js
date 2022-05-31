import React from "react"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Test = () => {
    const navigate = useNavigate();
    useEffect(() => {
      let unmounted = false;
      if (!unmounted) {
        setTimeout(() => {
          navigate.push("/login");
        }, 6000);
      }
      return () => {
        unmounted = true;
      };
    }, []);
    return (
      <div>
        <h1>Cargando...</h1>
      </div>
    );
  };
  
export default Test;
