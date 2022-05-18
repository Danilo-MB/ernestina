import axios from "axios";

const path = `http://localhost:3001/categories`;

export const getCategories = async () => {
    try {
        const response = await axios.get(path);
        return response.data;
    } catch (error) {
        if (error) {
            return error;
        }
    }
}