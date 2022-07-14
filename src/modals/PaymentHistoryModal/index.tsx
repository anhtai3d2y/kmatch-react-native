import {
    AntDesign,
    FontAwesome5,
    Ionicons,
    MaterialCommunityIcons,
    MaterialIcons,
} from "@expo/vector-icons";
import React, {useCallback, useEffect, useState} from "react";
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
    RefreshControl,
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
    const isLoadingPaymentHistory = useStore(
        state => state.isLoadingPaymentHistory,
        shallow,
    );
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

    const iconPick = {
        KmatchPlus: (
            <Ionicons
                name="logo-web-component"
                size={16}
                color={colors.redColor}
            />
        ),
        KmatchGold: (
            <Ionicons
                name="logo-web-component"
                size={16}
                color={colors.goldColor}
            />
        ),
        kmatchPlatinum: (
            <Ionicons
                name="logo-web-component"
                size={16}
                color={colors.black}
            />
        ),
        Boots1: <MaterialIcons name="bolt" size={18} color={colors.boots} />,
        Boots5: <MaterialIcons name="bolt" size={18} color={colors.boots} />,
        Boots10: <MaterialIcons name="bolt" size={18} color={colors.boots} />,
        SuperLike3: (
            <AntDesign name="star" size={16} color={colors.superlike} />
        ),
        SuperLike15: (
            <AntDesign name="star" size={16} color={colors.superlike} />
        ),
        SuperLike30: (
            <AntDesign name="star" size={16} color={colors.superlike} />
        ),
    };

    useEffect(() => {
        getPaypal();
    }, []);
    useEffect(() => {
        setPayments(paymentHistory);
    }, [paymentHistory]);

    const onRefresh = useCallback(() => {
        getPaypal();
    }, []);

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
                                        <View>
                                            <View style={styles.paymentBox}>
                                                {
                                                    iconPick[
                                                        item.package
                                                            .split(" ")
                                                            .join("")
                                                    ]
                                                }
                                                <Text
                                                    style={{
                                                        color: colorPick[
                                                            item.package
                                                                .split(" ")
                                                                .join("")
                                                        ],
                                                        fontSize: 14,
                                                        fontWeight: "bold",
                                                        minWidth: 100,
                                                    }}>
                                                    {item.package}
                                                </Text>
                                                <Text
                                                    style={{
                                                        fontSize: 14,
                                                        fontWeight: "bold",
                                                    }}>
                                                    {item.price}$
                                                </Text>
                                                <Text style={{fontSize: 10}}>
                                                    {item.time}
                                                </Text>
                                            </View>
                                            <View
                                                style={{
                                                    backgroundColor: "#000",
                                                    height: 2,
                                                    width: 300,
                                                    marginBottom: 10,
                                                }}></View>
                                        </View>
                                    )}
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={isLoadingPaymentHistory}
                                            onRefresh={onRefresh}
                                        />
                                    }
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
