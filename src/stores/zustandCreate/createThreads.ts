import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface ThreadsState {
    threads: object[];
    addThreads: (userId: string, otherUserId: string) => void;
    getThreads: () => void;
}

const createThreads: StoreSlice<ThreadsState> = (set, get) => ({
    threads: [],
    addThreads: async (userId: string, otherUserId: string) => {
        try {
            const res = await axiosClient.post(API_URL + EndpointApi.threads, {
                userId,
                otherUserId,
            });
            const data = res.data.data;
            set({
                threads: data,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Add Threads Error!",
                text2: error.response.data.message,
            });
        }
    },
    getThreads: async () => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.threads);
            const data = res.data.data;
            set({
                threads: data,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Threads Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createThreads;
