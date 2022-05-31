import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Text} from "react-native";
import MessageScreen from "../Message";
import HomeScreen from "../Home";
import {FontAwesome} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const StartScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={30} color="#ccc" />
                    ),
                }}
            />
            <Tab.Screen
                name="MessageScreen"
                component={MessageScreen}
                options={{
                    headerShown: false,
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: () => (
                        <FontAwesome name="wechat" size={30} color="#ccc" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default StartScreen;
