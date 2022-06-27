import {StyleSheet, Dimensions} from "react-native";
import colors from "../../constants/Colors";
import {height, width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 30,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    title: {
        fontWeight: "600",
        fontSize: 24,
    },
    messageView: {
        // width: width,
        // paddingHorizontal: 20,
        // marginHorizontal: 10,
    },
    card: {
        width: width,
    },
    user_info: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    user_img_wrapper: {
        marginLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
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
});

export default styles;
