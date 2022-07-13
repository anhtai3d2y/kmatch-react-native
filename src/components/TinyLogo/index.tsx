import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {Image, Text, View} from "react-native";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import useStore from "../../stores/store";
import styles from "../../themes/components/TinyLogo";
import {convertHMS} from "../../utils/util";

export default function TinyLogo() {
    const userProfile = useStore(state => state.userProfile, shallow);
    const [bootsTime, setBootsTime] = useState(
        Math.round(userProfile.boots / 1000),
    );
    const [starAmount, setStarAmount] = useState(userProfile.starAmount);
    const [bootsAmount, setBootsAmount] = useState(userProfile.bootsAmount);
    const bootsTimeText = convertHMS(bootsTime);
    useEffect(() => {
        const interval = setInterval(() => {
            if (bootsTime > 0) {
                setBootsTime(bootsTime => bootsTime - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    }),
        [];
    useEffect(() => {
        setBootsTime(Math.round(userProfile.boots / 1000));
        setStarAmount(userProfile.starAmount);
        setBootsAmount(userProfile.bootsAmount);
    }, [userProfile]);
    return (
        <View style={styles.container}>
            <View style={styles.amountContainer}>
                <View style={styles.starContainer}>
                    <AntDesign name="star" size={15} color={colors.superlike} />
                    <Text style={styles.amountStar}>{starAmount}</Text>
                </View>
                <View style={styles.bootsContainer}>
                    <MaterialIcons name="bolt" size={20} color={colors.boots} />
                    <Text style={styles.amountBoots}>{bootsAmount}</Text>
                </View>
            </View>
            <View style={styles.logoContainer}>
                {/* <Image
                    style={styles.logo}
                    source={require("../../assets/logo/kmatch.png")}
                /> */}
                <Ionicons
                    name="logo-web-component"
                    size={20}
                    color={colors.redColor}
                />
                <Text style={styles.title}>kmatch</Text>
            </View>
            <View style={styles.bootsTimeContainer}>
                <Text style={styles.bootsTime}>{bootsTimeText}</Text>
                <MaterialIcons
                    name="offline-bolt"
                    size={20}
                    color={colors.like}
                />
            </View>
        </View>
    );
}
