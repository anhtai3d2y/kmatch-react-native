import {getEnvironment} from "../../helpers";

const DEV_BASE_API = "http://localhost:3000";
const PROD_BASE_API = "http://www.kmatch.online";

const UrlApi = {
    dev: {
        url: DEV_BASE_API,
    },
    prod: {
        url: PROD_BASE_API,
    },
};

const getBaseUrlByEnvironment = async () => {
    // const env = await getEnvironment();
    const env = "production";
    return env === "production" ? UrlApi.prod.url : UrlApi.dev.url;
};

const EndpointApi = {
    login: "/auth/login",
    signup: "/auth/signup",
};

export {UrlApi, EndpointApi, getBaseUrlByEnvironment};
