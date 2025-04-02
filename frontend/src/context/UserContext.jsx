import axios from "axios";
import { data } from "react-router-dom";
const API_URL = "http://localhost:3001/api/users";

export const registerUser =async(data)=>{
    console.log(data)
    
           
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
    
}

export const loginuser=async(data)=>{
    console.log(data)
    const response=await axios.post(`${API_URL}/login`,data)
   
    return response.data;
}


export const logoutuser=async()=>{
const response =await axios.get(`${API_URL}/logout`)
console.log("logout")
localStorage.removeItem("token");
return response.data;
}