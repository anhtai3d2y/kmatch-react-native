import {FontAwesome, Ionicons} from "@expo/vector-icons";
import {LinearGradient} from "expo-linear-gradient";
import React, {useState} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import KmatchPlusModal from "../../modals/KmatchPlusModal";
import useStore from "../../stores/store";
import styles from "../../themes/components/DislikeCard";
export default function DislikeCard({name, avatar, age, userDislikedId}) {
    const removeDislikedUser = useStore(state => state.removeDislikedUser);
    const getDislikeUser = useStore(state => state.getDislikeUser);
    const [isKmatchPlusModalVisible, setIsKmatchPlusModalVisible] =
        useState(false);
    const handleRemoveDislikedUser = () => {
        const remove = async () => {
            await removeDislikedUser(
                userDislikedId,
                setIsKmatchPlusModalVisible,
            );
            await getDislikeUser();
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
                <TouchableOpacity onPress={handleRemoveDislikedUser}>
                    <View style={styles.dislike}>
                        <FontAwesome name="times" size={24} color="white" />
                    </View>
                </TouchableOpacity>
            </View>
            <KmatchPlusModal
                visible={isKmatchPlusModalVisible}
                setVisible={setIsKmatchPlusModalVisible}
            />
        </View>
    );
}
