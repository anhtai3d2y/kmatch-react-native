import {StyleSheet} from "react-native";
import {height, width} from "../../constants/Layout";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
    header: {
        alignItems: "center",
        marginTop: 30,
    },
    matches: {
        marginTop: 20,
        width: width,
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});

export default styles;
