import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
export interface UserState {
    user: string;
    getUser: () => void;
}

const createUser: StoreSlice<UserState> = (set, get) => ({
    user: "",
    getUser: async () => {
        try {
            const res = await axiosClient.get(API_URL + EndpointApi.user);
            const data = res.data;
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    },
});

export default createUser;
