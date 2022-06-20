import StoreSlice from "./storeSlice";

export interface TokenState {
    token: string;
    setToken: (token: string) => void;
}

const createToken: StoreSlice<TokenState> = (set, get) => ({
    token: "",
    setToken: (token: string) => {
        set({token: token});
    },
});

export default createToken;
