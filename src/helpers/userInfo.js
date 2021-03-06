import jwt_decode from "jwt-decode";
import axios from "axios";

export const getUserInfo = async ()=>{
    const dataDecoded= jwt_decode(localStorage.getItem("token"));
    const url = `https://dayli-bit-ao.herokuapp.com/users?email=${dataDecoded.email}`;

    const{data} = await axios.get(url);
    return data 
}