import {TouchableOpacity} from 'react-native';
import {Text, View, TextInput} from 'react-native';
import styles from '../../themes/screens/Login';
import axios from 'axios';
import {LinearGradient} from 'expo-linear-gradient';
import {FontAwesome} from '@expo/vector-icons';

export default function LoginScreen({navigation}) {
    const handleGoToStart = () => {
        navigation.navigate('Start');
    };

    const handleGoToRegister = () => {
        navigation.navigate('Register');
    };

    const handleLogin = async () => {
        try {
            const res = await axios.get('http://192.168.31.50:3000/healthz');
            console.log(res.data);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#e98242', '#e35568', '#df5888']}
                style={styles.linearGradient}>
                <Text style={[styles.title, styles.kma]}>kma</Text>
                <Text style={[styles.title, styles.match]}>match</Text>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={handleGoToRegister}
                        style={styles.button}>
                        <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={handleGoToStart}>
                        <Text style={styles.buttonOutlineText}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoToRegister}>
                        <Text style={styles.buttonOutlineText}>
                            Trouble Signing In?
                        </Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
}
