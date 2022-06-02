import React, {useCallback, useRef} from "react";
import {Animated, TouchableWithoutFeedback, View} from "react-native";
import {FontAwesome, AntDesign} from "@expo/vector-icons";
import styles from "../../themes/components/RoundButton";

export default function RoundButton({name, size, color, onPress}) {
    const scale = useRef(new Animated.Value(1)).current;

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
                {name === "star" ? (
                    <AntDesign name={name} size={size} color={color} />
                ) : (
                    <FontAwesome name={name} size={size} color={color} />
                )}
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}
