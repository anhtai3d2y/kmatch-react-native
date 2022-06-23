import {
    Entypo,
    FontAwesome,
    FontAwesome5,
    Fontisto,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    ScrollView,
    Platform,
} from "react-native";
import colors from "../../constants/Colors";
import styles from "../../themes/screens/SignupProfile";
import {width} from "../../constants/Layout";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Picker} from "@react-native-picker/picker";
import Toast from "react-native-toast-message";
import useStore from "../../stores/store";
import {ActivityIndicator} from "react-native-paper";

export default function SignupProfileScreen() {
    const emailVerification = useStore(state => state.emailVerification);
    const isSignupSuccess = useStore(state => state.isSignupSuccess);
    const loginEmail = useStore(state => state.loginEmail);

    useEffect(() => {
        if (isSignupSuccess) {
            loginEmail(emailVerification, password);
        }
    });

    const [name, setName] = useState("");
    const [isSelectGender, setIsSelectGender] = useState(false);
    const [gender, setGender] = useState("Male");
    const [birthday, setBirthday] = useState("");
    const [date, setDate] = useState(new Date());
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [image, setImage] = useState({
        uri: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/76714112_2463775960534937_8739041008815177728_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=l5Qta76QWE0AX-N4OV1&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_-sjENN5Vk2-z0WY-N_OnPjXBKrSqPF-dFjY8WnJz9xg&oe=62D88D22",
    });

    const signup = useStore(state => state.signup);
    const isSignupLoading = useStore(state => state.isSignupLoading);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            // aspect: [16, 9],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result);
        }
    };

    const onChangeBirthday = (event: object, selectedDate) => {
        const currentDate = `${selectedDate.getFullYear()}/${
            selectedDate.getMonth() + 1
        }/${selectedDate.getDate()}`;
        setBirthday(currentDate);
        setDate(selectedDate);
    };

    const handelSignup = () => {
        if (
            !name ||
            !gender ||
            !birthday ||
            !phonenumber ||
            !password ||
            !confirmPassword
        ) {
            Toast.show({
                type: "error",
                text1: "Field error!",
                text2: "All fields cannot be left blank!",
            });
        } else if (password !== confirmPassword) {
            Toast.show({
                type: "error",
                text1: "Password error!",
                text2: "Password and confirm password not match!",
            });
        } else {
            signup(
                createFormData(image, {
                    email: emailVerification,
                    name: name,
                    password: password,
                    gender: gender,
                    phonenumber: phonenumber,
                    role: "Kmatch Basic",
                    birthday: birthday,
                }),
            );
        }
    };

    const createFormData = (photo, body = {}) => {
        const data = new FormData();

        data.append("avatar", {
            name: new Date() + emailVerification,
            type: photo.type + "/jpg",
            uri:
                Platform.OS === "ios"
                    ? photo.uri.replace("file://", "")
                    : photo.uri,
        });

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });

        return data;
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{backgroundColor: "white"}}>
                <KeyboardAvoidingView
                    style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                    behavior="position"
                    enabled
                    // keyboardVerticalOffset={100}
                >
                    <View style={styles.container}>
                        <Text style={styles.title}>Profile details</Text>
                        <View style={styles.avatar}>
                            <TouchableOpacity onPress={pickImage}>
                                {image && (
                                    <Image
                                        source={{uri: image.uri}}
                                        style={{
                                            width: 100,
                                            height: 100,
                                            borderRadius: 100,
                                        }}
                                    />
                                )}
                                <View style={styles.icon}>
                                    <Fontisto
                                        name="camera"
                                        size={14}
                                        color="white"
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textInput}>
                            <MaterialCommunityIcons
                                name="rename-box"
                                size={24}
                                color={colors.redColor}
                            />
                            <TextInput
                                value={name}
                                placeholder="Name"
                                placeholderTextColor="#ccc"
                                style={[styles.input, {color: "#000"}]}
                                inlineImageLeft="username"
                                inlineImagePadding={2}
                                onChangeText={text => setName(text)}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <FontAwesome5
                                name="transgender"
                                size={24}
                                color={colors.redColor}
                            />
                            {isSelectGender ? (
                                <Picker
                                    selectedValue={gender}
                                    style={styles.input}
                                    onValueChange={(itemValue, itemIndex) => {
                                        setGender(itemValue);
                                        setIsSelectGender(prev => !prev);
                                    }}>
                                    <Picker.Item label="Man" value="Male" />
                                    <Picker.Item label="Woman" value="Female" />
                                    <Picker.Item label="Other" value="Other" />
                                </Picker>
                            ) : (
                                <Text
                                    style={styles.input}
                                    onPress={() =>
                                        setIsSelectGender(prev => !prev)
                                    }>
                                    {gender}
                                </Text>
                            )}
                        </View>
                        <View style={styles.textInput}>
                            <MaterialIcons
                                name="today"
                                size={24}
                                color={colors.redColor}
                            />
                            <View style={{width: width}}>
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={"date"}
                                    maximumDate={new Date()}
                                    is24Hour={true}
                                    onChange={onChangeBirthday}
                                />
                            </View>
                        </View>
                        <View style={styles.textInput}>
                            <FontAwesome
                                name="phone-square"
                                size={24}
                                color={colors.redColor}
                            />
                            <TextInput
                                value={phonenumber}
                                placeholder="Phonenumber"
                                placeholderTextColor="#ccc"
                                style={[styles.input, {color: "#000"}]}
                                inlineImageLeft="username"
                                inlineImagePadding={2}
                                onChangeText={text => setPhonenumber(text)}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <Entypo
                                name="lock"
                                size={24}
                                color={colors.redColor}
                            />
                            <TextInput
                                value={password}
                                placeholder="Password"
                                placeholderTextColor="#ccc"
                                style={[styles.input, {color: "#000"}]}
                                inlineImageLeft="username"
                                inlineImagePadding={2}
                                onChangeText={text => setPassword(text)}
                                secureTextEntry={true}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <MaterialCommunityIcons
                                name="form-textbox-password"
                                size={24}
                                color={colors.redColor}
                            />
                            <TextInput
                                value={confirmPassword}
                                placeholder="Confirm password"
                                placeholderTextColor="#ccc"
                                style={[styles.input, {color: "#000"}]}
                                inlineImageLeft="username"
                                inlineImagePadding={2}
                                onChangeText={text => setConfirmPassword(text)}
                                secureTextEntry={true}
                            />
                        </View>
                    </View>
                </KeyboardAvoidingView>
                <View style={{alignItems: "center", marginTop: 20}}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={handelSignup}>
                        {isSignupLoading ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Text style={styles.buttonOutlineText}>
                                Confirm
                            </Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
