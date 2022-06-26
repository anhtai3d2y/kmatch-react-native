import {StyleSheet, Dimensions} from "react-native";
import colors from "../../constants/Colors";
import {CARD, width} from "../../constants/Layout";
const {height} = Dimensions.get("window");
const styles = StyleSheet.create({
    container: {
        position: "absolute",
        top: 60,
    },
    image: {
        width: CARD.WIDTH,
        height: CARD.HEIGHT,
        borderRadius: CARD.BORDER_RADIUS,
    },
    gradient: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        borderRadius: CARD.BORDER_RADIUS,
    },
    name: {
        position: "absolute",
        bottom: 100,
        left: 22,
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
    },
    choiceContainer: {
        position: "absolute",
        top: 100,
    },
    likeContainer: {
        left: 45,
        transform: [{rotate: "-30deg"}],
    },
    nopeContainer: {
        right: 45,
        transform: [{rotate: "30deg"}],
    },
    superLikeContainer: {
        position: "relative",
        alignItems: "center",
        top: height - 300,
    },
});

export default styles;
