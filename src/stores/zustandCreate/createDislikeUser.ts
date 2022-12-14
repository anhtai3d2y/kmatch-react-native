import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface DislikeUserState {
    dislikeUsers: object[];
    isLoadingDislikeUsers: boolean;
    isLoadingRemoveDislikedUser: boolean;
    addDislikeUser: (userId: string, userDislikedId: string) => void;
    getDislikeUser: () => void;
    removeDislikedUser: (
        userId: string,
        setIsKmatchPlusModalVisible: any,
    ) => void;
}

const createDislikeUser: StoreSlice<DislikeUserState> = (set, get) => ({
    dislikeUsers: [],
    isLoadingDislikeUsers: false,
    isLoadingRemoveDislikedUser: false,
    addDislikeUser: async (userDislikedId: string) => {
        try {
            const res = await axiosClient.post(
                API_URL + EndpointApi.dislikeUsers,
                {
                    userDislikedId,
                },
            );
            const data = res.data.data;
            // console.log("res: ", data);
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
            set({
                isLoadingDislikeUsers: true,
            });
            const res = await axiosClient.get(
                API_URL + EndpointApi.dislikeUsers,
            );
            const data = res.data.data;
            set({
                dislikeUsers: data,
                isLoadingDislikeUsers: false,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Dislike Users Error!",
                text2: error.response.data.message,
            });
        }
    },
    removeDislikedUser: async (userId, setIsKmatchPlusModalVisible) => {
        try {
            set({
                isLoadingRemoveDislikedUser: true,
            });
            const res = await axiosClient.delete(
                API_URL + EndpointApi.dislikeUsers + "/" + userId,
            );
            const data = res.data.data;
        } catch (error: any) {
            set({
                isLoadingRemoveDislikedUser: false,
            });
            setIsKmatchPlusModalVisible(true);
        }
    },
});

export default createDislikeUser;
