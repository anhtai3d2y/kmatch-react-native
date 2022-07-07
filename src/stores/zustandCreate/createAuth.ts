import axios from "axios";
import {API_URL, EndpointApi} from "../../constants";
import {
    getData,
    getToken,
    getUserAuth,
    setToken,
    storeData,
} from "../../helpers";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
import Toast from "react-native-toast-message";
interface LoginState {
    token: any;
    userAuth: object;
    isLoginLoading: boolean;
    isSignupLoading: boolean;
    isSignupSuccess: boolean;
    emailForgotpassword: string;
    statusEmailForgotpassword: boolean;
    statusVerificationForgotpassword: boolean;
    isVerificationForgotpasswordLoading: boolean;
    setToken: (token: string) => void;
    setUserAuth: () => void;
    loginEmail: (email: string, password: string) => void;
    signup: (body: any) => void;
    setEmailForgotpassword: (email: string) => void;
    setStatusEmailForgotpassword: (status: boolean) => void;
    setStatusVerificationForgotpassword: (status: boolean) => void;
    addVerificationForgotpassword: (email: string) => void;
    resetpassword: (
        email: string,
        verificationCode: string,
        newPassword: string,
        confirmNewPassword: string,
    ) => void;
}

const createAuth: StoreSlice<LoginState> = (set, get) => ({
    token: getToken(),
    userAuth: getUserAuth(),
    isLoginLoading: false,
    isSignupLoading: false,
    isSignupSuccess: false,
    emailForgotpassword: "",
    statusEmailForgotpassword: false,
    statusVerificationForgotpassword: false,
    isVerificationForgotpasswordLoading: false,
    setToken: (token: string) => {
        set({token: token});
    },
    setUserAuth: () => {
        set({
            userAuth: getUserAuth(),
        });
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
            const data = res.data.data;
            const token = data.accessToken;
            const age =
                new Date().getFullYear() -
                parseInt(data.data.birthday.split("/")[0]);
            const user = {
                id: data.data._id,
                avatar: data.data.avatar,
                email: data.data.email,
                name: data.data.name,
                gender: data.data.gender,
                birthday: data.data.birthday,
                phonenumber: data.data.phonenumber,
                role: data.data.role,
                age: age,
            };
            setToken(token);
            storeData("userAuth", user.toString());
            set({
                token: token,
                userAuth: user,
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
    setEmailForgotpassword: (email: string) => {
        set({
            emailForgotpassword: email,
        });
    },
    setStatusEmailForgotpassword: (status: boolean) => {
        set({
            statusEmailForgotpassword: status,
        });
    },
    setStatusVerificationForgotpassword: (status: boolean) => {
        set({
            statusVerificationForgotpassword: status,
        });
    },
    addVerificationForgotpassword: async (email: string) => {
        try {
            set({
                isVerificationForgotpasswordLoading: true,
            });
            const res = await axiosClient.post(
                API_URL + EndpointApi.forgetPassword,
                {
                    email: email,
                },
            );
            const data = res.data;
            set({
                emailForgotpassword: email,
                statusEmailForgotpassword: true,
                isVerificationForgotpasswordLoading: false,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Verifition Error!",
                text2: error.response.data.message,
            });
            set({
                isVerificationForgotpasswordLoading: false,
            });
        }
    },
    resetpassword: async (
        email: string,
        verificationCode: string,
        newPassword: string,
        confirmNewPassword: string,
    ) => {
        try {
            set({
                isVerificationForgotpasswordLoading: true,
            });
            const res = await axiosClient.put(
                API_URL + EndpointApi.resetPassword,
                {
                    email: email,
                    verificationCode: verificationCode,
                    newPassword: newPassword,
                    confirmNewPassword: confirmNewPassword,
                },
            );
            const data = res.data;
            console.log(data);
            Toast.show({
                type: "success",
                text1: "Reset password successfully!",
                text2: data.message,
            });
            set({
                isVerificationForgotpasswordLoading: false,
                statusVerificationForgotpassword: true,
            });
        } catch (error: any) {
            console.log(error);
            Toast.show({
                type: "error",
                text1: "Verifition Error!",
                text2: error.response.data.message,
            });
            set({
                isVerificationForgotpasswordLoading: false,
            });
        }
    },
});

export default createAuth;
