import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
export interface DislikeUserState {}

const createDislikeUser: StoreSlice<DislikeUserState> = (set, get) => ({});

export default createDislikeUser;
