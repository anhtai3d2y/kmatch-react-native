import {Ionicons} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from "react-native";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import useStore from "../../stores/store";
import styles from "../../themes/screens/VerificationForgotPassword";
import Toast from "react-native-toast-message";

export default function VerificationForgotPasswordScreen({navigation}) {
    const emailForgotpassword = useStore(state => state.emailForgotpassword);
    const statusVerificationForgotpassword = useStore(
        state => state.statusVerificationForgotpassword,
        shallow,
    );
    const setStatusEmailForgotpassword = useStore(
        state => state.setStatusEmailForgotpassword,
    );
    const setStatusVerificationForgotpassword = useStore(
        state => state.setStatusVerificationForgotpassword,
    );
    const isVerificationForgotpasswordLoading = useStore(
        state => state.isVerificationForgotpasswordLoading,
        shallow,
    );
    const addVerificationForgotpassword = useStore(
        state => state.addVerificationForgotpassword,
    );
    const resetpassword = useStore(state => state.resetpassword);
    const [current, setCurrent] = useState(0);
    const [codeVerification, setCodeVerification] = useState([
        0, 0, 0, 0, 0, 0,
    ]);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [countDown, setCountDown] = useState(900);
    useEffect(() => {
        const eventCountDown = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000);
        setStatusEmailForgotpassword(false);
        return () => clearInterval(eventCountDown);
    }, []);
    useEffect(() => {
        if (statusVerificationForgotpassword) {
            setStatusVerificationForgotpassword(false);
            navigation.popToTop();
        }
    });

    const handleInputCode = (code: number) => {
        setCurrent(prev => {
            const state = prev >= 0 && prev <= 5 ? prev + 1 : prev;
            let codes = codeVerification;
            codes[current] = code;
            setCodeVerification(prev => codes);
            return state;
        });
    };
    const handleRemoveCode = () => {
        setCurrent(prev => {
            const state = prev > 0 && prev <= 6 ? prev - 1 : prev;
            let codes = codeVerification;
            codes[current - 1] = 0;
            setCodeVerification(prev => codes);
            return state;
        });
    };

    const handelSendVerificationCodeAgain = () => {
        addVerificationForgotpassword(emailForgotpassword);
        setCountDown(900);
    };

    const handelResetPassword = () => {
        if (current === 6) {
            if (password !== confirmPassword) {
                Toast.show({
                    type: "error",
                    text1: "Password error!",
                    text2: "New password and confirm new password not match!",
                });
            } else {
                const code = codeVerification.join("").slice(0, 6);
                resetpassword(
                    emailForgotpassword,
                    code,
                    password,
                    confirmPassword,
                );
            }
        }
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.pop()}>
                        <Ionicons
                            name="chevron-back"
                            size={40}
                            color={colors.redColor}
                        />
                    </TouchableOpacity>
                    <Text style={styles.title}>{emailForgotpassword}</Text>
                </View>
                <ScrollView>
                    <View style={styles.content}>
                        <KeyboardAvoidingView
                            style={{
                                flex: 1,
                                flexDirection: "column",
                                justifyContent: "center",
                            }}
                            behavior="position"
                            enabled
                            // keyboardVerticalOffset={0}
                        >
                            <Text
                                style={{
                                    fontSize: 30,
                                    fontWeight: "bold",
                                    alignSelf: "center",
                                }}>
                                {Math.floor(countDown / 60)}:
                                {(countDown % 60).toString().length === 1 &&
                                    "0"}
                                {countDown % 60}
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    marginTop: 10,
                                    alignSelf: "center",
                                }}>
                                Type the verification code we've sent you
                            </Text>
                            <View style={styles.inputCode}>
                                {codeVerification.map((code, index) => {
                                    let color =
                                        index === current
                                            ? colors.redColor
                                            : "#ccc";
                                    let backgroundColor = "#fff";
                                    if (code || current > index) {
                                        color = "#fff";
                                        backgroundColor = colors.redColor;
                                    }
                                    if (index >= 6) return;
                                    return (
                                        <View
                                            key={index}
                                            style={[
                                                styles.inputBlock,
                                                {
                                                    borderWidth: 0,
                                                    backgroundColor:
                                                        backgroundColor,
                                                },
                                            ]}>
                                            <Text
                                                style={[
                                                    styles.inputBlock,
                                                    {
                                                        borderColor: color,
                                                        color: color,
                                                    },
                                                ]}>
                                                {code}
                                            </Text>
                                        </View>
                                    );
                                })}
                            </View>
                            <View style={styles.keyboard}>
                                {keyboard.map(key => {
                                    return (
                                        <TouchableOpacity
                                            style={styles.key}
                                            key={key}
                                            onPress={() =>
                                                handleInputCode(key)
                                            }>
                                            <Text style={styles.keyText}>
                                                {key}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                                <TouchableOpacity style={styles.key} key={""}>
                                    <Text style={styles.keyText}></Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.key}
                                    key={0}
                                    onPress={() => handleInputCode(0)}>
                                    <Text style={styles.keyText}>0</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.key}
                                    key={"backspace"}
                                    onPress={handleRemoveCode}>
                                    <Ionicons
                                        name="backspace-outline"
                                        size={24}
                                        color="black"
                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{marginBottom: 10}}>
                                <TouchableOpacity
                                    onPress={handelSendVerificationCodeAgain}>
                                    <Text
                                        style={{
                                            fontSize: 20,
                                            color: colors.redColor,
                                            alignSelf: "center",
                                        }}>
                                        Send again
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <Text
                                style={{
                                    fontSize: 16,
                                    marginTop: 10,
                                    marginBottom: 20,
                                    alignSelf: "center",
                                }}>
                                Type your new password
                            </Text>
                            <TextInput
                                placeholder="New password"
                                placeholderTextColor="#ccc"
                                value={password}
                                onChangeText={text => setPassword(text)}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                            <TextInput
                                placeholder="Confirm new password"
                                placeholderTextColor="#ccc"
                                value={confirmPassword}
                                onChangeText={text => setConfirmPassword(text)}
                                style={styles.input}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity
                                style={[styles.button, styles.buttonOutline]}
                                onPress={handelResetPassword}>
                                {isVerificationForgotpasswordLoading ? (
                                    <ActivityIndicator
                                        size="small"
                                        color="#fff"
                                    />
                                ) : (
                                    <Text style={styles.buttonOutlineText}>
                                        Set new password
                                    </Text>
                                )}
                            </TouchableOpacity>
                        </KeyboardAvoidingView>
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}
