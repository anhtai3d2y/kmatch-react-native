import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../../themes/components/MatchedCard";
export default function MatchedCard({name, avatar, age}) {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: avatar,
                }}
                style={{height: 200, width: 140, borderRadius: 10}}
            />
            <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.9)"]}
                style={styles.gradient}
            />
            <Text style={styles.name}>
                {name}, {age}
            </Text>

            <View style={styles.actionContainer}>
                <TouchableOpacity>
                    <View style={styles.dislike}>
                        <FontAwesome name="times" size={24} color="white" />
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "#fff",
                        height: 30,
                    }}></View>
                <TouchableOpacity>
                    <View style={styles.like}>
                        <Ionicons name="heart" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
