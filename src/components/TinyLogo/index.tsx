import React from "react";
import {Image, Text, View} from "react-native";
import styles from "../../themes/components/TinyLogo";

export default function TinyLogo() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require("../../assets/logo/kmatch.png")}
            />
            <Text style={styles.title}>kmatch</Text>
        </View>
    );
}
