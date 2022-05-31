import {StyleSheet, Dimensions} from "react-native";
import {width} from "../../constants/Layout";

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    scroll_view: {
        backgroundColor: "#fff",
        marginBottom: 60,
    },
    user_name: {
        position: "absolute",
        top: 20,
        left: width / 2,
    },
    container: {
        backgroundColor: "#fff",
        paddingTop: 40,
    },
    box_chat: {
        backgroundColor: "rgba(0,0,0,0.5)",
        flexDirection: "row",
        width: width,
        height: 60,
        position: "absolute",
        zIndex: 2,
        bottom: 0,
    },
    input: {
        width: width * 0.7,
        height: 40,
        backgroundColor: "rgba(0,0,0,0.5)",
        borderRadius: 20,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#fff",
    },
    send: {
        width: width * 0.3,
        backgroundColor: "#ccc",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default styles;
