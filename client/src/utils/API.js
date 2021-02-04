import axios from "axios";
const token = localStorage.getItem("token")
axios.defaults.headers["Authorization"] = "Bearer "+ token
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    logout: () => {
        return axios.get(
            "/auth/logout"
        )
    },
    userRegister: (userData) => {
        return axios.post(
            "/api/user/register", userData);
    },
    bandRegister: (bandData) => {
        return axios.post(
            "/api/band/register", bandData);
    },
    bandUpdate: (bandData) => {
        return axios.put(
            "/auth/band", bandData);
    },
    userLogin: (userData) => {
        return axios.post(
            "/auth/user", userData);
    },
    bandLogin: (userData) => {
        return axios.post(
            "/auth/band", userData);
    },
    // call to get band object(all band data to be passed in as props later)
    bandInfo: (search) => {
        console.log(search);
        return axios.get(
            "/api/bands/", search);
    },
    bandInfoById: (id) => {
        return axios.get(
            "/api/bands/" + id);
    },
    // call to get all bands(limit to name,image,bio?)
    bands: () => {
        return axios.get(
            "/api/bands/");
    },
    saveFavorites: (band) => {
        return axios.post(
            "/api/favorites", band);
    },
    getFavorites: (id) => {
        return axios.get(
            "/api/favorites/" + id)
    },
    deleteFavorites: function (id) {
        return axios.delete("/api/favorites/" + id);
    },
    // Add tourdates to bands
    addTourDate: (data) => {
        return axios.post(
            "/api/tourdate", data)
    },
    // add band memebrs
    addMember: (data) => {
        return axios.post(
            "/api/bandmember", data)
    },
    addMerch: (data) => {
        return axios.post(
            "/api/merch", data)
    },
    merchInfoById: (id) => {
        return axios.get(
            "/api/merch/" + id );
    }
    // maybe can turn into 1 call 
    // post band member call
    // post image call
    // post tour date call(possible external api for this such as songkick)
    // ---------------------------------

    // update user call

    // update band call
}