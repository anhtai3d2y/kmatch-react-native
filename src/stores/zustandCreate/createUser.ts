import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
import Toast from "react-native-toast-message";
export interface UserState {
    userNewsFeed: object[];
    isLoadingUserNewsFeed: boolean;
    setUserNewsFeed: (users: object[]) => void;
    getUserNewsFeed: () => void;
    updateUser: (body: any) => void;
}

const createUser: StoreSlice<UserState> = (set, get) => ({
    userNewsFeed: [],
    isLoadingUserNewsFeed: false,
    setUserNewsFeed: (users: object[]) => {
        set({
            userNewsFeed: users,
        });
    },
    getUserNewsFeed: async () => {
        try {
            set({
                isLoadingUserNewsFeed: true,
            });
            const res = await axiosClient.get(API_URL + EndpointApi.newsfeed);
            const data = res.data.data.data;
            set({
                userNewsFeed: data,
                isLoadingUserNewsFeed: false,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get News Feed Error!",
                text2: error.response.data.message,
            });
        }
    },
    updateUser: async (body: any) => {
        try {
            const res = await axiosClient.put(API_URL + EndpointApi.user, body);
            // console.log(res.data.data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Update User Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createUser;
