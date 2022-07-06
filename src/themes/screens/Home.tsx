import {StyleSheet, Dimensions} from "react-native";
import Constants from "expo-constants";

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: "center",
        paddingTop: 30,
    },
    loading: {
        justifyContent: "center",
        height: height - 150,
    },
    avatar: {
        position: "absolute",
        top: 100,
    },

    containerLoading: {
        flex: 1,
        justifyContent: "center",
        paddingTop: Constants.statusBarHeight,
        backgroundColor: "#ecf0f1",
        padding: 8,
    },
    circle: {
        width: 300,
        borderRadius: 150,
        height: 300,
        position: "absolute",
        borderColor: "#e91e63",
        borderWidth: 4,
        backgroundColor: "#ff6090",
    },
    innerCircle: {
        width: 80,
        borderRadius: 40,
        height: 80,
        zIndex: 100,
        position: "absolute",
        backgroundColor: "white",
    },
});

export default styles;
