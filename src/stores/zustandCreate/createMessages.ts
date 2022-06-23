import {API_URL, EndpointApi} from "../../constants";
import axiosClient from "../../utils/axios";
import StoreSlice from "./storeSlice";
export interface MessagesState {}

const createMessages: StoreSlice<MessagesState> = (set, get) => ({});

export default createMessages;
