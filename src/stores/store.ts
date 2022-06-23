import create, {GetState, SetState} from "zustand";
import createAuth from "./zustandCreate/createAuth";
import createUser from "./zustandCreate/createUser";
import createVerification from "./zustandCreate/createVerification";

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
    ...createAuth(set, get),
    ...createUser(set, get),
    ...createVerification(set, get),
});

const useStore = create(createRootSlice);

export default useStore;
