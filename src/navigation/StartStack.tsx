import {Ionicons} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {View} from "react-native";
import SigninScreen from "../screens/Signin";
import ForgotPasswordScreen from "../screens/Forgotpassword";
import SignupScreen from "../screens/Signup";
import SignupProfileScreen from "../screens/SignupProfile";
import StartScreen from "../screens/Start";
import VerificationScreen from "../screens/Verification";
import VerificationForgotPasswordScreen from "../screens/VerificationForgotPassword";

const Stack = createNativeStackNavigator();
export default function StartStack() {
    return (
        <Stack.Navigator initialRouteName="Start">
            <Stack.Screen
                name="Start"
                component={StartScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="Signin"
                component={SigninScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Verification"
                component={VerificationScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="Forgotpassword"
                component={ForgotPasswordScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="VerificationForgotpassword"
                component={VerificationForgotPasswordScreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="SignupProfile"
                component={SignupProfileScreen}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    );
}
