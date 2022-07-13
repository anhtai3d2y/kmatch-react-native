import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import {height, width} from "../../constants/Layout";

const styles = StyleSheet.create({
    matches: {
        paddingTop: 10,
        width: width,
        height: height - 200,
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    loading: {
        justifyContent: "center",
        height: height - 150,
    },
    user_info: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    user_img_wrapper: {
        marginLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        alignItems: "center",
        flexDirection: "row",
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 50,
        borderWidth: 2,
        borderColor: colors.redColor,
    },
    text_section: {
        flexDirection: "column",
        justifyContent: "center",
        padding: 15,
        paddingLeft: 0,
        marginLeft: 10,
        width: 300,
        borderBottomWidth: 1,
        borderBottomColor: "#cccccc",
    },
    user_info_text: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 5,
    },
    user_name: {
        fontSize: 14,
        fontWeight: "bold",
    },
    post_time: {
        marginRight: 10,
        fontSize: 12,
        color: "#666",
    },
    text_message: {
        fontSize: 14,
        color: "#333333",
    },
    amountContainer: {
        position: "absolute",
        right: 10,
        alignItems: "flex-end",
    },
    starContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    superlikeContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",

        marginTop: 10,
    },
    amountStar: {
        marginLeft: 5,
        color: colors.superlike,
        fontWeight: "bold",
        fontSize: 12,
    },
    amountSuperlike: {
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        color: colors.redColor,
        fontWeight: "bold",
        fontSize: 12,
        marginLeft: 5,
    },
    indexRanking: {
        marginRight: 10,
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default styles;
