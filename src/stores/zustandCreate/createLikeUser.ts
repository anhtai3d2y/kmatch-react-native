import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface LikeUserState {
    likeUsers: object[];
    addLikeUser: (userLikedId: string) => void;
    getLikeUser: () => void;
}

const createLikeUser: StoreSlice<LikeUserState> = (set, get) => ({
    likeUsers: [],
    addLikeUser: async (userLikedId: string) => {
        try {
            const res = await axiosClient.post(
                API_URL + EndpointApi.likeUsers,
                {
                    userLikedId,
                },
            );
            const data = res.data.data;
            // console.log("res: ", data);
            // Toast.show({
            //     type: "message",
            //     text1: "Like User Success!",
            //     text2: data,
            // });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Like User Error!",
                text2: error.response.data.message,
            });
        }
    },
    getLikeUser: async () => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.likeUsers);
            const data = res.data.data;
            set({
                likeUsers: data,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Like Users Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createLikeUser;
