import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
import Toast from "react-native-toast-message";
import axios from "axios";
export interface VerificationState {
    emailVerification: string;
    statusEmail: boolean;
    statusVerification: boolean;
    isVerificationLoading: boolean;
    setEmailVerification: (email: string) => void;
    setStatusEmail: (status: boolean) => void;
    setStatusVerification: (status: boolean) => void;
    addVerification: (email: string) => void;
    getVerification: (email: string, verificationCode: string) => void;
}

const createVerification: StoreSlice<VerificationState> = (set, get) => ({
    emailVerification: "",
    statusEmail: false,
    statusVerification: false,
    isVerificationLoading: false,
    setEmailVerification: (email: string) => {
        set({
            emailVerification: email,
        });
    },
    setStatusEmail: (status: boolean) => {
        set({
            statusEmail: status,
        });
    },
    setStatusVerification: (status: boolean) => {
        set({
            statusVerification: status,
        });
    },
    addVerification: async (email: string) => {
        try {
            set({
                isVerificationLoading: true,
            });
            const res = await axiosClient.post(
                API_URL + EndpointApi.verificationSignup,
                {
                    email: email,
                },
            );
            const data = res.data;
            set({
                emailVerification: data.data,
                statusEmail: true,
                isVerificationLoading: false,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Verifition Error!",
                text2: error.response.data.message,
            });
            set({
                isVerificationLoading: false,
            });
        }
    },
    getVerification: async (email: string, verificationCode: string) => {
        try {
            set({
                isVerificationLoading: true,
            });
            const res = await axios.get(
                API_URL + EndpointApi.verificationSignup,
                {params: {email: email, verificationCode: verificationCode}},
            );
            const data = res.data;
            set({
                statusVerification: true,
                isVerificationLoading: false,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Verification Error!",
                text2: error.response.data.message,
            });
            set({
                isVerificationLoading: false,
            });
        }
    },
});

export default createVerification;
