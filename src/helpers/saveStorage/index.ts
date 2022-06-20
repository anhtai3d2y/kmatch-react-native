/* eslint-disable consistent-return */
/* eslint-disable no-console */
import AsyncStorage from "@react-native-async-storage/async-storage";

const token = "token";
const tokenDevice = "tokenDevice";

const storeData = async (key: string, value: string) => {
    try {
        if (key && value) {
            await AsyncStorage.setItem(key, value);
        } else {
            AsyncStorage.removeItem(key);
        }
    } catch (e) {
        console.log(`ERROR SAVE DATA ${key}`, e);
    }
};
const getData = async (key: string) => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (e) {
        console.log(`ERROR GET DATA FROM ${key}`, e);
    }
};
const setToken = (newToken?: string) => {
    storeData(token, newToken || "");
};

const getToken = () => getData(token);

const setEnvironment = (environment?: string) => {
    storeData("environment", environment || "");
};

const setDataUser = (data: any) => {
    storeData("dataUser", data || "");
};

const setTokenDevice = (token?: string) =>
    token
        ? AsyncStorage.setItem(tokenDevice, token)
        : AsyncStorage.removeItem(tokenDevice);
const getTokenDevice = async () => AsyncStorage.getItem(tokenDevice);

export {
    setToken,
    getToken,
    setDataUser,
    getData,
    setTokenDevice,
    getTokenDevice,
    setEnvironment,
};
