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
    }
    // maybe can turn into 1 call 
    // post band member call
    // post image call
    // post tour date call(possible external api for this such as songkick)
    // ---------------------------------

    // update user call

    // update band call
}