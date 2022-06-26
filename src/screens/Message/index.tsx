import React from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    Image,
    ScrollView,
} from "react-native";
import TinyLogo from "../../components/TinyLogo";
import {width} from "../../constants/Layout";
import styles from "../../themes/screens/Message";

const Messages = [
    {
        id: "1",
        userName: "Tai",
        userImg: require("../../assets/images/users/user-2.jpg"),
        messageTime: "4 mins ago",
        messageText: "Hello Dong!",
    },
    {
        id: "2",
        userName: "Dong",
        userImg: require("../../assets/images/users/user-1.jpg"),
        messageTime: "2 hours ago",
        messageText: "Hello Tai",
    },
];

export default function MessagesScreen({navigation}) {
    return (
        <View style={styles.container}>
            <TinyLogo />
            <ScrollView style={styles.messageView}>
                <FlatList
                    data={Messages}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => (
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() =>
                                navigation.navigate("Chat", {
                                    id: item.id,
                                    userName: item.userName,
                                })
                            }>
                            <View style={styles.user_info}>
                                <View style={styles.user_img_wrapper}>
                                    <Image
                                        style={styles.image}
                                        source={item.userImg}
                                    />
                                </View>
                                <View style={styles.text_section}>
                                    <View style={styles.user_info_text}>
                                        <Text style={styles.user_name}>
                                            {item.userName}
                                        </Text>
                                        <Text style={styles.post_time}>
                                            {item.messageTime}
                                        </Text>
                                    </View>
                                    <Text style={styles.text_message}>
                                        {item.messageText}
                                    </Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
        </View>
    );
}
