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
import styles from "../../themes/modals/ChangePassword";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";
import {setToken} from "../../helpers";

const ChangePasswordModal = ({visible, setVisible}) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const setTokenStore = useStore(state => state.setToken);
    const changePassword = useStore(state => state.changePassword);
    const isLoadingChangePassword = useStore(
        state => state.isLoadingChangePassword,
    );
    const handleSave = async () => {
        const handleUpdatePassword = async () => {
            await changePassword(
                oldPassword,
                newPassword,
                confirmNewPassword,
                setVisible,
            );
        };
        if (!oldPassword || !newPassword || !confirmNewPassword) {
            Alert.alert("Error", "Please fill all fields");
            return;
        } else if (newPassword !== confirmNewPassword) {
            Alert.alert(
                "Error",
                "New password and confirm new password not match",
            );
            return;
        } else {
            handleUpdatePassword();
        }
    };

    const handleLogout = async () => {
        await setToken("");
        setTokenStore("");
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
                        <Text style={styles.modalText}>Change password</Text>
                        <View style={styles.textInput}>
                            <MaterialCommunityIcons
                                name="map-marker-distance"
                                size={24}
                                color={colors.redColor}
                            />
                            <Text style={styles.textField}>Old password</Text>
                        </View>
                        <TextInput
                            placeholder="Old password"
                            placeholderTextColor="#ccc"
                            value={oldPassword}
                            onChangeText={text => setOldPassword(text)}
                            style={styles.input}
                            secureTextEntry={true}
                        />
                        <View style={styles.textInput}>
                            <MaterialCommunityIcons
                                name="map-marker-distance"
                                size={24}
                                color={colors.redColor}
                            />
                            <Text style={styles.textField}>New password</Text>
                        </View>
                        <TextInput
                            placeholder="New password"
                            placeholderTextColor="#ccc"
                            value={newPassword}
                            onChangeText={text => setNewPassword(text)}
                            style={styles.input}
                            secureTextEntry={true}
                        />
                        <KeyboardAvoidingView
                            behavior={
                                Platform.OS === "ios" ? "padding" : "height"
                            }
                            // style={{flex: 1}}
                        >
                            <View style={styles.textInput}>
                                <MaterialCommunityIcons
                                    name="map-marker-distance"
                                    size={24}
                                    color={colors.redColor}
                                />
                                <Text style={styles.textField}>
                                    Confirm new password
                                </Text>
                            </View>
                            <TextInput
                                placeholder="Confirm new password"
                                placeholderTextColor="#ccc"
                                value={confirmNewPassword}
                                onChangeText={text =>
                                    setConfirmNewPassword(text)
                                }
                                style={styles.input}
                                secureTextEntry={true}
                            />
                        </KeyboardAvoidingView>

                        <View style={styles.buttonContainer}>
                            <TouchableOpacity
                                style={[styles.button, styles.buttonOutline]}
                                onPress={handleSave}>
                                {isLoadingChangePassword ? (
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

export default ChangePasswordModal;
