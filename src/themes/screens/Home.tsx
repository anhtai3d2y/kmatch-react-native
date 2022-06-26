import {StyleSheet, Dimensions} from "react-native";

const {height} = Dimensions.get("window");

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: "center",
        paddingTop: 30,
    },
});

export default styles;
