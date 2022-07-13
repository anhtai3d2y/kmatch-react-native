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
import styles from "../../themes/screens/EditProfile";
import {width} from "../../constants/Layout";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import {Picker} from "@react-native-picker/picker";
import Toast from "react-native-toast-message";
import useStore from "../../stores/store";
import {ActivityIndicator} from "react-native-paper";
import shallow from "zustand/shallow";

export default function EditProfileScreen({navigation}) {
    const latitude = useStore(state => state.latitude);
    const longitude = useStore(state => state.longitude);
    const userProfile = useStore(state => state.userProfile, shallow);

    const [name, setName] = useState(userProfile.name);
    const [isSelectGender, setIsSelectGender] = useState(false);
    const [gender, setGender] = useState(userProfile.gender);
    const [birthday, setBirthday] = useState(userProfile.birthday);
    const [date, setDate] = useState(new Date(userProfile.birthday));
    const [phonenumber, setPhonenumber] = useState(userProfile.phonenumber);

    const [image, setImage] = useState({
        uri: userProfile.avatar.secureURL,
    });

    const getUserProfile = useStore(state => state.getUserProfile);
    const updateUserProfile = useStore(state => state.updateUserProfile);
    const isLoadingUpdateUser = useStore(state => state.isLoadingUpdateUser);

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

    const handleUpdateUser = () => {
        const handleUpdateProfile = async () => {
            await updateUserProfile(
                createFormData(image, {
                    name: name,
                    gender: gender,
                    phonenumber: phonenumber,
                    birthday: birthday,
                    latitude: latitude,
                    longitude: longitude,
                }),
            );
            await getUserProfile();
            navigation.pop();
        };
        if (!name || !gender || !birthday || !phonenumber) {
            Toast.show({
                type: "error",
                text1: "Field error!",
                text2: "All fields cannot be left blank!",
            });
        } else {
            handleUpdateProfile();
        }
    };

    const createFormData = (photo, body = {}) => {
        const data = new FormData();

        data.append("avatar", {
            name: new Date() + name,
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
                        <Text style={styles.title}>Edit profile</Text>
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
                            <Text style={styles.textField}>Your Name</Text>
                        </View>
                        <TextInput
                            value={name}
                            placeholder="Name"
                            placeholderTextColor="#ccc"
                            style={[styles.input, {color: "#000"}]}
                            inlineImageLeft="username"
                            inlineImagePadding={2}
                            onChangeText={text => setName(text)}
                        />
                        <View style={styles.textInput}>
                            <FontAwesome5
                                name="transgender"
                                size={24}
                                color={colors.redColor}
                            />
                            <Text style={styles.textField}>Gender</Text>
                        </View>
                        {isSelectGender ? (
                            <Picker
                                selectedValue={gender}
                                style={styles.inputSelect}
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
                                style={styles.inputSelect}
                                onPress={() =>
                                    setIsSelectGender(prev => !prev)
                                }>
                                {gender}
                            </Text>
                        )}
                        <View style={styles.textInput}>
                            <MaterialIcons
                                name="today"
                                size={24}
                                color={colors.redColor}
                            />
                            <Text style={styles.textField}>Birthday</Text>
                        </View>
                        <View
                            style={{
                                width: width,
                                marginLeft: 120,
                                marginVertical: 10,
                            }}>
                            <DateTimePicker
                                testID="dateTimePicker"
                                value={date}
                                mode={"date"}
                                maximumDate={new Date()}
                                is24Hour={true}
                                onChange={onChangeBirthday}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <FontAwesome
                                name="phone-square"
                                size={24}
                                color={colors.redColor}
                            />
                            <Text style={styles.textField}>Phone number</Text>
                        </View>
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
                </KeyboardAvoidingView>
                <View style={{alignItems: "center", marginTop: 20}}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={handleUpdateUser}>
                        {isLoadingUpdateUser ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Text style={styles.buttonOutlineText}>Save</Text>
                        )}
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
