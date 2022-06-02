import {Ionicons} from "@expo/vector-icons";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {View} from "react-native";
import SigninScreen from "../screens/Signin";
import SignupScreen from "../screens/Signup";
import StartScreen from "../screens/Start";

const Stack = createNativeStackNavigator();

export default function StartStack() {
    return (
        <Stack.Navigator initialRouteName="Start">
            <Stack.Screen
                name="Start"
                component={StartScreen}
                options={{
                    headerShown: false,
                    // headerTitleAlign: "center",
                    // headerTitleStyle: {
                    //     color: "#2e64e5",
                    //     fontFamily: "Kufam-SemiBoldItalic",
                    //     fontSize: 18,
                    // },
                    // headerStyle: {
                    //     backgroundColor: "#fff",
                    // },
                }}
            />
            <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{
                    headerShown: false,
                    // title: "",
                    // headerTitleAlign: "center",
                    // headerStyle: {
                    //     backgroundColor: "#2e64e515",
                    //     // shadowColor: "#2e64e515",
                    //     elevation: 0,
                    // },
                    // headerBackTitleVisible: false,
                    // headerBackImage: () => (
                    //     <View style={{marginLeft: 15}}>
                    //         <Ionicons
                    //             name="arrow-back"
                    //             size={25}
                    //             color="#2e64e5"
                    //         />
                    //     </View>
                    // ),
                }}
            />
            <Stack.Screen
                name="Signin"
                component={SigninScreen}
                options={{
                    headerShown: false,
                    // title: "",
                    // headerTitleAlign: "center",
                    // headerStyle: {
                    //     backgroundColor: "#2e64e515",
                    //     // shadowColor: "#2e64e515",
                    //     // elevation: 0,
                    // },
                    // headerBackTitleVisible: false,
                    // headerBackImage: () => (
                    //     <View style={{marginLeft: 15}}>
                    //         <Ionicons
                    //             name="arrow-back"
                    //             size={25}
                    //             color="#2e64e5"
                    //         />
                    //     </View>
                    // ),
                }}
            />
        </Stack.Navigator>
    );
}
