import {useEffect, useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import SeeWhoLikeMeTab from "../../components/SeeWhoLikeMeTab";
import TinyLogo from "../../components/TinyLogo";
import TopStarTab from "../../components/TopStarTab";
import TopSuperlikeTab from "../../components/TopSuperlikeTab";
import KmatchGoldModal from "../../modals/KmatchGoldModal";
import styles from "../../themes/screens/Ranking";
import * as WebBrowser from "expo-web-browser";
import useStore from "../../stores/store";
import shallow from "zustand/shallow";
import MatchedModal from "../../modals/MatchedModal";
import SuperLikeStarModal from "../../modals/SuperLikeStarModal";
import KmatchPlatinumModal from "../../modals/KmatchPlatinumModal";
export default function RankingScreen({navigation}) {
    const [selectedTab, setSelectedTab] = useState("star");
    const getUserProfile = useStore(state => state.getUserProfile);
    const clearPaypal = useStore(state => state.clearPaypal);
    const paypal = useStore(state => state.paypal, shallow);
    const matchedData = useStore(state => state.matchedData, shallow);
    const [isMatchedModalVisible, setIsMatchedModalVisible] = useState(false);
    const [isSuperLikeStarModalVisible, setIsSuperLikeStarModalVisible] =
        useState(false);

    const tabs = {
        star: <TopStarTab />,
        superlike: <TopSuperlikeTab />,
        seewholikeme: (
            <SeeWhoLikeMeTab
                setIsMatchedModalVisible={setIsMatchedModalVisible}
                setIsSuperLikeStarModalVisible={setIsSuperLikeStarModalVisible}
            />
        ),
    };
    const handleTabChange = (tab: string) => {
        setSelectedTab(tab);
    };

    useEffect(() => {
        const callWebBrowser = async () => {
            try {
                const webBrowserStatus = await WebBrowser.openBrowserAsync(
                    paypal,
                );
                await getUserProfile();
                await clearPaypal();
            } catch (error) {
                console.log(error);
            }
        };
        if (paypal) {
            callWebBrowser();
        }
    }, [paypal]);

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
                <View style={styles.verticalLine}></View>
                <TouchableOpacity
                    onPress={() => handleTabChange("seewholikeme")}>
                    <View style={styles.selectBox}>
                        <Text
                            style={
                                selectedTab === "seewholikeme"
                                    ? styles.selectedTab
                                    : styles.tabText
                            }>
                            Likes
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            {tabs[selectedTab]}
            <MatchedModal
                visible={isMatchedModalVisible}
                setVisible={setIsMatchedModalVisible}
                userName={matchedData.userName}
                userAvatar={matchedData.userAvatar}
                otherUserAvatar={matchedData.otherUserAvatar}
                userId={matchedData.userId}
                otherUserId={matchedData.otherUserId}
                navigation={navigation}
            />
            <SuperLikeStarModal
                visible={isSuperLikeStarModalVisible}
                setVisible={setIsSuperLikeStarModalVisible}
            />
        </View>
    );
}
