import React, {useEffect, useState} from "react";
import {View, Text, FlatList, TouchableOpacity, Image} from "react-native";
import shallow from "zustand/shallow";
import TinyLogo from "../../components/TinyLogo";
import useStore from "../../stores/store";
import styles from "../../themes/screens/Message";

export default function MessagesScreen({navigation}) {
    const getThreads = useStore(state => state.getThreads);
    const threads = useStore(state => state.threads, shallow);
    const [messages, setMessages] = useState(threads);
    useEffect(() => {
        getThreads();
    }, []);

    useEffect(() => {
        setMessages(threads);
    }, [threads]);
    return (
        <View style={styles.container}>
            <TinyLogo />
            <View>
                {messages && (
                    <FlatList
                        data={messages}
                        keyExtractor={item => item._id}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() =>
                                    navigation.navigate("Chat", {
                                        id: item._id,
                                        userId: item.user._id,
                                        otherUserId: item.otherUser._id,
                                        userName: item.otherUser.name,
                                        avatar: item.otherUser.avatar.secureURL,
                                        timeCreated: item.timeCreated,
                                    })
                                }>
                                <View style={styles.user_info}>
                                    <View style={styles.user_img_wrapper}>
                                        <Image
                                            style={styles.image}
                                            source={{
                                                uri: item.otherUser.avatar
                                                    .secureURL,
                                            }}
                                        />
                                    </View>
                                    <View style={styles.text_section}>
                                        <View style={styles.user_info_text}>
                                            <Text style={styles.user_name}>
                                                {item.otherUser.name}
                                            </Text>
                                            <Text style={styles.post_time}>
                                                {item.messages &&
                                                    item.messages.time}
                                            </Text>
                                        </View>
                                        <Text style={styles.text_message}>
                                            {item.messages &&
                                                item.messages.messageBody}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                )}
            </View>
        </View>
    );
}
