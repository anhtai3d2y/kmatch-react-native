import create, {GetState, SetState} from "zustand";
import createLogin from "./zustandCreate/createAuth";
import createToken from "./zustandCreate/createToken";
import createUser from "./zustandCreate/createUser";

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
    ...createToken(set, get),
    ...createLogin(set, get),
    ...createUser(set, get),
});

const useStore = create(createRootSlice);

export default useStore;
