import {Image, ScrollView, TouchableOpacity} from "react-native";
import {Text, View} from "react-native";
import styles from "../../themes/screens/Start";
import {LinearGradient} from "expo-linear-gradient";
import {getToken} from "../../helpers";
import useStore from "../../stores/store";
import colors from "../../constants/Colors";
import {StatusBar} from "expo-status-bar";
import Logo from "../../components/Logo";

export default function StartScreen({navigation}) {
    const handleGoToSignup = () => {
        navigation.navigate("Signup");
    };

    const handleGoToSignin = () => {
        navigation.navigate("Signin");
    };
    return (
        <View style={styles.container}>
            <StatusBar style="dark" />
            {/* <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={["#e98242", "#e35568", "#df5888"]}
                style={styles.linearGradient}> */}
            <Logo />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleGoToSignup}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Create an account</Text>
                </TouchableOpacity>
                <Text style={{color: colors.redColor, fontWeight: "600"}}>
                    Or
                </Text>
                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={handleGoToSignin}>
                    <Text style={styles.buttonOutlineText}>Sign in</Text>
                </TouchableOpacity>
            </View>
            {/* </LinearGradient> */}
        </View>
    );
}
