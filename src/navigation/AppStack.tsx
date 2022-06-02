import {
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React from "react";
import {View} from "react-native";
import ChatScreen from "../screens/Chat";
import EditProfileScreen from "../screens/EditProfile";
import HomeScreen from "../screens/Home";
import HomeModal from "../screens/HomeModal";
import MatchesScreen from "../screens/Matches";
import MessagesScreen from "../screens/Message";
import ProfileScreen from "../screens/Profile";
import SettingProfileScreen from "../screens/SettingProfile";
import SubscriptionScreen from "../screens/Subscription";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreen}
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
                // headerRight: () => (
                //     <View style={{marginRight: 10}}>
                //         <FontAwesome5.Button
                //             name="plus"
                //             size={22}
                //             backgroundColor="#fff"
                //             color="#2e64e5"
                //             onPress={() => navigation.navigate("HomeModal")}
                //         />
                //     </View>
                // ),
            }}
        />
        <Stack.Screen
            name="HomeModal"
            component={HomeModal}
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
                //         <Ionicons name="arrow-back" size={25} color="#2e64e5" />
                //     </View>
                // ),
            }}
        />
    </Stack.Navigator>
);

const MatchesStack = ({navigation}) => (
    <Stack.Navigator initialRouteName="Matches">
        <Stack.Screen
            name="Matches"
            component={MatchesScreen}
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
    </Stack.Navigator>
);

const MessageStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Messages"
            component={MessagesScreen}
            options={({route}) => ({
                headerShown: false,
            })}
        />
        <Stack.Screen
            name="Chat"
            component={ChatScreen}
            options={({route}) => ({
                headerShown: false,
                // title: route.params.userName,
                headerBackTitleVisible: false,
            })}
        />
    </Stack.Navigator>
);
const ProfileStack = ({navigation}) => (
    <Stack.Navigator>
        <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="EditProfile"
            component={EditProfileScreen}
            options={{
                headerShown: false,
                // headerTitle: "Edit Profile",
                // headerBackTitleVisible: false,
                // headerTitleAlign: "center",
                // headerStyle: {
                //     backgroundColor: "#fff",
                //     shadowColor: "#fff",
                //     elevation: 0,
                // },
            }}
        />
        <Stack.Screen
            name="SettingProfile"
            component={SettingProfileScreen}
            options={{
                headerShown: false,
                // headerTitle: "Edit Profile",
                // headerBackTitleVisible: false,
                // headerTitleAlign: "center",
                // headerStyle: {
                //     backgroundColor: "#fff",
                //     shadowColor: "#fff",
                //     elevation: 0,
                // },
            }}
        />
        <Stack.Screen
            name="Subscription"
            component={SubscriptionScreen}
            options={{
                headerShown: false,
                // headerTitle: "My Subscription",
                // headerBackTitleVisible: false,
                // headerTitleAlign: "center",
                // headerStyle: {
                //     backgroundColor: "#fff",
                //     shadowColor: "#fff",
                //     elevation: 0,
                // },
            }}
        />
    </Stack.Navigator>
);
export default function AppStack() {
    const getTabBarVisibility = route => {
        const routeName = route.state
            ? route.state.routes[route.state.index].name
            : "";

        if (routeName === "Chat") {
            return false;
        }
        return true;
    };

    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#2e64e5",
            }}>
            <Tab.Screen
                name="HomeTab"
                component={FeedStack}
                options={({route}) => ({
                    headerShown: false,
                    tabBarLabel: "Home",
                    // // tabBarVisible: route.state && route.state.index === 0,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="home-outline"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="MatchesTab"
                component={MatchesStack}
                options={({route}) => ({
                    headerShown: false,
                    tabBarVisible: getTabBarVisibility(route),
                    // Or Hide tabbar when push!
                    // https://github.com/react-navigation/react-navigation/issues/7677
                    // tabBarVisible: route.state && route.state.index === 0,
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name="chatbox-ellipses-outline"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="MessagesTab"
                component={MessageStack}
                options={({route}) => ({
                    headerShown: false,
                    // tabBarVisible: false,
                    // Or Hide tabbar when push!
                    // https://github.com/react-navigation/react-navigation/issues/7677
                    // tabBarVisible: route.state && route.state.index === 0,
                    tabBarLabel: "Home",
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name="chatbox-ellipses-outline"
                            color={color}
                            size={size}
                        />
                    ),
                })}
            />
            <Tab.Screen
                name="ProfileTab"
                component={ProfileStack}
                options={{
                    headerShown: false,
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <Ionicons
                            name="person-outline"
                            color={color}
                            size={size}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
