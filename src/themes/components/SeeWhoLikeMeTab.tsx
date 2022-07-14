import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import {height, width} from "../../constants/Layout";

const styles = StyleSheet.create({
    matches: {
        marginTop: 20,
        width: width,
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
    loading: {
        justifyContent: "center",
        height: height - 150,
    },
});

export default styles;
