import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import LoginScreen from '../Login';
import HomeScreen from '../Home';
import {FontAwesome} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const StartScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: () => (
                        <FontAwesome name="home" size={30} color="#ccc" />
                    ),
                }}
            />
            <Tab.Screen
                name="ChatScreen"
                component={LoginScreen}
                options={{
                    tabBarIcon: () => (
                        <FontAwesome name="wechat" size={30} color="#ccc" />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default StartScreen;
