import {useCallback, useEffect, useState} from "react";
import {RefreshControl, ScrollView, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/SuperlikeTab";
import MatchedCard from "../MatchedCard";
import SuperlikeCard from "../SuperlikeCard";

export default function SuperlikeTab({navigation}) {
    const getSuperlikeUser = useStore(state => state.getSuperlikeUser);
    const superlikeUsers = useStore(state => state.superlikeUsers, shallow);
    const isLoadingSuperlikeUsers = useStore(
        state => state.isLoadingSuperlikeUsers,
        shallow,
    );
    const [userSuperliked, setUserSuperliked] = useState(superlikeUsers);

    useEffect(() => {
        getSuperlikeUser();
    }, []);

    useEffect(() => {
        setUserSuperliked(superlikeUsers);
    }, [superlikeUsers]);

    const onRefresh = useCallback(() => {
        getSuperlikeUser();
    }, []);
    return (
        <ScrollView
            style={{height: height - 170}}
            refreshControl={
                <RefreshControl
                    refreshing={isLoadingSuperlikeUsers}
                    onRefresh={onRefresh}
                />
            }>
            <View style={styles.matches}>
                {userSuperliked &&
                    userSuperliked.map((user: any) => {
                        return (
                            <SuperlikeCard
                                name={user.user.name}
                                avatar={user?.user.avatar?.secureURL}
                                age={user.user.age}
                                userId={user.userSuperlikedId}
                                navigation={navigation}
                                key={user._id}
                            />
                        );
                    })}
            </View>
        </ScrollView>
    );
}
