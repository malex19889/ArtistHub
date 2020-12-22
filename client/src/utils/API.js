import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default{
    register:(userData)=>{
        return axios.post(
            "/api/register", userData);
        },
}