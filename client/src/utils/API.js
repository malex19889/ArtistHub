import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    logout: ()=>{
        return axios.get(
            "/auth/logout"
        )
    },
    register:(userData)=>{
        return axios.post(
            "/api/register", userData);
        },
    userLogin:(userData)=>{
        return axios.post(
            "/auth/user/login", userData);
        },
    bandLogin:(userData)=>{
        return axios.post(
            "/auth/band/login", userData);
        },
}