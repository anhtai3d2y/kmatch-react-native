import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import shallow from "zustand/shallow";
import useStore from "../../stores/store";
import styles from "../../themes/components/SuperlikeCard";
export default function SuperlikeCard({name, avatar, age, userId, navigation}) {
    const getThreads = useStore(state => state.getThreads);
    const userProfile = useStore(state => state.userProfile, shallow);
    const addThreads = useStore(state => state.addThreads);
    const handleGoToChat = () => {
        const handle = async () => {
            await addThreads(userId);
            await getThreads();
            navigation.navigate("MessagesTab");
        };
        handle();
    };
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
                <TouchableOpacity onPress={handleGoToChat}>
                    <View style={styles.dislike}>
                        <MaterialCommunityIcons
                            name="message-arrow-right"
                            size={24}
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}
