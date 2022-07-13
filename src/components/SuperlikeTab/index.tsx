import {useEffect, useState} from "react";
import {ScrollView, View} from "react-native";
import shallow from "zustand/shallow";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/components/SuperlikeTab";
import MatchedCard from "../MatchedCard";

export default function SuperlikeTab() {
    const getSuperlikeUser = useStore(state => state.getSuperlikeUser);
    const superlikeUsers = useStore(state => state.superlikeUsers, shallow);
    const [userSuperliked, setUserSuperliked] = useState(superlikeUsers);

    useEffect(() => {
        if (!superlikeUsers.length) {
            getSuperlikeUser();
        }
    }, []);

    useEffect(() => {
        setUserSuperliked(superlikeUsers);
    }, [superlikeUsers]);
    return (
        <ScrollView style={{height: height - 170}}>
            <View style={styles.matches}>
                {userSuperliked &&
                    userSuperliked.map((user: any) => {
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
