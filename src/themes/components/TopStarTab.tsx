import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
import {width} from "../../constants/Layout";

const styles = StyleSheet.create({
    matches: {
        paddingTop: 10,
        width: width,
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: "wrap",
    },
});

export default styles;
