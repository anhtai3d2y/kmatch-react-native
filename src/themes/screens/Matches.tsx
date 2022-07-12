import {StyleSheet} from "react-native";
import colors from "../../constants/Colors";
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
    tabSelect: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 2,
        borderBottomColor: "#ccc",
    },
    selectBox: {
        marginHorizontal: 10,
        paddingVertical: 20,
        paddingHorizontal: 4,
    },
    tabText: {
        color: "#ccc",
        fontSize: 20,
    },
    selectedTab: {
        fontSize: 20,
        fontWeight: "bold",
    },
    verticalLine: {
        backgroundColor: "#ccc",
        width: 2,
        height: 30,
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
