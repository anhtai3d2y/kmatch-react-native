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

const SettingModal = ({visible, setVisible}) => {
    const setTokenStore = useStore(state => state.setToken);
    const handleLogout = async () => {
        await setToken("");
        setTokenStore("");
    };
    return (
        <View style={styles.centeredView}>
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

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginBottom: 20,
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
    },
});

export default SettingModal;
