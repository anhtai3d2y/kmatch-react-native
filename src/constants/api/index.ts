// const API_URL = "http://localhost:3000";
const API_URL = "http://www.kmatch.online";

const EndpointApi = {
    login: "/auth/login",
    refreshToken: "/auth/refresh",
    verification: "/auth/verification",
    forgetPassword: "/auth/forgetpassword",
    resetPassword: "/auth/resetpassword",
    changePassword: "/auth",
    signup: "/auth/signup",
    verificationSignup: "/verification",
    user: "/user",
    newfeeds: "/user/news-feed",
    permission: "/permission",
    groupPermission: "/groupPermission",
    likeUsers: "/like-users",
    dislikeUsers: "/dislike-users",
    superlikeUsers: "/superlike-users",
    superlikeStar: "/superlike-star",
    matches: "/matches",
    threads: "/threads",
    messages: "/messages",
    paypal: "/paypal",
};

export {API_URL, EndpointApi};
