import {StyleSheet, Dimensions} from "react-native";
import {width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 10,
        paddingTop: 40,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    card: {
        width: width,
    },
    user_info: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    user_img_wrapper: {
        paddingTop: 15,
        paddingBottom: 15,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
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
        fontSize: 12,
        color: "#666",
    },
    text_message: {
        fontSize: 14,
        color: "#333333",
    },
});

export default styles;
