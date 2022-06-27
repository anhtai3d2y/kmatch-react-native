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
import io from "socket.io-client";
import MessageBubble from "../../components/MessageBubble";
import {API_URL} from "../../constants";
import colors from "../../constants/Colors";
import {
    Entypo,
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
const socket = io(API_URL);
socket.on("connection", () => {
    console.log("Socket connected!");
    // socket.emit("message", "hello");
});
export default function ChatScreen({route, navigation}) {
    const {id, userName} = route.params;
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        // {
        //     mine: false,
        //     text: "Say something!",
        //     image: null,
        // },
        // {
        //     mine: false,
        //     text: "Ok babe",
        //     image: {
        //         uri: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/76714112_2463775960534937_8739041008815177728_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=l5Qta76QWE0AX-N4OV1&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_-sjENN5Vk2-z0WY-N_OnPjXBKrSqPF-dFjY8WnJz9xg&oe=62D88D22",
        //     },
        // },
    ]);
    const subscribeMessage = userName === "Tai" ? "2" : "1";
    const scrollViewRef = useRef();
    useEffect(() => {
        socket.on(subscribeMessage, data => {
            console.log(userName, id, ": ", data);
            setMessages(prev => {
                return [
                    ...prev,
                    {
                        mine: false,
                        text: data,
                        image: null,
                    },
                ];
            });
        });
    }, []);
    const handleSendMessage = () => {
        if (message) {
            setMessages(prev => {
                return [
                    ...prev,
                    {
                        mine: true,
                        text: message,
                        image: null,
                    },
                ];
            });
            setMessage("");
            socket.emit("events", {
                id,
                message,
            });
        }
    };

    const handleSayHello = () => {
        setMessages(prev => {
            return [
                ...prev,
                {
                    mine: true,
                    text: "Hello",
                    image: null,
                },
            ];
        });
        socket.emit("events", {
            id,
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
                                uri: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/76714112_2463775960534937_8739041008815177728_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=l5Qta76QWE0AX-N4OV1&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_-sjENN5Vk2-z0WY-N_OnPjXBKrSqPF-dFjY8WnJz9xg&oe=62D88D22",
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
                                <Text style={{marginBottom: 20, fontSize: 32}}>
                                    You matched with Tai.
                                </Text>
                                <Text style={{fontSize: 16}}>1 day ago</Text>
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
                                            uri: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/76714112_2463775960534937_8739041008815177728_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=l5Qta76QWE0AX-N4OV1&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_-sjENN5Vk2-z0WY-N_OnPjXBKrSqPF-dFjY8WnJz9xg&oe=62D88D22",
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
                                    Know when Tai has read your message.
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
                            {messages.map((message, index) => (
                                <MessageBubble
                                    mine={message.mine}
                                    image={message.image}
                                    text={message.text}
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
