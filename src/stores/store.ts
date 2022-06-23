import create, {GetState, SetState} from "zustand";
import createAuth from "./zustandCreate/createAuth";
import createDislikeUser from "./zustandCreate/createDislikeUser";
import createLikeUser from "./zustandCreate/createLikeUser";
import createMatches from "./zustandCreate/createMatches";
import createMessages from "./zustandCreate/createMessages";
import createPaypal from "./zustandCreate/createPaypal";
import createSuperlikeStar from "./zustandCreate/createSuperlikeStar";
import createSuperlikeUser from "./zustandCreate/createSuperlikeUser";
import createThreads from "./zustandCreate/createThreads";
import createUser from "./zustandCreate/createUser";
import createVerification from "./zustandCreate/createVerification";

const createRootSlice = (set: SetState<any>, get: GetState<any>) => ({
    ...createAuth(set, get),
    ...createUser(set, get),
    ...createVerification(set, get),
    ...createLikeUser(set, get),
    ...createDislikeUser(set, get),
    ...createSuperlikeUser(set, get),
    ...createSuperlikeStar(set, get),
    ...createMatches(set, get),
    ...createThreads(set, get),
    ...createMessages(set, get),
    ...createPaypal(set, get),
});

const useStore = create(createRootSlice);

export default useStore;
