import {
    KeyboardAvoidingView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Text,
    View,
    TextInput,
    Keyboard,
    Platform,
} from "react-native";
import styles from "../../themes/screens/Signin";
import {useState} from "react";
import Logo from "../../components/Logo";
import colors from "../../constants/Colors";
import useStore from "../../stores/store";
import {getToken} from "../../helpers";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";

export default function SigninScreen({navigation}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const setToken = useStore(state => state.setToken);
    const loginEmail = useStore(state => state.loginEmail);
    const isLoginLoading = useStore(state => state.isLoginLoading, shallow);
    const handleLogin = async () => {
        loginEmail(email, password);
        const token = await getToken();
        setToken(token);
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Logo />
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}>
                    <TextInput
                        placeholder="Email"
                        placeholderTextColor="#ccc"
                        value={email}
                        onChangeText={text => setEmail(text)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#ccc"
                        value={password}
                        onChangeText={text => setPassword(text)}
                        style={styles.input}
                        secureTextEntry={true}
                    />
                </KeyboardAvoidingView>

                <TouchableOpacity
                    style={[
                        styles.button,
                        styles.buttonOutline,
                        {marginTop: 30},
                    ]}
                    onPress={handleLogin}>
                    {isLoginLoading ? (
                        <ActivityIndicator size="small" color="#fff" />
                    ) : (
                        <Text style={styles.buttonOutlineText}>Sing in</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Forgotpassword")}>
                    <Text style={{color: colors.redColor, marginTop: 20}}>
                        Trouble Signing In?
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    );
}
