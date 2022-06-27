import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface SuperlikeStarState {
    superlikeStars: object;
    addSuperlikeStar: (userId: string, amount: number) => void;
    getSuperlikeStar: () => void;
}

const createSuperlikeStar: StoreSlice<SuperlikeStarState> = (set, get) => ({
    superlikeStars: {},
    addSuperlikeStar: async (userId: string, amount: number) => {
        try {
            const res = await axiosClient.post(
                API_URL + EndpointApi.superlikeStar,
                {
                    userId,
                    amount,
                },
            );
            const data = res.data.data;
            set({
                superlikeStars: data,
            });
            console.log("res: ", data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Superlike Star Error!",
                text2: error.response.data.message,
            });
        }
    },
    getSuperlikeStar: async () => {
        try {
            const res = await axiosClient.get(
                API_URL + EndpointApi.superlikeStar,
            );
            const data = res.data.data;
            console.log("res: ", data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Superlike Stars Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createSuperlikeStar;
