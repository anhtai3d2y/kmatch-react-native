import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Home';
import LoginScreen from '../Login';
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
