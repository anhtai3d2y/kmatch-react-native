import React, {useCallback, useRef} from "react";
import {Animated, Text, TouchableWithoutFeedback, View} from "react-native";
import {FontAwesome, AntDesign, MaterialIcons} from "@expo/vector-icons";
import styles from "../../themes/components/RoundButton";
import colors from "../../constants/Colors";

export default function RoundButton({name, size, color, onPress}) {
    const scale = useRef(new Animated.Value(1)).current;
    const buttonIcon = {
        star: <AntDesign name="star" size={size} color={color} />,
        heart: <FontAwesome name="heart" size={size} color={color} />,
        times: <FontAwesome name="times" size={size} color={color} />,
        boots: <MaterialIcons name="bolt" size={size} color={color} />,
    };

    const animateScale = useCallback(
        newValue => {
            Animated.spring(scale, {
                toValue: newValue,
                friction: 4,
                useNativeDriver: true,
            }).start();
        },
        [scale],
    );

    return (
        <TouchableWithoutFeedback
            onPressIn={() => animateScale(0.8)}
            delayPressIn={0}
            onPressOut={() => {
                animateScale(1);
                onPress();
            }}
            delayPressOut={110}>
            <Animated.View style={[styles.container, {transform: [{scale}]}]}>
                {buttonIcon[name]}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}
