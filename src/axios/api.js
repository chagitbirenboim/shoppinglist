import axios from "axios"

let path = 'http://localhost:5000'


export const getAllCategories = () => {
    return axios.get(`${path}/getCategories`);
}

export const getPoducts = () => {
    return axios.get(`${path}/getProducts`);
}

export const savePoducts = (productName,categoryName,quantityToAdd) => {
    return axios.post(`${path}/product`,{productName: productName,categoryName:categoryName,quantityToAdd:quantityToAdd});
}