import {useCallback, useEffect, useState} from "react";
import {RefreshControl, ScrollView, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/LikeTab";
import LikedCard from "../LikedCard";

export default function LikeTab({navigation}) {
    const getLikeUser = useStore(state => state.getLikeUser);
    const likeUsers = useStore(state => state.likeUsers, shallow);
    const isLoadingLikeUsers = useStore(
        state => state.isLoadingLikeUsers,
        shallow,
    );
    const [userLiked, setUserLiked] = useState(likeUsers);

    useEffect(() => {
        getLikeUser();
    }, []);

    useEffect(() => {
        setUserLiked(likeUsers);
    }, [likeUsers]);

    const onRefresh = useCallback(() => {
        getLikeUser();
    }, []);
    return (
        <ScrollView
            style={{height: height - 170}}
            refreshControl={
                <RefreshControl
                    refreshing={isLoadingLikeUsers}
                    onRefresh={onRefresh}
                />
            }>
            <View style={styles.matches}>
                {userLiked &&
                    userLiked.map((user: any) => {
                        return (
                            <LikedCard
                                name={user.user.name}
                                avatar={user?.user.avatar?.secureURL}
                                age={user.user.age}
                                navigation={navigation}
                                userLikedId={user.userLikedId}
                                key={user._id}
                            />
                        );
                    })}
            </View>
        </ScrollView>
    );
}
