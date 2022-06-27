import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
import Toast from "react-native-toast-message";
export interface UserState {
    userNewsFeed: object[];
    getUserNewsFeed: () => void;
    updateUser: () => void;
}

const createUser: StoreSlice<UserState> = (set, get) => ({
    userNewsFeed: [],
    getUserNewsFeed: async () => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.newsfeed);
            const data = res.data.data.data;
            console.log(data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get News Feed Error!",
                text2: error.response.data.message,
            });
        }
    },
    updateUser: async () => {},
});

export default createUser;
