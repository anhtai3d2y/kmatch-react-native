/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {UrlApi} from "../constants";

const axiosClient = axios.create({
    baseURL: UrlApi.dev.url,
    responseType: "json",
    timeout: 15 * 1000,
    headers: {
        "Content-Type": "application/json",
    },
});

axiosClient.interceptors.request.use(async config => {
    const accessToken = await AsyncStorage.getItem("token");
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

axiosClient.interceptors.response.use(
    response => response.data,
    async error => {
        // Handle error
        if (error.response.status === 401) {
            await AsyncStorage.removeItem("token");
        }
        console.error(
            "error",
            error.response ? error.response.data : error.response,
        );
    },
);

export default axiosClient;
