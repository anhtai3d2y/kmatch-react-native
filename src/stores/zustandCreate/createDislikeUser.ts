import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface DislikeUserState {
    dislikeUsers: object[];
    addDislikeUser: (userId: string, userDislikedId: string) => void;
    getDislikeUser: () => void;
}

const createDislikeUser: StoreSlice<DislikeUserState> = (set, get) => ({
    dislikeUsers: [],
    addDislikeUser: async (userDislikedId: string) => {
        try {
            const res = await axiosClient.post(
                API_URL + EndpointApi.dislikeUsers,
                {
                    userDislikedId,
                },
            );
            const data = res.data.data;
            set({
                dislikeUsers: data,
            });
            console.log("res: ", data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Dislike User Error!",
                text2: error.response.data.message,
            });
        }
    },
    getDislikeUser: async () => {
        try {
            const res = await axiosClient.get(
                API_URL + EndpointApi.dislikeUsers,
            );
            const data = res.data.data;
            console.log("res: ", data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Dislike Users Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createDislikeUser;
