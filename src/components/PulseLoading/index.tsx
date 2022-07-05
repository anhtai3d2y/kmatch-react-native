import React, {useEffect, useState} from "react";
import {Text, View, StyleSheet, Button, Image, Pressable} from "react-native";
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    interpolate,
    withTiming,
    Extrapolate,
    withRepeat,
    withDelay,
    Easing,
} from "react-native-reanimated";
import styles from "../../themes/components/PulseLoading";

const Pulse = ({delay = 0, repeat}) => {
    const animation = useSharedValue(0);
    useEffect(() => {
        animation.value = withDelay(
            delay,
            withRepeat(
                withTiming(1, {
                    duration: 2000,
                    easing: Easing.linear,
                }),
                repeat ? -1 : 1,
                false,
            ),
        );
    }, []);
    const animatedStyles = useAnimatedStyle(() => {
        const opacity = interpolate(
            animation.value,
            [0, 1],
            [0.6, 0],
            Extrapolate.CLAMP,
        );
        return {
            opacity: opacity,
            transform: [{scale: animation.value}],
        };
    });
    return <Animated.View style={[styles.circle, animatedStyles]} />;
};
export default function PulseLoading() {
    useEffect(() => {
        console.log("Pulse Loading did mount");
    }, []);
    const [pulse, setPulse] = useState([1]);
    return (
        <View style={styles.containerLoading}>
            <View style={{alignItems: "center", justifyContent: "center"}}>
                <Pressable
                    style={styles.innerCircle}
                    onPress={() => {
                        setPulse(prev => [...prev, Math.random()]);
                    }}>
                    <Image
                        style={styles.innerCircle}
                        source={{
                            uri: "https://reactnative.dev/img/tiny_logo.png",
                        }}
                    />
                </Pressable>
                {pulse.map((item, index) => (
                    <Pulse repeat={index === 0} />
                ))}
            </View>
        </View>
    );
}
