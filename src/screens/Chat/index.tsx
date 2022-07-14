import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Image,
} from "react-native";
import styles from "../../themes/screens/Chat";
import MessageBubble from "../../components/MessageBubble";
import {API_URL} from "../../constants";
import colors from "../../constants/Colors";
import {
    Entypo,
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import useStore from "../../stores/store";
import shallow from "zustand/shallow";
import io from "socket.io-client";
const socket = io(API_URL);
socket.on("connection", () => {
    console.log("Socket connected!");
});
export default function ChatScreen({route, navigation}) {
    const {id, userId, otherUserId, userName, avatar, timeCreated} =
        route.params;
    const getMessages = useStore(state => state.getMessages);
    const getThreads = useStore(state => state.getThreads);
    const addMessages = useStore(state => state.addMessages);
    const messagesStore = useStore(state => state.messages, shallow);
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState(messagesStore);
    useEffect(() => {
        getMessages(id);
    }, []);

    useEffect(() => {
        setMessages(messagesStore);
    }, [messagesStore]);
    const subscribeId = id + otherUserId;
    const emitId = id + userId;
    const scrollViewRef = useRef();
    useEffect(() => {
        socket.on(subscribeId, data => {
            // setMessages(prev => {
            //     return [
            //         ...prev,
            //         {
            //             mine: false,
            //             messageBody: data,
            //             image: null,
            //         },
            //     ];
            // });
            getMessages(id);
            getThreads();
        });
    }, []);
    const handleSendMessage = async () => {
        if (message) {
            await addMessages(id, otherUserId, "Text", message);
            setMessages(prev => {
                return [
                    ...prev,
                    {
                        mine: true,
                        messageBody: message,
                        image: null,
                    },
                ];
            });
            setMessage("");
            socket.emit("events", {
                emitId,
                message,
            });
        }
    };

    const handleSayHello = async () => {
        await addMessages(id, otherUserId, "Text", "Hello");
        setMessages(prev => {
            return [
                ...prev,
                {
                    mine: true,
                    messageBody: "Hello",
                    image: null,
                },
            ];
        });
        socket.emit("events", {
            emitId,
            message: "Hello",
        });
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={styles.container}>
                <View style={styles.userHeader}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.pop();
                        }}>
                        <Entypo
                            name="chevron-left"
                            size={30}
                            color={colors.redColor}
                            style={{marginLeft: 10}}
                        />
                    </TouchableOpacity>
                    <View style={{width: 35, height: 35, marginLeft: 10}}>
                        <Image
                            style={styles.headerImage}
                            source={{
                                uri: avatar,
                            }}
                        />
                    </View>
                    <Text style={{fontSize: 20, marginLeft: 10}}>
                        {userName}
                    </Text>
                </View>
                <View>
                    <View style={styles.containerMessage}>
                        <ScrollView
                            ref={scrollViewRef}
                            onContentSizeChange={() =>
                                scrollViewRef.current.scrollToEnd({
                                    animated: true,
                                })
                            }>
                            <View style={styles.messageHeader}>
                                <Text style={{marginBottom: 20, fontSize: 25}}>
                                    You matched with {userName}.
                                </Text>
                                <Text style={{fontSize: 16}}>
                                    {timeCreated}
                                </Text>
                                <View
                                    style={{
                                        borderWidth: 5,
                                        borderColor: colors.redColor,
                                        borderRadius: 500,
                                        marginTop: 20,
                                        marginBottom: 40,
                                    }}>
                                    <Image
                                        source={{
                                            uri: avatar,
                                        }}
                                        style={{
                                            width: 200,
                                            height: 200,
                                            borderRadius: 500,
                                            borderWidth: 4,
                                            borderColor: "#fff",
                                        }}
                                    />
                                    <MaterialCommunityIcons
                                        name="heart-settings"
                                        size={60}
                                        color={colors.redColor}
                                        style={{
                                            position: "absolute",
                                            alignSelf: "center",
                                            bottom: -30,
                                        }}
                                    />
                                </View>
                                <Text style={{marginBottom: 20, fontSize: 16}}>
                                    Know when {userName} has read your message.
                                </Text>
                                <View
                                    style={{
                                        backgroundColor: colors.superlike,
                                        height: 25,
                                        width: 160,
                                        borderRadius: 15,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        flexDirection: "row",
                                        marginBottom: 20,
                                    }}>
                                    <Ionicons
                                        name="checkmark-done-sharp"
                                        size={16}
                                        color={colors.white}
                                    />
                                    <Text style={{color: colors.white}}>
                                        Get Read Receipts
                                    </Text>
                                </View>
                                <TouchableOpacity onPress={handleSayHello}>
                                    <View
                                        style={{
                                            backgroundColor: colors.redColor,
                                            height: 35,
                                            width: 110,
                                            borderRadius: 30,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            flexDirection: "row",
                                            marginBottom: 20,
                                        }}>
                                        <MaterialCommunityIcons
                                            name="hand-wave"
                                            size={24}
                                            color="#fff"
                                        />
                                        <Text
                                            style={{
                                                color: colors.white,
                                                marginLeft: 10,
                                            }}>
                                            Say hello!
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            {messages &&
                                messages.map((message, index) => (
                                    <MessageBubble
                                        mine={message.mine}
                                        image={message.image}
                                        text={message.messageBody}
                                        key={index}
                                    />
                                ))}
                        </ScrollView>
                    </View>
                    <View style={styles.boxChat}>
                        <TextInput
                            placeholder="Your message"
                            placeholderTextColor="#000"
                            value={message}
                            style={styles.input}
                            onChangeText={value => setMessage(value)}
                            onFocus={() =>
                                scrollViewRef.current.scrollToEnd({
                                    animated: true,
                                })
                            }></TextInput>
                        <TouchableOpacity
                            style={styles.send}
                            onPress={handleSendMessage}>
                            <FontAwesome
                                name="send"
                                size={24}
                                color={message ? colors.redColor : "#ccc"}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
