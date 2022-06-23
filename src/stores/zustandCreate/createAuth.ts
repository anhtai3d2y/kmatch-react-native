import axios from "axios";
import {API_URL, EndpointApi} from "../../constants";
import {setToken} from "../../helpers";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
import Toast from "react-native-toast-message";
interface LoginState {
    token: string;
    user: object;
    isLoginLoading: boolean;
    isSignupLoading: boolean;
    isSignupSuccess: boolean;
    setToken: (token: string) => void;
    loginEmail: (email: string, password: string) => void;
    signup: (body: any) => void;
}

const createAuth: StoreSlice<LoginState> = (set, get) => ({
    token: "",
    user: {},
    isLoginLoading: false,
    isSignupLoading: false,
    isSignupSuccess: false,
    setToken: (token: string) => {
        set({token: token});
    },
    loginEmail: async (email: string, password: string) => {
        try {
            set({
                isLoginLoading: true,
            });
            const res = await axiosClient.post(API_URL + EndpointApi.login, {
                email,
                password,
            });
            const token = res.data.data.accessToken;
            setToken(token);
            set({
                token: token,
                isLoginLoading: false,
            });
            // console.log("res: ", res.data.data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Login Error!",
                text2: error.response.data.message,
            });
            set({
                isLoginLoading: false,
            });
        }
    },
    signup: async body => {
        try {
            set({
                isSignupLoading: true,
            });
            const res = await axiosClient.post(
                API_URL + EndpointApi.signup,
                body,
            );
            set({
                isSignupSuccess: true,
                isSignupLoading: false,
            });
            Toast.show({
                type: "success",
                text1: "Signup successful!",
                text2: res.data.message,
            });
        } catch (error: any) {
            console.log(error.response.data);
            Toast.show({
                type: "error",
                text1: "Signup Error!",
                text2: error.response.data.message,
            });
            set({
                isSignupLoading: false,
            });
        }
    },
});

export default createAuth;
