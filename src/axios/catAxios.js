import axios from "axios"

let path = 'https://localhost:5000'


export const getAllCategories = () => {
    return axios.get(`${path}/getCategories`);
}