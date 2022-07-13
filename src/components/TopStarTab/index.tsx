import {useEffect, useState} from "react";
import {FlatList, ScrollView, Text, View} from "react-native";
import shallow from "zustand/shallow";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/TopStarTab";
import MatchedCard from "../MatchedCard";

export default function TopStarTab() {
    const getUserRanking = useStore(state => state.getUserRanking);
    const userRanking = useStore(state => state.userRanking, shallow);
    const [ranking, setRanking] = useState(userRanking);

    useEffect(() => {
        if (!userRanking.length) {
            getUserRanking({sortBy: '{"superlikeStar": -1}'});
            // getUserRanking({sortBy: '{"superlikes": -1}'});
        }
    }, []);

    useEffect(() => {
        setRanking(userRanking);
    }, [userRanking]);
    return (
        <View style={styles.matches}>
            <View>
                {ranking && (
                    <FlatList
                        data={ranking}
                        keyExtractor={item => item._id}
                        renderItem={({item, index}) => (
                            <Text>
                                #{index + 1}, {item.name}
                                {item.superlikeStar}
                            </Text>
                        )}
                    />
                )}
            </View>
        </View>
    );
}
