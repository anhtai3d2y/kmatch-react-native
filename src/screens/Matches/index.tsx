import {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import LikeTab from "../../components/LikeTab";
import MatchesTab from "../../components/MatchesTab";
import NopeTab from "../../components/NopeTab";
import SuperlikeTab from "../../components/SuperlikeTab";
import TinyLogo from "../../components/TinyLogo";
import styles from "../../themes/screens/Matches";

export default function MatchesScreen() {
    const [selectedTab, setSelectedTab] = useState("matches");

    const tabs = {
        matches: <MatchesTab />,
        like: <LikeTab />,
        nope: <NopeTab />,
        superlike: <SuperlikeTab />,
    };

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
            {tabs[selectedTab]}
        </View>
    );
}
