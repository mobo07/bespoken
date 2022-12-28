import axios from "axios";

const BASE_URL = "https://encouraging-hare-garment.cyclic.app/api/";

 const api = axios.create({
    baseURL: BASE_URL
});


export const fetchProducts = async () => {
    try {
        const {data} = await api.get("products?custom=false");
        return data;
    } catch (err) {
        console.log(err);
    }
}
export const fetchCustomProducts = async (key: string, value: string) => {
    try {
        const {data} = await api.get(`products?${key}=${value}`);
        return data;
    } catch (err) {
        console.log(err);
    }
}
export const getProduct = async (id: string) => {
    try {
        const {data} = await api.get(`products/${id}`);
        return data;
    } catch (err) {
        console.log(err);
    }
}
export const fetchDesigns = async () => {
    try {
        const {data} = await api.get("designs");
        return data;
    } catch (err) {
        console.log(err);
    }
}
export const getDesign = async (id: string) => {
    try {
        const {data} = await api.get(`designs/${id}`);
        return data;
    } catch (err) {
        console.log(err);
    }
}

