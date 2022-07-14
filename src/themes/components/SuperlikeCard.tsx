import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";

const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        height: 200,
        width: 140,
        borderRadius: 10,
    },
    gradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 100,
        borderRadius: 10,
    },
    name: {
        position: "absolute",
        bottom: 35,
        left: 5,
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
    actionContainer: {
        position: "absolute",
        bottom: 0,
        width: 140,
        height: 30,
        borderBottomEndRadius: 10,
        borderBottomStartRadius: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
    },
    dislike: {
        paddingRight: 20,
        paddingLeft: 20,
    },
    like: {
        paddingRight: 20,
        paddingLeft: 20,
    },
});

export default styles;
