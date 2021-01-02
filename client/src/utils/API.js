import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    logout: ()=>{
        return axios.get(
            "/api/logout"
        )
    },
    register:(userData)=>{
        return axios.post(
            "/api/register", userData);
        },
    userLogin:(userData)=>{
        return axios.post(
            "/api/user/login", userData);
        },
}