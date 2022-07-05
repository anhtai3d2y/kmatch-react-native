import {useEffect, useState} from "react";
import {View, Text, ScrollView} from "react-native";
import shallow from "zustand/shallow";
import MatchedCard from "../../components/MatchedCard";
import TinyLogo from "../../components/TinyLogo";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/screens/Matches";

export default function MatchesScreen() {
    const [userLiked, setUserLiked] = useState();
    const getLikeUser = useStore(state => state.getLikeUser);
    const likeUsers = useStore(state => state.likeUsers, shallow);

    useEffect(() => {
        getLikeUser();
    }, []);

    useEffect(() => {
        setUserLiked(likeUsers);
    }, [likeUsers]);

    if (userLiked && userLiked.length) {
        console.log(userLiked[0].user.avatar.secureURL);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TinyLogo />
                <Text>
                    This is a list of people who have liked you and your
                    matches.
                </Text>
            </View>
            <ScrollView style={{height: height - 170}}>
                <View style={styles.matches}>
                    {/* {userLiked &&
                        userLiked.length &&
                        userLiked.map(user => {
                            return (
                                <MatchedCard
                                    name={user.user.name}
                                    avatar={user?.user.avatar?.secureURL}
                                    key={user._id}
                                />
                            );
                        })} */}
                </View>
            </ScrollView>
        </View>
    );
}
