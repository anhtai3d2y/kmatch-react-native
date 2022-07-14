import {useCallback, useEffect, useState} from "react";
import {RefreshControl, ScrollView, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/NopeTab";
import DislikeCard from "../DislikeCard";
import MatchedCard from "../MatchedCard";

export default function NopeTab() {
    const getDislikeUser = useStore(state => state.getDislikeUser);
    const dislikeUsers = useStore(state => state.dislikeUsers, shallow);
    const isLoadingDislikeUsers = useStore(
        state => state.isLoadingDislikeUsers,
        shallow,
    );
    const [userDisliked, setUserDisliked] = useState(dislikeUsers);

    useEffect(() => {
        getDislikeUser();
    }, []);

    useEffect(() => {
        setUserDisliked(dislikeUsers);
    }, [dislikeUsers]);
    const onRefresh = useCallback(() => {
        getDislikeUser();
    }, []);
    return (
        <ScrollView
            style={{height: height - 170}}
            refreshControl={
                <RefreshControl
                    refreshing={isLoadingDislikeUsers}
                    onRefresh={onRefresh}
                />
            }>
            <View style={styles.matches}>
                {userDisliked &&
                    userDisliked.map((user: any) => {
                        return (
                            <DislikeCard
                                name={user.user.name}
                                avatar={user?.user.avatar?.secureURL}
                                age={user.user.age}
                                userDislikedId={user.userDislikedId}
                                key={user._id}
                            />
                        );
                    })}
            </View>
        </ScrollView>
    );
}
