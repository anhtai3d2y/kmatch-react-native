import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import shallow from "zustand/shallow";
import KmatchPlatinumModal from "../../modals/KmatchPlatinumModal";
import KmatchPlusModal from "../../modals/KmatchPlusModal";
import useStore from "../../stores/store";
import styles from "../../themes/components/LikedCard";
export default function LikedCard({
    name,
    avatar,
    age,
    userLikedId,
    navigation,
}) {
    const removeLikedUser = useStore(state => state.removeLikedUser);
    const getLikeUser = useStore(state => state.getLikeUser);
    const getThreads = useStore(state => state.getThreads);
    const userProfile = useStore(state => state.userProfile, shallow);
    const addThreads = useStore(state => state.addThreads);
    const [isKmatchPlusModalVisible, setIsKmatchPlusModalVisible] =
        useState(false);
    const [isKmatchPlatinumModalVisible, setIsKmatchPlatinumModalVisible] =
        useState(false);
    const handleGoToChat = () => {
        const handle = async () => {
            await addThreads(userLikedId);
            await getThreads();
            navigation.navigate("MessagesTab");
        };
        if (userProfile.role === "Kmatch Platinum") {
            handle();
        } else {
            setIsKmatchPlatinumModalVisible(true);
        }
    };

    const handleRemoveLikedUser = () => {
        const remove = async () => {
            await removeLikedUser(userLikedId, setIsKmatchPlusModalVisible);
            await getLikeUser();
        };
        remove();
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
                <TouchableOpacity onPress={handleRemoveLikedUser}>
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
            <KmatchPlusModal
                visible={isKmatchPlusModalVisible}
                setVisible={setIsKmatchPlusModalVisible}
            />
            <KmatchPlatinumModal
                visible={isKmatchPlatinumModalVisible}
                setVisible={setIsKmatchPlatinumModalVisible}
            />
        </View>
    );
}
