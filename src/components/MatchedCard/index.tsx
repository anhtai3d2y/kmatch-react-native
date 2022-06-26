import {FontAwesome, Ionicons} from "@expo/vector-icons";
import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import styles from "../../themes/components/MatchedCard";
export default function MatchedCard() {
    return (
        <View style={styles.container}>
            <Image
                source={{
                    uri: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/76714112_2463775960534937_8739041008815177728_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=l5Qta76QWE0AX-N4OV1&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_-sjENN5Vk2-z0WY-N_OnPjXBKrSqPF-dFjY8WnJz9xg&oe=62D88D22",
                }}
                style={{height: 200, width: 140, borderRadius: 10}}
            />
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
