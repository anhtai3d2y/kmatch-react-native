import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface SuperlikeUserState {
    superlikeUsers: object[];
    addSuperlikeUser: (userSuperlikedId: string) => void;
    getSuperlikeUser: () => void;
}

const createSuperlikeUser: StoreSlice<SuperlikeUserState> = (set, get) => ({
    superlikeUsers: [],
    addSuperlikeUser: async (userSuperlikedId: string) => {
        try {
            const res = await axiosClient.post(
                API_URL + EndpointApi.superlikeUsers,
                {
                    userSuperlikedId,
                },
            );
            const data = res.data.data;
            set({
                superlikeUsers: data,
            });
            // console.log("res: ", data);
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
            const res = await axiosClient.get(
                API_URL + EndpointApi.superlikeUsers,
            );
            const data = res.data.data;
            console.log("res: ", data);
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
