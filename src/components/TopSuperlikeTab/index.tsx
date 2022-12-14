import {AntDesign, Octicons} from "@expo/vector-icons";
import {useCallback, useEffect, useState} from "react";
import {
    FlatList,
    Image,
    RefreshControl,
    ScrollView,
    Text,
    View,
} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import {color} from "react-native-reanimated";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/TopSuperlikeTab";

export default function TopSuperlikeTab() {
    const getUserRanking = useStore(state => state.getUserRanking);
    const userRanking = useStore(state => state.userRanking, shallow);
    const isLoadingUserRanking = useStore(
        state => state.isLoadingUserRanking,
        shallow,
    );
    const [ranking, setRanking] = useState(userRanking);

    useEffect(() => {
        getUserRanking({sortBy: '{"superlikes": -1, "superlikeStar": -1}'});
    }, []);

    useEffect(() => {
        setRanking(userRanking);
    }, [userRanking]);

    const onRefresh = useCallback(() => {
        getUserRanking({sortBy: '{"superlikes": -1, "superlikeStar": -1}'});
    }, []);
    return (
        <View style={styles.matches}>
            <View>
                {ranking && (
                    <FlatList
                        data={ranking}
                        keyExtractor={item => item._id}
                        renderItem={({item, index}) => (
                            <View
                                style={[
                                    styles.user_info,
                                    {
                                        backgroundColor: item.isMe
                                            ? colors.redOpacityColor
                                            : "#fff",
                                    },
                                ]}>
                                <View style={styles.user_img_wrapper}>
                                    <Text style={styles.indexRanking}>
                                        {index + 1}
                                    </Text>
                                    <Image
                                        style={styles.image}
                                        source={{
                                            uri: item.avatar.secureURL,
                                        }}
                                    />
                                </View>
                                <View style={styles.text_section}>
                                    <View style={styles.user_info_text}>
                                        <Text style={styles.user_name}>
                                            {item.name}, {item.age}
                                        </Text>
                                    </View>
                                </View>
                                <View style={styles.amountContainer}>
                                    <View style={styles.superlikeContainer}>
                                        <Octicons
                                            name="feed-star"
                                            size={13}
                                            color={colors.redColor}
                                        />
                                        <Text style={styles.amountSuperlike}>
                                            {item.superlikes}
                                        </Text>
                                    </View>
                                    <View style={styles.starContainer}>
                                        <AntDesign
                                            name="star"
                                            size={15}
                                            color={colors.superlike}
                                        />
                                        <Text style={styles.amountStar}>
                                            {item.superlikeStar}
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        )}
                        refreshControl={
                            <RefreshControl
                                refreshing={isLoadingUserRanking}
                                onRefresh={onRefresh}
                            />
                        }
                    />
                )}
            </View>
        </View>
    );
}
