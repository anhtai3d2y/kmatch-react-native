import {FontAwesome5, MaterialCommunityIcons} from "@expo/vector-icons";
import React, {useEffect, useState} from "react";
import {
    Alert,
    Modal,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    KeyboardAvoidingView,
    ScrollView,
    FlatList,
} from "react-native";
import colors from "../../constants/Colors";
import useStore from "../../stores/store";
import {Picker} from "@react-native-picker/picker";
import styles from "../../themes/modals/PaymentHistoryModal";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";
import {height} from "../../constants/Layout";

const PaymentHistoryModal = ({visible, setVisible}) => {
    const paymentHistory = useStore(state => state.paymentHistory, shallow);
    const getPaypal = useStore(state => state.getPaypal);
    const [payments, setPayments] = useState(paymentHistory);

    const colorPick = {
        KmatchPlus: colors.redColor,
        KmatchGold: colors.goldColor,
        kmatchPlatinum: colors.black,
        Boots1: colors.boots,
        Boots5: colors.boots,
        Boots10: colors.boots,
        SuperLike3: colors.superlike,
        SuperLike15: colors.superlike,
        SuperLike30: colors.superlike,
    };

    useEffect(() => {
        getPaypal();
    }, []);
    useEffect(() => {
        setPayments(paymentHistory);
    }, [paymentHistory]);

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
                        <Text style={styles.title}>Payment history</Text>
                        <View
                            style={{
                                height: height * 0.6,
                                marginBottom: 20,
                            }}>
                            {payments && (
                                <FlatList
                                    data={payments}
                                    keyExtractor={item => item._id}
                                    renderItem={({item}) => (
                                        <View style={styles.paymentBox}>
                                            <Text
                                                style={{
                                                    color: colorPick[
                                                        item.package
                                                            .split(" ")
                                                            .join("")
                                                    ],
                                                }}>
                                                {item.package}
                                            </Text>
                                            <Text>{item.price}</Text>
                                            <Text>{item.time}</Text>
                                        </View>
                                    )}
                                />
                            )}
                        </View>
                        <View style={styles.buttonContainer}>
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

export default PaymentHistoryModal;
