import {useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import TinyLogo from "../../components/TinyLogo";
import TopStarTab from "../../components/TopStarTab";
import TopSuperlikeTab from "../../components/TopSuperlikeTab";
import styles from "../../themes/screens/Ranking";

export default function RankingScreen() {
    const [selectedTab, setSelectedTab] = useState("star");
    const tabs = {
        star: <TopStarTab />,
        superlike: <TopSuperlikeTab />,
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
                <TouchableOpacity onPress={() => handleTabChange("star")}>
                    <View style={styles.selectBox}>
                        <Text
                            style={
                                selectedTab === "star"
                                    ? styles.selectedTab
                                    : styles.tabText
                            }>
                            Top star
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
                            Top super like
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {tabs[selectedTab]}
        </View>
    );
}
