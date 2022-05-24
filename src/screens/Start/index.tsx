import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import LoginScreen from '../Login';
import HomeScreen from '../Home';
const Tab = createBottomTabNavigator();

const StartScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Login" component={LoginScreen} />
        </Tab.Navigator>
    );
};

export default StartScreen;
