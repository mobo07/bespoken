import axios from "axios";

const BASE_URL = "https://encouraging-hare-garment.cyclic.app/api/";

export const fetchProducts = axios.create({
    baseURL: BASE_URL
});