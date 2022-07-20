import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface MessagesState {
    messages: object[];
    isLoadingMessages: boolean;
    isLoadingSendMessageImage: boolean;
    addMessages: (
        threadId: string,
        receiverId: string,
        messageType: string,
        messageBody: string,
    ) => void;
    addMessagesImage: (body: any) => void;
    getMessages: (threadId: string) => void;
}

const createMessages: StoreSlice<MessagesState> = (set, get) => ({
    messages: [],
    isLoadingMessages: false,
    isLoadingSendMessageImage: false,
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
    addMessagesImage: async (body: any) => {
        try {
            set({
                isLoadingSendMessageImage: true,
            });
            const res = await axiosClient.post(
                API_URL + EndpointApi.messagesImage,
                body,
            );
            const data = res.data.data;
            set({
                isLoadingSendMessageImage: false,
            });
        } catch (error: any) {
            set({
                isLoadingSendMessageImage: false,
            });
            Toast.show({
                type: "error",
                text1: "Add Messages Image Error!",
                text2: error.response.data.message,
            });
        }
    },
    getMessages: async (threadId: string) => {
        try {
            set({
                isLoadingMessages: true,
            });
            const res = await axiosClient.get(API_URL + EndpointApi.messages, {
                params: {threadId},
            });
            const data = res.data.data;
            set({
                messages: data,
                isLoadingMessages: false,
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
