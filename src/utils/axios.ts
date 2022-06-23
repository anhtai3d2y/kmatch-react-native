/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {API_URL} from "../constants";

const axiosClient = axios.create({
    baseURL: API_URL,
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

export default axiosClient;
