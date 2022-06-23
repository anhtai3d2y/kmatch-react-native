import {
    AntDesign,
    Feather,
    FontAwesome,
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
            options={({route}) => {
                return {
                    headerShown: false,
                    tabBarVisible: false,
                    // title: route.params.userName,
                    headerBackTitleVisible: false,
                };
            }}
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
            }}
        />
        <Stack.Screen
            name="SettingProfile"
            component={SettingProfileScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="Subscription"
            component={SubscriptionScreen}
            options={{
                headerShown: false,
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
                tabBarActiveTintColor: "#E94057",
            }}>
            <Tab.Screen
                name="HomeTab"
                component={FeedStack}
                options={({route}) => ({
                    headerShown: false,
                    // tabBarLabel: "Feeds",
                    tabBarShowLabel: false,
                    // // tabBarVisible: route.state && route.state.index === 0,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="cards"
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
                    // tabBarLabel: "Matches",
                    tabBarShowLabel: false,
                    tabBarVisible: getTabBarVisibility(route),
                    // Or Hide tabbar when push!
                    // https://github.com/react-navigation/react-navigation/issues/7677
                    // tabBarVisible: route.state && route.state.index === 0,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="md-heart" color={color} size={size} />
                    ),
                })}
            />
            <Tab.Screen
                name="MessagesTab"
                component={MessageStack}
                options={({route}) => ({
                    headerShown: false,
                    tabBarVisible: false,
                    // Or Hide tabbar when push!
                    // https://github.com/react-navigation/react-navigation/issues/7677
                    // tabBarVisible: route.state && route.state.index === 0,
                    // tabBarLabel: "Message",
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="comment-text"
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
                    // tabBarLabel: "Profile",
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
