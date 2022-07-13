import {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/LikeTab";
import MatchedCard from "../MatchedCard";

export default function LikeTab() {
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
    return (
        <ScrollView style={{height: height - 170}}>
            {isLoadingLikeUsers ? (
                <ActivityIndicator
                    size="large"
                    color={colors.redColor}
                    style={styles.loading}
                />
            ) : (
                <View style={styles.matches}>
                    {userLiked &&
                        userLiked.map((user: any) => {
                            return (
                                <MatchedCard
                                    name={user.user.name}
                                    avatar={user?.user.avatar?.secureURL}
                                    age={user.user.age}
                                    key={user._id}
                                />
                            );
                        })}
                </View>
            )}
        </ScrollView>
    );
}
