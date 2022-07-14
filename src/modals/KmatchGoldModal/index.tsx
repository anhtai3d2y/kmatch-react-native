import React from "react";
import {Modal, Text, View, TouchableOpacity} from "react-native";
import colors from "../../constants/Colors";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import Swiper from "react-native-swiper/src";
import styles from "../../themes/modals/KmatchGold";
import useStore from "../../stores/store";
import {PackageType} from "../../constants/packageType";
import {Package} from "../../constants/package";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";

const KmatchGoldModal = ({visible, setVisible}) => {
    const userProfile = useStore(state => state.userProfile, shallow);
    const addPaypal = useStore(state => state.addPaypal);
    const isLoadingCreatePaypal = useStore(
        state => state.isLoadingCreatePaypal,
        shallow,
    );
    const handleCreatePayment = async () => {
        await addPaypal(PackageType.Role, Package.KmatchGold);
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
                        <View style={styles.slideHeader}>
                            <Ionicons
                                name="logo-web-component"
                                size={24}
                                color={colors.goldColor}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    {color: colors.goldColor},
                                ]}>
                                Get Kmatch Gold™
                            </Text>
                        </View>
                        <View style={styles.priceText}>
                            <Text
                                style={[
                                    styles.priceTextStyle,
                                    {color: colors.goldColor},
                                ]}>
                                46.786 VND
                            </Text>
                        </View>
                        <Swiper
                            style={styles.wrapper}
                            dot={
                                <Ionicons
                                    name="logo-web-component"
                                    size={16}
                                    color="#ccc"
                                    style={{marginLeft: 5, marginRight: 5}}
                                />
                            }
                            activeDot={
                                <Ionicons
                                    name="logo-web-component"
                                    size={16}
                                    color={colors.redColor}
                                    style={{marginLeft: 5, marginRight: 5}}
                                />
                            }
                            loop={true}
                            autoplay={true}>
                            <View style={styles.slide}>
                                <View style={styles.roundIcon}>
                                    <MaterialIcons
                                        name="bolt"
                                        size={40}
                                        color={colors.boots}
                                    />
                                </View>
                                <Text style={styles.title}>
                                    3 Free Boots A Month
                                </Text>
                                <Text style={styles.desciption}>
                                    Skip the line to get more matches!
                                </Text>
                            </View>

                            <View style={styles.slide}>
                                <View style={styles.roundIcon}>
                                    <AntDesign
                                        name="star"
                                        size={40}
                                        color={colors.superlike}
                                    />
                                </View>
                                <Text style={styles.title}>
                                    15 Free Super Likes A Week
                                </Text>
                                <Text style={styles.desciption}>
                                    You're x3 more likely to get a match!
                                </Text>
                            </View>
                        </Swiper>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonSayHello]}
                            onPress={handleCreatePayment}
                            disabled={
                                userProfile.role === Package.KmatchGold ||
                                userProfile.role === Package.KmatchPlatinum
                            }>
                            {isLoadingCreatePaypal ? (
                                <ActivityIndicator size="small" color="#fff" />
                            ) : (
                                <Text style={styles.textSayHello}>
                                    CONTINUE
                                </Text>
                            )}
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={[styles.button, styles.buttonHideModal]}
                            onPress={() => setVisible(!visible)}>
                            <Text style={styles.textHideModal}>NO THANKS</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default KmatchGoldModal;
