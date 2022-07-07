import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
import Toast from "react-native-toast-message";
export interface UserState {
    userProfile: object;
    userNewsFeed: object[];
    isLoadingUserNewsFeed: boolean;
    getUserProfile: () => void;
    setUserNewsFeed: (users: object[]) => void;
    getUserNewsFeed: (
        gender: string,
        minAge: number,
        maxAge: number,
        distance: number,
    ) => void;
    updateUser: (body: any) => void;
}

const createUser: StoreSlice<UserState> = (set, get) => ({
    userProfile: {},
    userNewsFeed: [],
    isLoadingUserNewsFeed: false,
    getUserProfile: async () => {
        try {
            const res = await axiosClient.get(
                API_URL + EndpointApi.userProfile,
            );
            const data = res.data.data[0];
            set({
                userProfile: data,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get User Profile Error!",
                text2: error.response.data.message,
            });
        }
    },
    setUserNewsFeed: (users: object[]) => {
        set({
            userNewsFeed: users,
        });
    },
    getUserNewsFeed: async (
        gender: string,
        minAge: number,
        maxAge: number,
        distance: number,
    ) => {
        try {
            set({
                isLoadingUserNewsFeed: true,
            });
            const res = await axiosClient.get(API_URL + EndpointApi.newsfeed, {
                params: {gender, minAge, maxAge, distance},
            });
            const data = res.data.data.data;
            set({
                userNewsFeed: data,
                isLoadingUserNewsFeed: false,
            });
        } catch (error: any) {
            console.log(error);
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
