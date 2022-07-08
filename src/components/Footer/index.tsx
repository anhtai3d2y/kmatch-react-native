import React from "react";
import {View} from "react-native";
import Colors from "../../constants/Colors";
import RoundButton from "../RoundButton";
import styles from "../../themes/components/Footer";

export default function Footer({
    handleChoiceLike,
    handleChoiceSuperlike,
    handleChoiceBoots,
}) {
    return (
        <View style={styles.container}>
            <RoundButton
                name="times"
                size={30}
                color={Colors.nope}
                onPress={() => handleChoiceLike(-1)}
            />
            <RoundButton
                name="star"
                size={30}
                color={Colors.superlike}
                onPress={() => handleChoiceSuperlike(0)}
            />
            <RoundButton
                name="heart"
                size={26}
                color={Colors.like}
                onPress={() => handleChoiceLike(1)}
            />
            <RoundButton
                name="boots"
                size={40}
                color={Colors.boots}
                onPress={handleChoiceBoots}
            />
        </View>
    );
}
