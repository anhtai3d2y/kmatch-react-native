import {TouchableOpacity} from "react-native";
import {Text, View} from "react-native";
import styles from "../../themes/screens/Signin";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {LinearGradient} from "expo-linear-gradient";
import {useState} from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SigninScreen({navigation}) {
    const handleGoToStart = () => {
        navigation.navigate("Start");
    };

    const handleGoToSignup = () => {
        navigation.navigate("Signup");
    };

    const [location, setLocation] = useState("location");

    const handleGetLocation = async () => {
        let {status} = await Permissions.askAsync(
            Permissions.LOCATION_FOREGROUND,
        );
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

    const handleLogin = async () => {
        const apiUrl = "http://www.kmatch.online/user";
        const headers = {"Content-Type": "application/json"};
        try {
            const res = await axiosClient.get(apiUrl, {
                headers,
            });
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
        // await onLogin("anhtai3d2y@gmail.com", "anhtai3d2y");
        // console.log("token: ", await getToken());
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
                        onPress={handleGoToStart}>
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
