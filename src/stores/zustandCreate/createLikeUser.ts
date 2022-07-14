import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface LikeUserState {
    likeUsers: object[];
    userLikeMe: object[];
    isLoadingLikeUsers: boolean;
    isLoadingUserLikeMe: boolean;
    matchedData: object;
    addLikeUser: (userLikedId: string, setIsMatchedModalVisible: any) => void;
    getLikeUser: () => void;
    getUserLikeMe: (setIsKmatchGoldModalVisible: any) => void;
}

const createLikeUser: StoreSlice<LikeUserState> = (set, get) => ({
    likeUsers: [],
    userLikeMe: [],
    isLoadingLikeUsers: false,
    isLoadingUserLikeMe: false,
    matchedData: {},
    addLikeUser: async (userLikedId: string, setIsMatchedModalVisible: any) => {
        try {
            const res = await axiosClient.post(
                API_URL + EndpointApi.likeUsers,
                {
                    userLikedId,
                },
            );
            const data = res.data.data;
            // Toast.show({
            //     type: "message",
            //     text1: "Like User Success!",
            //     text2: data,
            // });
            set({
                matchedData: {
                    userName: data.userName,
                    userAvatar: data.userAvatar.secureURL,
                    otherUserAvatar: data.otherUserAvatar.secureURL,
                    userId: data.userId,
                    otherUserId: data.userLikedId,
                },
            });
            if (data.isMatched) {
                setIsMatchedModalVisible(data.isMatched);
            }
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
            set({
                isLoadingLikeUsers: true,
            });
            const res = await axiosClient.get(API_URL + EndpointApi.likeUsers);
            const data = res.data.data;
            set({
                likeUsers: data,
                isLoadingLikeUsers: false,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Like Users Error!",
                text2: error.response.data.message,
            });
        }
    },
    getUserLikeMe: async setIsKmatchGoldModalVisible => {
        try {
            set({
                isLoadingUserLikeMe: true,
            });
            const res = await axiosClient.get(API_URL + EndpointApi.userLikeMe);
            const data = res.data.data;
            set({
                userLikeMe: data,
                isLoadingUserLikeMe: false,
            });
        } catch (error: any) {
            set({
                isLoadingUserLikeMe: false,
            });
            setIsKmatchGoldModalVisible(true);
            Toast.show({
                type: "error",
                text1: "Get User Like Me Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createLikeUser;
