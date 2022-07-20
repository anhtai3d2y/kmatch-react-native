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
import styles from "../../themes/screens/Signup";
import {useEffect, useState} from "react";
import {LinearGradient} from "expo-linear-gradient";
import Logo from "../../components/Logo";
import useStore from "../../stores/store";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";

export default function SignupScreen({navigation}) {
    const [email, setEmail] = useState("");
    const addVerification = useStore(state => state.addVerification);
    const statusEmail = useStore(state => state.statusEmail, shallow);
    const [statusEmailState, setStatusEmailState] = useState(false);
    const isVerificationLoading = useStore(
        state => state.isVerificationLoading,
        shallow,
    );
    if (statusEmailState) {
        navigation.navigate("Verification");
    }
    useEffect(() => {
        setStatusEmailState(statusEmail);
    }, [statusEmail]);
    const handelSignup = async () => {
        if (!isVerificationLoading) {
            addVerification(email);
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Logo />
                <Text style={styles.title}>Sign up to continue</Text>
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
                    onPress={handelSignup}>
                    {isVerificationLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonOutlineText}>
                            Continue with email
                        </Text>
                    )}
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
