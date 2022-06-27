import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface PaypalState {
    paypal: string;
    addPaypal: (packageName: string) => void;
    // getPaypal: (threadId: string) => void;
}

const createPaypal: StoreSlice<PaypalState> = (set, get) => ({
    paypal: "",
    addPaypal: async (packageName: string) => {
        try {
            const res = await axiosClient.post(API_URL + EndpointApi.paypal, {
                package: packageName,
            });
            const data = res.data.data;
            set({
                paypal: data.paypalLink,
            });
            console.log("res: ", data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Add Paypal Error!",
                text2: error.response.data.message,
            });
        }
    },
    getPaypal: async (threadId: string) => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.paypal, {
                params: {threadId},
            });
            const data = res.data.data;
            console.log("res: ", data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Paypal Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createPaypal;
