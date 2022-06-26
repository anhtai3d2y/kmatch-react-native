import {View, Text, ScrollView} from "react-native";
import MatchedCard from "../../components/MatchedCard";
import TinyLogo from "../../components/TinyLogo";
import colors from "../../constants/Colors";
import {height} from "../../constants/Layout";
import styles from "../../themes/screens/Matches";

export default function MatchesScreen() {
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
                    <MatchedCard />
                    <MatchedCard />
                    <MatchedCard />
                    <MatchedCard />
                    <MatchedCard />
                    <MatchedCard />
                    <MatchedCard />
                    <MatchedCard />
                    <MatchedCard />
                    <MatchedCard />
                    <MatchedCard />
                </View>
            </ScrollView>
        </View>
    );
}
