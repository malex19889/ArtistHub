import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    logout: () => {
        return axios.get(
            "/auth/logout"
        )
    },
    userRegister: (userData) => {
        return axios.post(
            "/auth/register", userData);
    },
    bandRegister: (bandData) => {
        return axios.post(
            "/auth/band/register", bandData);
    },
    userLogin: (userData) => {
        return axios.post(
            "/auth/user/login", userData);
    },
    bandLogin: (userData) => {
        return axios.post(
            "/auth/band/login", userData);
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
    }
    // maybe can turn into 1 call 
    // post band member call
    // post image call
    // post tour date call(possible external api for this such as songkick)
    // ---------------------------------

    // update user call

    // update band call
}