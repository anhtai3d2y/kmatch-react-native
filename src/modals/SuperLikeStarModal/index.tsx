import React, {useState} from "react";
import {Modal, Text, View, TouchableOpacity} from "react-native";
import colors from "../../constants/Colors";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import Swiper from "react-native-swiper/src";
import styles from "../../themes/modals/SuperLikeStarModal";
import useStore from "../../stores/store";
import {PackageType} from "../../constants/packageType";
import {Package} from "../../constants/package";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";

const SuperLikeStarModal = ({visible, setVisible}) => {
    const addPaypal = useStore(state => state.addPaypal);
    const isLoadingCreatePaypal = useStore(
        state => state.isLoadingCreatePaypal,
        shallow,
    );
    const packageStar = [
        {
            type: PackageType.Star,
            package: Package.SuperLike3,
        },
        {
            type: PackageType.Star,
            package: Package.SuperLike15,
        },
        {
            type: PackageType.Star,
            package: Package.SuperLike30,
        },
    ];
    const [choosedPackage, setChoosedPackage] = useState(packageStar[0]);
    const handleCreatePayment = async () => {
        await addPaypal(choosedPackage.type, choosedPackage.package);
    };
    const handleChoosePackage = (index: number) => {
        setChoosedPackage(packageStar[index]);
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
                            <AntDesign
                                name="star"
                                size={24}
                                color={colors.superlike}
                            />
                            <Text
                                style={[
                                    styles.text,
                                    {color: colors.superlike},
                                ]}>
                                Stand out with Super Like
                            </Text>
                        </View>
                        <Text style={{fontSize: 12}}>
                            You're 3x more likely to get a match!
                        </Text>
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
                            loop={false}
                            onIndexChanged={(index: number) =>
                                handleChoosePackage(index)
                            }>
                            <View style={styles.slide}>
                                <View style={styles.roundIcon}>
                                    <AntDesign
                                        name="star"
                                        size={40}
                                        color={colors.superlike}
                                    />
                                </View>
                                <Text style={styles.title}>3 Super Likes</Text>
                                <View style={styles.priceText}>
                                    <Text
                                        style={[
                                            styles.priceTextStyle,
                                            {color: colors.superlike},
                                        ]}>
                                        23.393 VND
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.slide}>
                                <View style={styles.roundIcon}>
                                    <AntDesign
                                        name="star"
                                        size={40}
                                        color={colors.superlike}
                                    />
                                </View>
                                <Text style={styles.title}>15 Super Likes</Text>
                                <View style={styles.priceText}>
                                    <Text
                                        style={[
                                            styles.priceTextStyle,
                                            {color: colors.superlike},
                                        ]}>
                                        46.786 VND
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.slide}>
                                <View style={styles.roundIcon}>
                                    <AntDesign
                                        name="star"
                                        size={40}
                                        color={colors.superlike}
                                    />
                                </View>
                                <Text style={styles.title}>30 Super Likes</Text>
                                <View style={styles.priceText}>
                                    <Text
                                        style={[
                                            styles.priceTextStyle,
                                            {color: colors.superlike},
                                        ]}>
                                        70.179 VND
                                    </Text>
                                </View>
                            </View>
                        </Swiper>

                        <TouchableOpacity
                            style={[styles.button, styles.buttonSayHello]}
                            onPress={handleCreatePayment}>
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

export default SuperLikeStarModal;
