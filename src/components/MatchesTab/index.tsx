import {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import shallow from "zustand/shallow";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/MatchesTab";
import MatchedCard from "../MatchedCard";

export default function MatchesTab() {
    const getMatches = useStore(state => state.getMatches);
    const matches = useStore(state => state.matches, shallow);
    const [userMatch, setUserMatch] = useState(matches);

    useEffect(() => {
        if (!matches.length) {
            getMatches();
        }
    }, []);

    useEffect(() => {
        setUserMatch(matches);
    }, [matches]);
    return (
        <ScrollView style={{height: height - 170}}>
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
        </ScrollView>
    );
}
