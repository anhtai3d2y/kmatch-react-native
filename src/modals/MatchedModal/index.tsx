import {FontAwesome} from "@expo/vector-icons";
import React, {useEffect} from "react";
import {Modal, Text, Pressable, View, Image} from "react-native";
import colors from "../../constants/Colors";
import {height, width} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/modals/MatchedModal";
import io from "socket.io-client";
import {API_URL} from "../../constants";
const socket = io(API_URL);
const MatchedModal = ({
    visible,
    setVisible,
    userName,
    userAvatar,
    otherUserAvatar,
    userId,
    otherUserId,
    navigation,
}) => {
    const getThreads = useStore(state => state.getThreads);
    const addThreads = useStore(state => state.addThreads);

    useEffect(() => {
        socket.emit("matches", {
            emitId: "matched" + otherUserId,
            message: {
                visible,
                setVisible,
                userName,
                userAvatar,
                otherUserAvatar,
                userId,
                otherUserId,
            },
        });
    }, []);

    const handleGoToChat = () => {
        const handle = async () => {
            await addThreads(otherUserId);
            await getThreads();
            setVisible(!visible);
            navigation.navigate("MessagesTab");
        };
        handle();
    };
    return (
        <View style={styles.backgroundView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.avatarView}>
                            <View style={styles.avatarLeft}>
                                <View style={styles.iconLeft}>
                                    <FontAwesome
                                        name="heart"
                                        size={24}
                                        color={colors.redColor}
                                    />
                                </View>
                                <Image
                                    source={{
                                        uri:
                                            otherUserAvatar ||
                                            "https://res.cloudinary.com/anhtai3d2y/image/upload/q_20/v1652849219/kmatch/j7shjf8griq3fwalvs2m.jpg",
                                    }}
                                    style={{
                                        width: width / 3,
                                        height: height / 3,
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                            <View style={styles.avatarRight}>
                                <View style={styles.iconRight}>
                                    <FontAwesome
                                        name="heart"
                                        size={24}
                                        color={colors.redColor}
                                    />
                                </View>
                                <Image
                                    source={{
                                        uri:
                                            userAvatar ||
                                            "https://res.cloudinary.com/anhtai3d2y/image/upload/v1657735552/kmatch/bskcleem5bdowdah17w0.jpg",
                                    }}
                                    style={{
                                        width: width / 3,
                                        height: height / 3,
                                        borderRadius: 10,
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.matchedText}>
                            <Text style={styles.textTitle}>
                                It???s a match, {userName}!
                            </Text>
                            <Text>
                                Start a conversation now with each other
                            </Text>
                        </View>
                        <Pressable
                            style={[styles.button, styles.buttonSayHello]}
                            onPress={handleGoToChat}>
                            <Text style={styles.textSayHello}>Say hello</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonHideModal]}
                            onPress={() => setVisible(!visible)}>
                            <Text style={styles.textHideModal}>
                                Keep swiping
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default MatchedModal;
