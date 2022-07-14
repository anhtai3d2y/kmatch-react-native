import {useCallback, useEffect, useState} from "react";
import {RefreshControl, ScrollView, Text, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import KmatchGoldModal from "../../modals/KmatchGoldModal";
import useStore from "../../stores/store";
import styles from "../../themes/components/SeeWhoLikeMeTab";
import LikeMeCard from "../LikeMeCard";

export default function SeeWhoLikeMeTab({
    setIsMatchedModalVisible,
    setIsSuperLikeStarModalVisible,
}) {
    const getUserLikeMe = useStore(state => state.getUserLikeMe);
    const userLikeMe = useStore(state => state.userLikeMe, shallow);
    const isLoadingUserLikeMe = useStore(
        state => state.isLoadingUserLikeMe,
        shallow,
    );
    const [userLike, setUserLike] = useState(userLikeMe);
    const [isKmatchGoldModalVisible, setIsKmatchGoldModalVisible] =
        useState(false);

    useEffect(() => {
        getUserLikeMe(setIsKmatchGoldModalVisible);
    }, []);

    useEffect(() => {
        setUserLike(userLikeMe);
    }, [userLikeMe]);

    const onRefresh = useCallback(() => {
        getUserLikeMe(setIsKmatchGoldModalVisible);
    }, []);
    return (
        <ScrollView
            style={{height: height - 170}}
            refreshControl={
                <RefreshControl
                    refreshing={isLoadingUserLikeMe}
                    onRefresh={onRefresh}
                />
            }>
            <View style={styles.matches}>
                {userLike &&
                    userLike.map((user: any) => {
                        return (
                            <LikeMeCard
                                name={user.user.name}
                                avatar={user?.user.avatar?.secureURL}
                                age={user.user.age}
                                userId={user.user._id}
                                setIsMatchedModalVisible={
                                    setIsMatchedModalVisible
                                }
                                setIsSuperLikeStarModalVisible={
                                    setIsSuperLikeStarModalVisible
                                }
                                key={user._id}
                            />
                        );
                    })}
            </View>
            <KmatchGoldModal
                visible={isKmatchGoldModalVisible}
                setVisible={setIsKmatchGoldModalVisible}
            />
        </ScrollView>
    );
}
