import {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import shallow from "zustand/shallow";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/TopSuperlikeTab";
import MatchedCard from "../MatchedCard";

export default function TopSuperlikeTab() {
    const getLikeUser = useStore(state => state.getLikeUser);
    const likeUsers = useStore(state => state.likeUsers, shallow);
    const [userLiked, setUserLiked] = useState(likeUsers);

    useEffect(() => {
        if (!likeUsers.length) {
            getLikeUser();
        }
    }, []);

    useEffect(() => {
        setUserLiked(likeUsers);
    }, [likeUsers]);
    return (
        <ScrollView style={{height: height - 170}}>
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
        </ScrollView>
    );
}
