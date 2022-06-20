import {API_URL, EndpointApi} from "../../constants";
import {setToken} from "../../helpers";
import axiosClient from "../../utils/axios";
import {TokenState} from "./createToken";
import StoreSlice from "./storeSlice";

interface LoginState {
    loginEmail: (email: string, password: string) => void;
}

const createLogin: StoreSlice<LoginState, TokenState> = (set, get) => ({
    loginEmail: async (email: string, password: string) => {
        try {
            const res = await axiosClient.post(API_URL + EndpointApi.login, {
                email,
                password,
            });
            const token = res.data.accessToken;
            setToken(token);
            set({
                token: token,
            });
        } catch (error) {
            console.log(error);
        }
    },
});

export default createLogin;
