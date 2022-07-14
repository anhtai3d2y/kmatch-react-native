import {useCallback, useEffect, useState} from "react";
import {RefreshControl, ScrollView, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/MatchesTab";
import MatchedCard from "../MatchedCard";

export default function MatchesTab({navigation}) {
    const getMatches = useStore(state => state.getMatches);
    const matches = useStore(state => state.matches, shallow);
    const isLoadingMatches = useStore(state => state.isLoadingMatches, shallow);
    const [userMatch, setUserMatch] = useState(matches);

    useEffect(() => {
        getMatches();
    }, []);

    useEffect(() => {
        setUserMatch(matches);
    }, [matches]);

    const onRefresh = useCallback(() => {
        getMatches();
    }, []);
    return (
        <ScrollView
            style={{height: height - 170}}
            refreshControl={
                <RefreshControl
                    refreshing={isLoadingMatches}
                    onRefresh={onRefresh}
                />
            }>
            <View style={styles.matches}>
                {userMatch &&
                    userMatch.map((user: any) => {
                        return (
                            <MatchedCard
                                name={user.otherUser.name}
                                avatar={user?.otherUser.avatar?.secureURL}
                                age={user.otherUser.age}
                                userId={user.otherUserId}
                                navigation={navigation}
                                key={user._id}
                            />
                        );
                    })}
            </View>
        </ScrollView>
    );
}
