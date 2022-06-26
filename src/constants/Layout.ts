import {Dimensions} from "react-native";

export const {width, height} = Dimensions.get("screen");

export const CARD = {
    WIDTH: width * 0.98,
    HEIGHT: height * 0.8,
    BORDER_RADIUS: 20,
    OUT_OF_WIDTH: width + 0.5 * width,
    OUT_OF_HEIGHT: height + 0.5 * height,
};

export const ACTION_X_OFFSET = 100;
export const ACTION_Y_OFFSET = 200;
