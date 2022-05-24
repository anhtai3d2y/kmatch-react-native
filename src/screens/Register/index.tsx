import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from '../../themes/screens/Register';
import {useState} from 'react';
import {LinearGradient} from 'expo-linear-gradient';

export default function RegisterScreen() {
    const [email, setEmail] = useState('');
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.title}>My email is</Text>
                <TextInput
                    placeholder="Email"
                    placeholderTextColor="#ccc"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
            </View>
            <TouchableOpacity>
                <Text>CONTINUE</Text>
            </TouchableOpacity>
            <LinearGradient
                start={{x: 1, y: 0}}
                end={{x: 0, y: 1}}
                colors={['#e98242', '#e35568', '#df5888']}
                style={styles.linearGradient}>
                <Text style={styles.buttonText}>CONTINUE</Text>
                <Text style={styles.title}>My email is</Text>
            </LinearGradient>
        </View>
    );
}
