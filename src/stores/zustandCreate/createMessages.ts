import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface MessagesState {
    messages: object[];
    addMessages: (
        threadId: string,
        receiverId: string,
        messageType: string,
        messageBody: string,
    ) => void;
    getMessages: (threadId: string) => void;
}

const createMessages: StoreSlice<MessagesState> = (set, get) => ({
    messages: [],
    addMessages: async (
        threadId: string,
        receiverId: string,
        messageType: string,
        messageBody: string,
    ) => {
        try {
            const res = await axiosClient.post(API_URL + EndpointApi.messages, {
                threadId,
                receiverId,
                messageType,
                messageBody,
            });
            const data = res.data.data;
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Add Messages Error!",
                text2: error.response.data.message,
            });
        }
    },
    getMessages: async (threadId: string) => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.messages, {
                params: {threadId},
            });
            const data = res.data.data;
            set({
                messages: data,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Messages Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createMessages;
