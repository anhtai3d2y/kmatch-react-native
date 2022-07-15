// const API_URL = "http://192.168.1.59:3000";
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
    userProfile: "/user/profile",
    newsfeed: "/user/news-feed",
    ranking: "/user/ranking",
    permission: "/permission",
    groupPermission: "/groupPermission",
    likeUsers: "/like-users",
    userLikeMe: "/like-users/see-who-like-me",
    removeUserLikeMe: "/like-users/user-like-me",
    dislikeUsers: "/dislike-users",
    superlikeUsers: "/superlike-users",
    superlikeStar: "/superlike-star",
    boots: "/boots",
    useBoots: "/boots/use-boots",
    matches: "/matches",
    threads: "/threads",
    messages: "/messages",
    paypal: "/paypal",
};

export {API_URL, EndpointApi};
