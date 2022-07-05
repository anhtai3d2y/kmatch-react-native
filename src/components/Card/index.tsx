import {LinearGradient} from "expo-linear-gradient";
import React, {useCallback} from "react";
import {Image, View, Text, Animated} from "react-native";
import {
    ACTION_X_OFFSET,
    ACTION_Y_OFFSET,
    height,
    width,
} from "../../constants/Layout";
import styles from "../../themes/components/Card";
import Choice from "../Choice";

export default function Card({
    name,
    age,
    source,
    distance,
    isFirst,
    swipe,
    tiltSign,
    ...rest
}) {
    const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
        inputRange: [-ACTION_X_OFFSET, 0, ACTION_X_OFFSET],
        outputRange: ["8deg", "0deg", "-8deg"],
    });

    const likeOpacity = swipe.x.interpolate({
        inputRange: [25, ACTION_X_OFFSET],
        outputRange: [0, 1],
        extrapolate: "clamp",
    });

    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-ACTION_X_OFFSET, -25],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    const superlikeOpacity = swipe.y.interpolate({
        inputRange: [-ACTION_Y_OFFSET, -25],
        outputRange: [1, 0],
        extrapolate: "clamp",
    });

    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), {rotate}],
    };

    const renderChoice = useCallback(() => {
        return (
            <>
                <Animated.View
                    style={[
                        styles.choiceContainer,
                        styles.likeContainer,
                        {opacity: likeOpacity},
                    ]}>
                    <Choice type="like" />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.choiceContainer,
                        styles.nopeContainer,
                        {opacity: nopeOpacity},
                    ]}>
                    <Choice type="nope" />
                </Animated.View>
                <View
                    style={{
                        height: height,
                        width: width,
                        position: "absolute",
                    }}>
                    <Animated.View
                        style={[
                            styles.choiceContainer,
                            styles.superLikeContainer,
                            {opacity: superlikeOpacity},
                        ]}>
                        <Choice type="superlike" />
                    </Animated.View>
                </View>
            </>
        );
    }, [likeOpacity, nopeOpacity]);

    return (
        <Animated.View
            style={[styles.container, isFirst && animatedCardStyle]}
            {...rest}>
            <Image source={{uri: source}} style={styles.image} />
            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.9)"]}
                style={styles.gradient}
            />
            <Text style={styles.name}>
                {name}, {age}
            </Text>
            <Text style={styles.distance}>{distance}</Text>
            {isFirst && renderChoice()}
        </Animated.View>
    );
}
