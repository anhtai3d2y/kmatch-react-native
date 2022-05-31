import {StyleSheet} from "react-native";
import {moderateScale} from "react-native-size-matters";
import {height, width} from "../../constants/Layout";

const styles = StyleSheet.create({
    message: {
        flexDirection: "row",
        marginVertical: moderateScale(7, 2),
    },
    mine: {
        marginLeft: 20,
    },
    not_mine: {
        alignSelf: "flex-end",
        marginRight: 20,
    },
    cloud: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
    },
    image: {
        width: width / 3,
        height: height / 3,
    },
    text: {
        paddingTop: 3,
        fontSize: 17,
        lineHeight: 22,
    },
    arrow_container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        flex: 1,
    },
    arrow_left_container: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
    },
    arrow_right_container: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    arrow_left: {
        left: moderateScale(-6, 0.5),
    },
    arrow_right: {
        right: moderateScale(-6, 0.5),
    },
});

export default styles;
