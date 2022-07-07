import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
} from "react-native";
import styles from "../../themes/screens/Forgotpassword";
import {useEffect, useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import Logo from "../../components/Logo";
import useStore from "../../stores/store";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";

export default function ForgotPasswordScreen({navigation}) {
    const [email, setEmail] = useState("");
    const addVerificationForgotpassword = useStore(
        state => state.addVerificationForgotpassword,
    );
    const statusEmailForgotpassword = useStore(
        state => state.statusEmailForgotpassword,
        shallow,
    );

    const isVerificationForgotpasswordLoading = useStore(
        state => state.isVerificationForgotpasswordLoading,
        shallow,
    );
    if (statusEmailForgotpassword) {
        navigation.navigate("VerificationForgotpassword");
    }
    const handelSendVerificationCode = async () => {
        if (!isVerificationForgotpasswordLoading) {
            addVerificationForgotpassword(email);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Logo />
                <Text style={styles.title}>Your email?</Text>
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    // style={{flex: 1}}
                >
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#ccc"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                </KeyboardAvoidingView>

                <TouchableOpacity
                    style={[styles.button, styles.buttonOutline]}
                    onPress={handelSendVerificationCode}>
                    {isVerificationForgotpasswordLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonOutlineText}>
                            Get verification code
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
