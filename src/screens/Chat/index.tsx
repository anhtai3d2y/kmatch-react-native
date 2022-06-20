import React, {useEffect, useRef, useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
    KeyboardAvoidingView,
    Platform,
} from "react-native";
import styles from "../../themes/screens/Chat";
import io from "socket.io-client";
import MessageBubble from "../../components/MessageBubble";
const socket = io("http://192.168.1.59:3000");
socket.on("connection", () => {
    console.log("Socket connected!");
    // socket.emit("message", "hello");
});
export default function ChatScreen({route, navigation}) {
    const {id, userName} = route.params;
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([
        {
            mine: false,
            text: "Say something!",
            image: null,
        },
    ]);
    const subscribeMessage = userName === "Tai" ? "2" : "1";
    useEffect(() => {
        socket.on(subscribeMessage, data => {
            console.log(userName, id, ": ", data);
            setMessages(prev => {
                return [
                    ...prev,
                    {
                        mine: true,
                        text: data,
                        image: null,
                    },
                ];
            });
        });
    }, []);
    const handleSendMessage = () => {
        setMessages(prev => {
            return [
                ...prev,
                {
                    mine: false,
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
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}>
            <View style={styles.user_name}>
                <Text style={{fontSize: 20}}>{userName}</Text>
            </View>
            <View>
                <ScrollView style={styles.scroll_view}>
                    <View style={styles.container}>
                        {messages.map(message => (
                            <MessageBubble
                                mine={message.mine}
                                image={message.image}
                                text={message.text}
                                key={id}
                            />
                        ))}
                    </View>
                </ScrollView>
                <View style={styles.box_chat}>
                    <TextInput
                        placeholder="Your message"
                        value={message}
                        style={styles.input}
                        onChangeText={value => setMessage(value)}></TextInput>
                    <TouchableOpacity
                        style={styles.send}
                        onPress={handleSendMessage}>
                        <Text>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    );
}
