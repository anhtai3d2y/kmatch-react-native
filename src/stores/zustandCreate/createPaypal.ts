import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface PaypalState {
    paypal: string;
    isLoadingCreatePaypal: boolean;
    paymentHistory: object[];
    isLoadingPaymentHistory: boolean;
    clearPaypal: () => void;
    addPaypal: (type: string, packageName: string) => void;
    getPaypal: () => void;
}

const createPaypal: StoreSlice<PaypalState> = (set, get) => ({
    paypal: "",
    isLoadingCreatePaypal: false,
    paymentHistory: [],
    isLoadingPaymentHistory: false,
    clearPaypal: () => set({paypal: ""}),
    addPaypal: async (type: string, packageName: string) => {
        try {
            set({
                isLoadingCreatePaypal: true,
            });
            const res = await axiosClient.post(API_URL + EndpointApi.paypal, {
                type: type,
                package: packageName,
            });
            const data = res.data.data;
            set({
                paypal: data.paypalLink,
                isLoadingCreatePaypal: false,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Add Paypal Error!",
                text2: error.response.data.message,
            });
            set({
                paypal: "",
                isLoadingCreatePaypal: false,
            });
        }
    },
    getPaypal: async () => {
        try {
            set({
                isLoadingPaymentHistory: true,
            });
            const res = await axiosClient.get(API_URL + EndpointApi.paypal);
            const data = res.data.data;
            set({
                isLoadingPaymentHistory: false,
                paymentHistory: data,
            });
        } catch (error: any) {
            set({
                isLoadingPaymentHistory: false,
            });
            Toast.show({
                type: "error",
                text1: "Get Payment History Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createPaypal;
