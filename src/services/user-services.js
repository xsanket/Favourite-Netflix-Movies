import {axiosInstance} from "./helper";

export const registerUser=(user)=>{
    return axiosInstance
    .post("http://localhost:8081", user)
    .then((response) => Response.data())
};