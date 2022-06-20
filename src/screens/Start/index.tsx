import {TouchableOpacity} from "react-native";
import {Text, View} from "react-native";
import styles from "../../themes/screens/Signin";
import axios from "axios";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import * as Location from "expo-location";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {getToken} from "../../helpers";
import useStore from "../../stores/store";
import Toast from "react-native-toast-message";

export default function StartScreen({navigation}) {
    const handleGoToSignup = () => {
        navigation.navigate("Signup");
    };

    const handleGoToSignin = () => {
        // navigation.navigate("Signin");
        navigation.navigate("Home");
    };

    const [location, setLocation] = useState("location");

    const handleGetLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status === "granted") {
            setLocation("Permission to access location was denied");
        }

        let location = await Location.getCurrentPositionAsync({});

        setLocation(
            location.coords.latitude + ", " + location.coords.longitude,
        );
    };

    const axiosClient = axios.create({
        baseURL: "http://kmatch.online",
        responseType: "json",
        timeout: 15 * 1000,
        headers: {
            "Content-Type": "application/json",
        },
    });

    axiosClient.interceptors.request.use(async config => {
        const accessToken = await AsyncStorage.getItem("token");
        config.headers.Authorization = `Bearer ${accessToken}`;
        return config;
    });

    const setToken = useStore(state => state.setToken);
    const loginEmail = useStore(state => state.loginEmail);
    const handleLogin = async () => {
        loginEmail("anhtai3d2y@gmail.com", "anhtai3d2y");
        const token = await getToken();
        console.log("token: ", token);
        setToken(token);
        // Toast.show({
        //     type: "success",
        //     text1: "Hello",
        //     text2: "This is some something 👋",
        // });
        if (token) {
        }
    };
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={["#e98242", "#e35568", "#df5888"]}
                style={styles.linearGradient}>
                <Text style={styles.title}>kmatch</Text>
                <Text style={[styles.title, {fontSize: 10}]}>{location}</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleGoToSignup}
                        style={styles.button}>
                        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={handleGoToSignin}>
                        <Text style={styles.buttonOutlineText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={handleGetLocation}>
                        <Text style={styles.buttonOutlineText}>
                            GET LOCATION
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleLogin}>
                        <Text style={styles.buttonOutlineText}>
                            Trouble Signing In?
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
}
