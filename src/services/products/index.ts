import axios from "axios";
import { Product } from "../../interfaces";

const path = `http://localhost:3001/products`;

export const getProducts = async () => {
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (error) {
        if (error) {
            return error;
        }
    }
};

export const getProduct = async (id: number) => {
    try {
        const response = await axios.get(`${path}/${id}`);
        return response.data;
    } catch (error) {
        if (error) {
            return error;
        }
    }
};

export const saveProduct = async (product: Product) => {
    try {
        await axios.post(path, product);
    } catch (error) {
        if (error) {
            return error;
        }
    }
};

export const deleteProduct = async (id: number) => {
    try {
        await axios.delete(`${path}/${id}`);

    } catch (error) {
        if (error) {
            return error;
        }
    }
};

export const updateProduct = async (id: number, updatedProduct: Product) => {
    try {
        await axios.put(`${path}/${id}`, updatedProduct);
    } catch (error) {
        if (error) {
            return error;
        }
    }
};