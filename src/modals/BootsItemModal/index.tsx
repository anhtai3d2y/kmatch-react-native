import React, {useState} from "react";
import {Modal, Text, View, TouchableOpacity} from "react-native";
import colors from "../../constants/Colors";
import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import Swiper from "react-native-swiper/src";
import styles from "../../themes/modals/BootsItemModal";
import useStore from "../../stores/store";
import {PackageType} from "../../constants/packageType";
import {Package} from "../../constants/package";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";

const BootsItemModal = ({visible, setVisible}) => {
    const addPaypal = useStore(state => state.addPaypal);
    const isLoadingCreatePaypal = useStore(
        state => state.isLoadingCreatePaypal,
        shallow,
    );
    const packageStar = [
        {
            type: PackageType.Boots,
            package: Package.Boots1,
        },
        {
            type: PackageType.Boots,
            package: Package.Boots5,
        },
        {
            type: PackageType.Boots,
            package: Package.Boots10,
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
                            <MaterialIcons
                                name="bolt"
                                size={30}
                                color={colors.boots}
                            />
                            <Text style={[styles.text, {color: colors.boots}]}>
                                Skip the line
                            </Text>
                        </View>

                        <Text style={{fontSize: 12}}>
                            Be a top profile for 30 minutes to get more matches
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
                                    <MaterialIcons
                                        name="bolt"
                                        size={40}
                                        color={colors.boots}
                                    />
                                </View>
                                <Text style={styles.title}>1 Boots</Text>
                                <View style={styles.priceText}>
                                    <Text
                                        style={[
                                            styles.priceTextStyle,
                                            {color: colors.boots},
                                        ]}>
                                        23.393 VND
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.slide}>
                                <View style={styles.roundIcon}>
                                    <MaterialIcons
                                        name="bolt"
                                        size={40}
                                        color={colors.boots}
                                    />
                                </View>
                                <Text style={styles.title}>5 Boots</Text>
                                <View style={styles.priceText}>
                                    <Text
                                        style={[
                                            styles.priceTextStyle,
                                            {color: colors.boots},
                                        ]}>
                                        46.786 VND
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.slide}>
                                <View style={styles.roundIcon}>
                                    <MaterialIcons
                                        name="bolt"
                                        size={40}
                                        color={colors.boots}
                                    />
                                </View>
                                <Text style={styles.title}>10 Boots</Text>
                                <View style={styles.priceText}>
                                    <Text
                                        style={[
                                            styles.priceTextStyle,
                                            {color: colors.boots},
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

export default BootsItemModal;
