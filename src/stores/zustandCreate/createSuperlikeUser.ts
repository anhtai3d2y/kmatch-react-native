import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface SuperlikeUserState {
    superlikeUsers: object[];
    isLoadongSuperlikeUsers: boolean;
    matchedData: object;
    addSuperlikeUser: (
        userSuperlikedId: string,
        setIsMatchedModalVisible: any,
    ) => void;
    getSuperlikeUser: () => void;
}

const createSuperlikeUser: StoreSlice<SuperlikeUserState> = (set, get) => ({
    superlikeUsers: [],
    isLoadongSuperlikeUsers: false,
    matchedData: {},
    addSuperlikeUser: async (
        userSuperlikedId: string,
        setIsMatchedModalVisible: any,
    ) => {
        try {
            const res = await axiosClient.post(
                API_URL + EndpointApi.superlikeUsers,
                {
                    userSuperlikedId,
                },
            );
            const data = res.data.data;
            set({
                matchedData: {
                    userName: data.userName,
                    userAvatar: data.userAvatar.secureURL,
                    otherUserAvatar: data.otherUserAvatar.secureURL,
                    userId: data.userId,
                    otherUserId: data.userLikedId,
                },
            });
            console.log("asdj");
            if (data.isMatched) {
                setIsMatchedModalVisible(data.isMatched);
            }
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Superlike User Error!",
                text2: error.response.data.message,
            });
        }
    },
    getSuperlikeUser: async () => {
        try {
            set({
                isLoadongSuperlikeUsers: true,
            });
            const res = await axiosClient.get(
                API_URL + EndpointApi.superlikeUsers,
            );
            const data = res.data.data;
            set({
                superlikeUsers: data,
                isLoadongSuperlikeUsers: false,
            });
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Superlike Users Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createSuperlikeUser;
