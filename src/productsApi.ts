import axios from "axios";

const BASE_URL = "https://encouraging-hare-garment.cyclic.app/api/";

 const api = axios.create({
    baseURL: BASE_URL
});

// export const fetchProducts = () => api.get("products?custom=false").then(res => res.data);

// export const fetchCustomProducts = (key: string, value: string) => api.get(`products?${key}=${value}`).then(res => res.data);

// export const getProduct = (id: string) => api.get(`products/${id}`).then(res => res.data);

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