import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider as ThemeProvider} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {Logs} from "expo";
import store from "../stores";
import {Provider} from "react-redux";
import AppStack from "./AppStack";
import StartStack from "./StartStack";
import {useState} from "react";
import {getToken} from "../helpers";

Logs.enableExpoCliLogging();

export default function Routes() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <ThemeProvider>
                    <NavigationContainer>
                        <AppStack />
                        {/* <StartStack /> */}
                    </NavigationContainer>
                </ThemeProvider>
            </SafeAreaProvider>
        </Provider>
    );
}
