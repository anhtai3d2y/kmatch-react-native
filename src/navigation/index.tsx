import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider as ThemeProvider} from "react-native-paper";
import {NavigationContainer} from "@react-navigation/native";
import {Logs} from "expo";
import AppStack from "./AppStack";
import StartStack from "./StartStack";
import useStore from "../stores/store";
import shallow from "zustand/shallow";
import {LogBox} from "react-native";
import Toast from "react-native-toast-message";
Logs.enableExpoCliLogging();

LogBox.ignoreLogs(["Remote debugger"]);
export default function Routes() {
    const token = useStore(state => state.token, shallow);

    console.log("token: ", token);

    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    {token ? <AppStack /> : <StartStack />}
                    <Toast />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
