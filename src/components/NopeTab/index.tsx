import {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/NopeTab";
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
    return (
        <ScrollView style={{height: height - 170}}>
            {isLoadingDislikeUsers ? (
                <ActivityIndicator
                    size="large"
                    color={colors.redColor}
                    style={styles.loading}
                />
            ) : (
                <View style={styles.matches}>
                    {userDisliked &&
                        userDisliked.map((user: any) => {
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
