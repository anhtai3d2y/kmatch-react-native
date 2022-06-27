import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface MatchesState {
    matches: object[];
    addMatches: (userId: string, otherUserId: string) => void;
    getMatches: () => void;
}

const createMatches: StoreSlice<MatchesState> = (set, get) => ({
    matches: [],
    addMatches: async (userId: string, otherUserId: string) => {
        try {
            const res = await axiosClient.post(API_URL + EndpointApi.matches, {
                userId,
                otherUserId,
            });
            const data = res.data.data;
            set({
                matches: data,
            });
            console.log("res: ", data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Add Matches Error!",
                text2: error.response.data.message,
            });
        }
    },
    getMatches: async () => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.matches);
            const data = res.data.data;
            console.log("res: ", data);
        } catch (error: any) {
            Toast.show({
                type: "error",
                text1: "Get Matches Error!",
                text2: error.response.data.message,
            });
        }
    },
});

export default createMatches;
