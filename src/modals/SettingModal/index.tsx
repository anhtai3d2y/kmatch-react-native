import React, {useState} from "react";
import {
    Alert,
    Modal,
    StyleSheet,
    Text,
    Pressable,
    View,
    TouchableOpacity,
} from "react-native";
import {setToken} from "../../helpers";
import useStore from "../../stores/store";
import styles from "../../themes/modals/SettingModal";

const SettingModal = ({visible, setVisible}) => {
    const setTokenStore = useStore(state => state.setToken);
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
                    Alert.alert("Modal has been closed.");
                    setVisible(!visible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Setting</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setVisible(!visible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonClose]}
                            onPress={handleLogout}>
                            <Text style={styles.textStyle}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default SettingModal;
