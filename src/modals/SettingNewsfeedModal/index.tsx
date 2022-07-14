import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useState} from "react";
import {
    Alert,
    Modal,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import colors from "../../constants/Colors";
import useStore from "../../stores/store";
import {Picker} from "@react-native-picker/picker";
import Toast from "react-native-toast-message";
import styles from "../../themes/modals/SettingNewsfeedModal";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";

const SettingNewsfeedModal = ({visible, setVisible}) => {
    const userProfile = useStore(state => state.userProfile, shallow);
    const [gender, setGender] = useState(userProfile.genderShow);
    const [isSelectGender, setIsSelectGender] = useState(false);
    const [minAge, setMinAge] = useState(userProfile.minAge);
    const [maxAge, setMaxAge] = useState(userProfile.maxAge);
    const [distance, setDistance] = useState(userProfile.distance);

    const getUserNewsFeed = useStore(state => state.getUserNewsFeed);
    const getUserProfile = useStore(state => state.getUserProfile);
    const updateUserProfile = useStore(state => state.updateUserProfile);
    const isLoadingUpdateUser = useStore(state => state.isLoadingUpdateUser);
    const handleSave = async () => {
        const handleUpdateProfile = async () => {
            await updateUserProfile(
                createFormData({
                    genderShow: gender,
                    minAge: minAge,
                    maxAge: maxAge,
                    distance: distance,
                }),
            );
            await getUserProfile();
            await getUserNewsFeed({
                gender: gender,
                minAge: minAge,
                maxAge: maxAge,
                distance: distance,
            });
            setVisible(!visible);
        };
        if (minAge < 16 || maxAge < 16) {
            Alert.alert("Error", "Min age and max age must be great than 16");
            return;
        } else if (distance <= 0) {
            Alert.alert("Error", "Distance must be greater than 0");
            return;
        } else if (minAge > maxAge) {
            Alert.alert("Error", "Min age must be less than max age");
            return;
        } else {
            handleUpdateProfile();
        }
    };

    const createFormData = (body = {}) => {
        const data = new FormData();

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });
        return data;
    };

    return (
        <View style={styles.backgroundView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    setVisible(!visible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Setting news feed</Text>
                        <View style={styles.textInput}>
                            <FontAwesome5
                                name="transgender"
                                size={24}
                                color={colors.redColor}
                            />
                            <Text style={styles.textField}>Show Me</Text>
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
                                <Picker.Item label="Both" value="Both" />
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
                            <MaterialCommunityIcons
                                name="map-marker-distance"
                                size={24}
                                color={colors.redColor}
                            />
                            <Text style={styles.textField}>
                                Distance Preference
                            </Text>
                        </View>
                        <TextInput
                            placeholder="Distance"
                            placeholderTextColor="#ccc"
                            value={distance.toString()}
                            onChangeText={text => {
                                if (text === "") {
                                    text = "0";
                                }
                                setDistance(parseInt(text));
                            }}
                            style={styles.input}
                            keyboardType="numeric"
                        />
                        <View style={styles.textInput}>
                            <MaterialCommunityIcons
                                name="timeline-minus"
                                size={24}
                                color={colors.redColor}
                            />
                            <Text style={styles.textField}>Min Age</Text>
                        </View>
                        <TextInput
                            placeholder="Min Age"
                            placeholderTextColor="#ccc"
                            value={minAge.toString()}
                            onChangeText={text => {
                                if (text === "") {
                                    text = "0";
                                }
                                setMinAge(parseInt(text));
                            }}
                            style={styles.input}
                            keyboardType="numeric"
                        />
                        <KeyboardAvoidingView
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                            // style={{flex: 1}}
                        >
                            <View style={styles.textInput}>
                                <MaterialCommunityIcons
                                    name="timeline-plus"
                                    size={24}
                                    color={colors.redColor}
                                />
                                <Text style={styles.textField}>Max Age</Text>
                            </View>
                            <TextInput
                                placeholder="Max Age"
                                placeholderTextColor="#ccc"
                                value={maxAge.toString()}
                                onChangeText={text => {
                                    if (text === "") {
                                        text = "0";
                                    }
                                    setMaxAge(parseInt(text));
                                }}
                                style={styles.input}
                                keyboardType="numeric"
                            />
                        </KeyboardAvoidingView>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonOutline]}
                                onPress={handleSave}>
                                {isLoadingUpdateUser ? (
                                    <ActivityIndicator
                                        size="small"
                                        color="#fff"
                                    />
                                ) : (
                                    <Text style={styles.buttonOutlineText}>
                                        SAVE
                                    </Text>
                                )}
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => setVisible(!visible)}>
                                <Text style={styles.buttonText}>CANCEL</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SettingNewsfeedModal;
