import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
import Toast from "react-native-toast-message";
import {IUserProfile} from "../model/user";
export interface UserState {
    userProfile: IUserProfile;
    userNewsFeed: object[];
    userRanking: object[];
    isLoadingUserRanking: boolean;
    isLoadingUserNewsFeed: boolean;
    isLoadingUpdateUser: boolean;
    reduceSuperlikeStar: () => void;
    useBoots: () => void;
    getUserProfile: () => void;
    setUserNewsFeed: (users: object[]) => void;
    getUserNewsFeed: (body: any) => void;
    getUserRanking: (body: any) => void;
    updateUserLocation: (body: any) => void;
    updateUserProfile: (body: any) => void;
}

const createUser: StoreSlice<UserState> = (set, get) => ({
    userProfile: {} as IUserProfile,
    userNewsFeed: [],
    userRanking: [],
    isLoadingUserRanking: false,
    isLoadingUserNewsFeed: false,
    isLoadingUpdateUser: false,
    reduceSuperlikeStar: () => {
        const userProfile = get().userProfile;
        if (userProfile.starAmount > 0) {
            set({
                userProfile: {
                    ...userProfile,
                    starAmount: userProfile.starAmount - 1,
                },
            });
        }
    },
    useBoots: async () => {
        if (get().userProfile.bootsAmount > 0) {
            try {
                const res = await axiosClient.post(
                    API_URL + EndpointApi.useBoots,
                );
                const data = res.data;
                const bootsAmount = get().userProfile.bootsAmount;
                const bootsTime = get().userProfile.boots;
                set({
                    userProfile: {
                        ...get().userProfile,
                        bootsAmount: bootsAmount - 1,
                        boots: bootsTime + 30 * 60 * 1000,
                    },
                });
            } catch (error: any) {
                Toast.show({
                    type: "error",
                    text1: "Use Boots Error!",
                    text2: error.response.data.message,
                });
            }
        }
    },
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
    getUserNewsFeed: async (body: any) => {
        try {
            set({
                isLoadingUserNewsFeed: true,
            });
            const res = await axiosClient.get(API_URL + EndpointApi.newsfeed, {
                params: body,
            });
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
    getUserRanking: async (body: any) => {
        try {
            set({
                isLoadingUserRanking: true,
            });
            const res = await axiosClient.get(API_URL + EndpointApi.ranking, {
                params: body,
            });
            const data = res.data.data.data;
            set({
                userRanking: data,
                isLoadingUserRanking: false,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Ranking Error!",
                text2: error.response.data.message,
            });
        }
    },
    updateUserLocation: async (body: any) => {
        try {
            const res = await axiosClient.put(API_URL + EndpointApi.user, body);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Update User Error!",
                text2: error.response.data.message,
            });
        }
    },
    updateUserProfile: async (body: any) => {
        try {
            set({
                isLoadingUpdateUser: true,
            });
            const res = await axiosClient.put(API_URL + EndpointApi.user, body);
            const data = res.data.data;
            Toast.show({
                type: "success",
                text1: "Update Success!",
                text2: `Update User ${data.name}  Success!`,
            });
            set({
                isLoadingUpdateUser: false,
            });
        } catch (error: any) {
            set({
                isLoadingUpdateUser: false,
            });
            Toast.show({
                type: "error",
                text1: "Update User Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createUser;
