import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider as ThemeProvider} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {Logs} from "expo";
import AppStack from "./AppStack";
import StartStack from "./StartStack";
import useStore from "../stores/store";
import shallow from "zustand/shallow";
import {LogBox, SafeAreaView, Text, View} from "react-native";
import Toast, {BaseToast, ErrorToast} from "react-native-toast-message";
import {StatusBar} from "expo-status-bar";
import colors from "../constants/Colors";
import {useEffect} from "react";
import * as Location from "expo-location";
Logs.enableExpoCliLogging();

const toastConfig = {
    /*
    Overwrite 'success' type,
    by modifying the existing `BaseToast` component
  */
    message: props => (
        <BaseToast
            {...props}
            style={{borderLeftColor: colors.redColor}}
            contentContainerStyle={{paddingHorizontal: 15}}
            text1Style={{
                fontSize: 15,
                fontWeight: "400",
            }}
        />
    ),
    /*
    Overwrite 'error' type,
    by modifying the existing `ErrorToast` component
  */
    error: props => (
        <ErrorToast
            {...props}
            text1Style={{
                fontSize: 17,
            }}
            text2Style={{
                fontSize: 15,
            }}
        />
    ),

    /*
    Or create a completely new type - `tomatoToast`,
    building the layout from scratch.

    I can consume any custom `props` I want.
    They will be passed when calling the `show` method (see below)
  */
    tomatoToast: ({text1, props}) => (
        <View style={{height: 60, width: "100%", backgroundColor: "tomato"}}>
            <Text>{text1}</Text>
            <Text>{props.uuid}</Text>
        </View>
    ),
};

LogBox.ignoreLogs(["Remote debugger"]);
export default function Routes() {
    const token = useStore(state => state.token, shallow);
    const userAuth = useStore(state => state.userAuth, shallow);
    const setLocation = useStore(state => state.setLocation);
    // useEffect(() => {
    //     const eventGetLocation = setInterval(async () => {
    //         let location = await Location.getCurrentPositionAsync({});
    //         const latitude = parseFloat(location.coords.latitude);
    //         const longitude = parseFloat(location.coords.longitude);
    //         setLocation(latitude, longitude);
    //     }, 5000);
    //     return () => {
    //         clearInterval(eventGetLocation);
    //     };
    // }, []);
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <StatusBar style="dark" />
                    {token ? <AppStack /> : <StartStack />}
                    <Toast config={toastConfig} />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
