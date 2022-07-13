import {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/MatchesTab";
import MatchedCard from "../MatchedCard";

export default function MatchesTab() {
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
    return (
        <ScrollView style={{height: height - 170}}>
            {isLoadingMatches ? (
                <ActivityIndicator
                    size="large"
                    color={colors.redColor}
                    style={styles.loading}
                />
            ) : (
                <View style={styles.matches}>
                    {userMatch &&
                        userMatch.map((user: any) => {
                            return (
                                <MatchedCard
                                    name={user.otherUser.name}
                                    avatar={user?.otherUser.avatar?.secureURL}
                                    age={user.otherUser.age}
                                    key={user._id}
                                />
                            );
                        })}
                </View>
            )}
        </ScrollView>
    );
}
