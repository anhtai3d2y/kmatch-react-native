import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {Image, Text, View} from "react-native";
import colors from "../../constants/Colors";
import styles from "../../themes/components/Logo";

export default function Logo() {
    return (
        <View style={styles.container}>
            {/* <Image
                style={styles.logo}
                source={require("../../assets/logo/kmatch.png")}
            /> */}
            <Ionicons
                name="logo-web-component"
                size={80}
                color={colors.redColor}
            />
            <Text style={styles.title}>kmatch</Text>
        </View>
    );
}
