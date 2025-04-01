import axios from "axios";
import { data } from "react-router-dom";
const API_URL = "http://localhost:3001/api/users";

export const registerUser =async(data)=>{
    console.log(data)
      const formData = new FormData();
      formData.append("name",data.name);
      formData.append("email",data.email);
      formData.append("password",data.password)

      console.log("form data",formData)

           
    const response = await axios.post(`${API_URL}/register`, data);
    return response.data;
    
}

export const loginuser=async(data)=>{
    console.log(data)
    const response=await axios.post(`${API_URL}/login`,data)
    return response.data
}