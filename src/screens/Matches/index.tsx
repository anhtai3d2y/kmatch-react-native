import {useEffect, useState} from "react";
import {View, Text, ScrollView, TouchableOpacity} from "react-native";
import shallow from "zustand/shallow";
import MatchedCard from "../../components/MatchedCard";
import TinyLogo from "../../components/TinyLogo";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import useStore from "../../stores/store";
import styles from "../../themes/screens/Matches";

export default function MatchesScreen() {
    const [selectedTab, setSelectedTab] = useState("matches");

    const getLikeUser = useStore(state => state.getLikeUser);
    const likeUsers = useStore(state => state.likeUsers, shallow);
    const [userLiked, setUserLiked] = useState(likeUsers);

    useEffect(() => {
        getLikeUser();
    }, []);

    useEffect(() => {
        setUserLiked(likeUsers);
    }, [likeUsers]);

    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TinyLogo />
            </View>
            <View style={styles.tabSelect}>
                <TouchableOpacity onPress={() => handleTabChange("matches")}>
                    <View style={styles.selectBox}>
                        <Text
                            style={
                                selectedTab === "matches"
                                    ? styles.selectedTab
                                    : styles.tabText
                            }>
                            Matches
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.verticalLine}></View>
                <TouchableOpacity onPress={() => handleTabChange("like")}>
                    <View style={styles.selectBox}>
                        <Text
                            style={
                                selectedTab === "like"
                                    ? styles.selectedTab
                                    : styles.tabText
                            }>
                            Like
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.verticalLine}></View>
                <TouchableOpacity onPress={() => handleTabChange("nope")}>
                    <View style={styles.selectBox}>
                        <Text
                            style={
                                selectedTab === "nope"
                                    ? styles.selectedTab
                                    : styles.tabText
                            }>
                            Nope
                        </Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.verticalLine}></View>
                <TouchableOpacity onPress={() => handleTabChange("superlike")}>
                    <View style={styles.selectBox}>
                        <Text
                            style={
                                selectedTab === "superlike"
                                    ? styles.selectedTab
                                    : styles.tabText
                            }>
                            Super like
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView style={{height: height - 170}}>
                <View style={styles.matches}>
                    {userLiked &&
                        userLiked.map(user => {
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
        </View>
    );
}
