import React from "react";
import {View, Text, Image} from "react-native";
import {moderateScale} from "react-native-size-matters";
import Svg, {Path} from "react-native-svg";
import styles from "../../themes/components/MessageBubble";

export default function MessageBubble({mine, image, text}) {
    return (
        <View style={[styles.message, mine ? styles.mine : styles.not_mine]}>
            <View
                style={[
                    styles.cloud,
                    {backgroundColor: mine ? "#e94057" : "#dddddd"},
                ]}>
                {image ? (
                    <Image
                        style={[
                            styles.image,
                            {alignSelf: mine ? "flex-end" : "flex-start"},
                        ]}
                        borderRadius={10}
                        source={image}
                    />
                ) : null}
                {text ? (
                    <Text
                        style={[
                            styles.text,
                            {color: mine ? "white" : "black"},
                        ]}>
                        {text}
                    </Text>
                ) : null}
                <View
                    style={[
                        styles.arrow_container,
                        mine
                            ? styles.arrow_right_container
                            : styles.arrow_left_container,
                    ]}>
                    <Svg
                        style={mine ? styles.arrow_right : styles.arrow_left}
                        width={moderateScale(15.5, 0.6)}
                        height={moderateScale(17.5, 0.6)}
                        viewBox="32.484 17.5 15.515 17.5"
                        enable-background="new 32.485 17.5 15.515 17.5">
                        <Path
                            d={
                                mine
                                    ? "M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                                    : "M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                            }
                            fill={mine ? "#e94057" : "#dddddd"}
                            x="0"
                            y="0"
                        />
                    </Svg>
                </View>
            </View>
        </View>
    );
}
