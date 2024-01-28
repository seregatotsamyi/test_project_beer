import axios from "axios";

export const productAPI = {
    list(page = 1, per = 10) {
        return instance.get(`beers?page${page}&per_page=${per}`);
    },

    getItem(id) {
        return instance.get(`beers/${id}`);
    },

    addItem(page) {
        return instance.get(`beers?page=${page}&per_page=10`);
    }

}

const instance = axios.create({
    baseURL: "https://api.punkapi.com/v2/"
});