import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import Toast from "react-native-toast-message";
import StoreSlice from "./storeSlice";
export interface MatchesState {
    matches: object[];
    isLoadingMatches: boolean;
    isLoadingAddMatches: boolean;
    addMatches: (userId: string, otherUserId: string) => void;
    getMatches: () => void;
}

const createMatches: StoreSlice<MatchesState> = (set, get) => ({
    matches: [],
    isLoadingMatches: false,
    isLoadingAddMatches: false,
    addMatches: async (userId: string, otherUserId: string) => {
        try {
            set({
                isLoadingAddMatches: true,
            });
            const res = await axiosClient.post(API_URL + EndpointApi.matches, {
                userId,
                otherUserId,
            });
            const data = res.data.data;
            set({
                matches: data,
                isLoadingAddMatches: false,
            });
        } catch (error: any) {
            set({
                isLoadingAddMatches: false,
            });
            Toast.show({
                type: "error",
                text1: "Add Matches Error!",
                text2: error.response.data.message,
            });
        }
    },
    getMatches: async () => {
        try {
            set({
                isLoadingMatches: true,
            });
            const res = await axiosClient.get(API_URL + EndpointApi.matches);
            const data = res.data.data;
            set({
                matches: data,
                isLoadingMatches: false,
            });
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
