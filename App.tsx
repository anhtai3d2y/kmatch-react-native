import {StatusBar} from "expo-status-bar";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {Provider as ThemeProvider} from "react-native-paper";
import StartScreen from "./src/screens/Start";
import RegisterScreen from "./src/screens/Register";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {View} from "react-native";
import LoginScreen from "./src/screens/Login";
import HomeScreen from "./src/screens/Home";
import {Logs} from "expo";
import store from "./src/stores";
import {Provider} from "react-redux";
import ChatScreen from "./src/screens/Chat";

Logs.enableExpoCliLogging();
const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <ThemeProvider>
                    <NavigationContainer>
                        {/* <StartScreen /> */}
                        <StatusBar style="auto" />
                        <Stack.Navigator initialRouteName="Login">
                            <Stack.Screen
                                name="Login"
                                component={LoginScreen}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="Register"
                                component={RegisterScreen}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="Home"
                                component={HomeScreen}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="Start"
                                component={StartScreen}
                                options={{headerShown: false}}
                            />
                            <Stack.Screen
                                name="Chat"
                                component={ChatScreen}
                                options={{headerShown: false}}
                            />
                        </Stack.Navigator>
                    </NavigationContainer>
                </ThemeProvider>
            </SafeAreaProvider>
        </Provider>
    );
}
