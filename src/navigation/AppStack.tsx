import {
    FontAwesome,
    Ionicons,
    MaterialCommunityIcons,
} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import React, {useEffect} from "react";
import ChatScreen from "../screens/Chat";
import EditProfileScreen from "../screens/EditProfile";
import HomeScreen from "../screens/Home";
import HomeModal from "../screens/HomeModal";
import MatchesScreen from "../screens/Matches";
import MessagesScreen from "../screens/Message";
import ProfileScreen from "../screens/Profile";
import SettingProfileScreen from "../screens/SettingProfile";
import SubscriptionScreen from "../screens/Subscription";
import useStore from "../stores/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedStack = ({navigation}) => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen
            name="HomeModal"
            component={HomeModal}
            options={{
                headerShown: false,
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
    const latitude = useStore(state => state.latitude);
    const longitude = useStore(state => state.longitude);
    const userAuth = useStore(state => state.userAuth);
    const updateUser = useStore(state => state.updateUser);
    useEffect(() => {
        const eventUpdateLocation = setInterval(() => {
            const body = {
                ...userAuth,
                latitude: latitude,
                longitude: longitude,
            };
            updateUser(body);
        }, 10000);
        return () => {
            clearInterval(eventUpdateLocation);
        };
    }, []);

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
                    tabBarShowLabel: false,
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
                    tabBarShowLabel: false,
                    tabBarVisible: getTabBarVisibility(route),
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
                    tabBarShowLabel: false,
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name="user" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
