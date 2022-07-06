import StoreSlice from "./storeSlice";
interface LoginState {
    latitude: number;
    longitude: number;
    setLocation: (latitude: number, longitude: number) => void;
}

const createLocation: StoreSlice<LoginState> = (set, get) => ({
    latitude: 0,
    longitude: 0,
    setLocation: (latitude: number, longitude: number) => {
        set({latitude: latitude, longitude: longitude});
    },
});

export default createLocation;
