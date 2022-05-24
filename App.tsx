import {StatusBar} from 'expo-status-bar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider as ThemeProvider} from 'react-native-paper';
import StartScreen from './src/screens/Start';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
    return (
        <SafeAreaProvider>
            <ThemeProvider>
                <NavigationContainer>
                    <StartScreen />
                    <StatusBar style="auto" />
                </NavigationContainer>
            </ThemeProvider>
        </SafeAreaProvider>
    );
}
