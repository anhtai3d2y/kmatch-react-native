import create, {GetState, SetState} from "zustand";
import createLogin from "./zustandCreate/createLogin";
import createToken from "./zustandCreate/createToken";

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
    ...createToken(set, get),
    ...createLogin(set, get),
});

const useStore = create(createRootSlice);

export default useStore;
