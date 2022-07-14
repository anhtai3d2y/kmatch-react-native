import {AntDesign, FontAwesome, Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import KmatchPlatinumModal from "../../modals/KmatchPlatinumModal";
import useStore from "../../stores/store";
import styles from "../../themes/components/LikeMeCard";
export default function LikeMeCard({
    name,
    avatar,
    age,
    userId,
    setIsMatchedModalVisible,
    setIsSuperLikeStarModalVisible,
}) {
    const removeUserLikeMe = useStore(state => state.removeUserLikeMe);
    const addLikeUser = useStore(state => state.addLikeUser);
    const addSuperlikeUser = useStore(state => state.addSuperlikeUser);
    const getUserLikeMe = useStore(state => state.getUserLikeMe);
    const getUserProfile = useStore(state => state.getUserProfile);
    const [isKmatchPlatinumModalVisible, setIsKmatchPlatinumModalVisible] =
        useState(false);
    const handleRemoveUserLikeMe = () => {
        const remove = async () => {
            await removeUserLikeMe(userId, setIsKmatchPlatinumModalVisible);
            await getUserLikeMe();
        };
        remove();
    };

    const handleLikeUserLikeMe = () => {
        const add = async () => {
            await addLikeUser(userId, setIsMatchedModalVisible);
        };
        add();
    };

    const handleSuperlikeUserLikeMe = () => {
        const add = async () => {
            await addSuperlikeUser(
                userId,
                setIsMatchedModalVisible,
                setIsSuperLikeStarModalVisible,
            );
            await getUserProfile();
        };
        add();
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
                <TouchableOpacity onPress={handleRemoveUserLikeMe}>
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
                <TouchableOpacity onPress={handleLikeUserLikeMe}>
                    <View style={styles.like}>
                        <Ionicons name="heart" size={24} color="white" />
                    </View>
                </TouchableOpacity>
                <View
                    style={{
                        borderWidth: 1,
                        borderColor: "#fff",
                        height: 30,
                    }}></View>
                <TouchableOpacity onPress={handleSuperlikeUserLikeMe}>
                    <View style={styles.superlike}>
                        <AntDesign name="star" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
            <KmatchPlatinumModal
                visible={isKmatchPlatinumModalVisible}
                setVisible={setIsKmatchPlatinumModalVisible}
            />
        </View>
    );
}
