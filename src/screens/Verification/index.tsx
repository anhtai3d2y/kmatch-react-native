import {Ionicons} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import shallow from "zustand/shallow";
import colors from "../../constants/Colors";
import useStore from "../../stores/store";
import styles from "../../themes/screens/Verification";

export default function VerificationScreen({navigation}) {
    const emailVerification = useStore(state => state.emailVerification);
    const statusVerification = useStore(
        state => state.statusVerification,
        shallow,
    );
    const setStatusEmail = useStore(state => state.setStatusEmail);
    const getVerification = useStore(state => state.getVerification);
    const [current, setCurrent] = useState(0);
    const [codeVerification, setCodeVerification] = useState([
        0, 0, 0, 0, 0, 0,
    ]);
    const keyboard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [countDown, setCountDown] = useState(900);
    useEffect(() => {
        const eventCountDown = setInterval(() => {
            setCountDown(prev => prev - 1);
        }, 1000);
        setStatusEmail(false);
        return () => clearInterval(eventCountDown);
    }, []);
    useEffect(() => {
        if (current === 6) {
            const code = codeVerification.join("").slice(0, 6);
            getVerification(emailVerification, code);
        }
    }, [current]);

    useEffect(() => {
        if (statusVerification) {
            navigation.navigate("SignupProfile");
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
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton}>
                    <Ionicons
                        name="chevron-back"
                        size={40}
                        color={colors.redColor}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>{emailVerification}</Text>
            </View>
            <View style={styles.content}>
                <Text style={{fontSize: 30, fontWeight: "bold"}}>
                    {Math.floor(countDown / 60)}:
                    {(countDown % 60).toString().length === 1 && "0"}
                    {countDown % 60}
                </Text>
                <Text style={{fontSize: 16, marginTop: 10}}>
                    Type the verification code we've sent you
                </Text>
            </View>
            <View style={styles.inputCode}>
                {codeVerification.map((code, index) => {
                    let color = index === current ? colors.redColor : "#ccc";
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
                                    backgroundColor: backgroundColor,
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
                            onPress={() => handleInputCode(key)}>
                            <Text style={styles.keyText}>{key}</Text>
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
            <View style={{marginBottom: 50}}>
                <TouchableOpacity>
                    <Text style={{fontSize: 20, color: colors.redColor}}>
                        Send again
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
