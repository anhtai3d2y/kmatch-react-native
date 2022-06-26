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
        backgroundColor: "rgba(0,0,0,0.6)",
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
