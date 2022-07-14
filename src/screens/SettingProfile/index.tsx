import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {
    View,
    Text,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
} from "react-native";
import colors from "../../constants/Colors";
import styles from "../../themes/screens/SettingProfile";
import useStore from "../../stores/store";
import {setToken} from "../../helpers";
import {useState} from "react";
import SettingNewsfeedModal from "../../modals/SettingNewsfeedModal";
import ChangePasswordModal from "../../modals/ChangePasswordModal";
import KmatchPlusModal from "../../modals/KmatchPlusModal";
import KmatchGoldModal from "../../modals/KmatchGoldModal";
import KmatchPlatinumModal from "../../modals/KmatchPlatinumModal";
import BootsItemModal from "../../modals/BootsItemModal";
import SuperLikeStarModal from "../../modals/SuperLikeStarModal";

export default function SettingProfileScreen({navigation}) {
    const [settingNewsfeedModalVisible, setSettingNewsfeedModalVisible] =
        useState(false);
    const [changePasswordModalVisible, setChangePasswordModalVisible] =
        useState(false);

    const [isKmatchPlusModalVisible, setIsKmatchPlusModalVisible] =
        useState(false);
    const [isKmatchGoldModalVisible, setIsKmatchGoldModalVisible] =
        useState(false);
    const [isKmatchPlatinumModalVisible, setIsKmatchPlatinumModalVisible] =
        useState(false);
    const [isBootsItemModalVisible, setIsBootsItemModalVisible] =
        useState(false);
    const [isSuperLikeStarModalVisible, setIsSuperLikeStarModalVisible] =
        useState(false);

    const setTokenStore = useStore(state => state.setToken);
    const handleLogout = async () => {
        await setToken("");
        setTokenStore("");
    };
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView style={{backgroundColor: colors.grayColor}}>
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
                        <Text style={styles.title}>Setting</Text>
                    </View>

                    <View style={styles.packageView}>
                        <TouchableOpacity
                            onPress={() =>
                                setIsKmatchPlatinumModalVisible(true)
                            }>
                            <View style={styles.package}>
                                <View style={styles.slideHeader}>
                                    <Ionicons
                                        name="logo-web-component"
                                        size={24}
                                        color="black"
                                    />
                                    <Text
                                        style={[
                                            styles.text,
                                            {color: colors.black},
                                        ]}>
                                        kmatch
                                    </Text>
                                    <View
                                        style={[
                                            styles.badge,
                                            {backgroundColor: colors.black},
                                        ]}>
                                        <Text
                                            style={{
                                                color: colors.white,
                                                fontSize: 8,
                                                paddingHorizontal: 10,
                                            }}>
                                            PLATINUM
                                        </Text>
                                    </View>
                                </View>
                                <Text style={{marginBottom: 20}}>
                                    Priority Likes, See who Likes you & more!
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setIsKmatchGoldModalVisible(true)}>
                            <View style={styles.package}>
                                <View style={styles.slideHeader}>
                                    <Ionicons
                                        name="logo-web-component"
                                        size={24}
                                        color={colors.goldColor}
                                    />
                                    <Text
                                        style={[
                                            styles.text,
                                            {color: colors.black},
                                        ]}>
                                        kmatch
                                    </Text>
                                    <View
                                        style={[
                                            styles.badge,
                                            {backgroundColor: colors.goldColor},
                                        ]}>
                                        <Text
                                            style={{
                                                color: colors.white,
                                                fontSize: 8,
                                                paddingHorizontal: 10,
                                            }}>
                                            GOLD
                                        </Text>
                                    </View>
                                </View>
                                <Text style={{marginBottom: 20}}>
                                    See Who Likes You & more!
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => setIsKmatchPlusModalVisible(true)}>
                            <View style={styles.package}>
                                <View style={styles.slideHeader}>
                                    <Ionicons
                                        name="logo-web-component"
                                        size={24}
                                        color={colors.redColor}
                                    />
                                    <Text
                                        style={[
                                            styles.text,
                                            {color: colors.black},
                                        ]}>
                                        kmatch
                                    </Text>
                                    <View
                                        style={[
                                            styles.badge,
                                            {backgroundColor: colors.redColor},
                                        ]}>
                                        <Text
                                            style={{
                                                color: colors.white,
                                                fontSize: 8,
                                                paddingHorizontal: 10,
                                            }}>
                                            PLUS
                                        </Text>
                                    </View>
                                </View>
                                <Text style={{marginBottom: 20}}>
                                    Unlimited Likes & More!
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.packageItem}>
                            <TouchableOpacity
                                onPress={() =>
                                    setIsSuperLikeStarModalVisible(true)
                                }>
                                <View style={styles.packageItemBox}>
                                    <View style={styles.roundIcon}>
                                        <AntDesign
                                            name="star"
                                            size={24}
                                            color={colors.superlike}
                                        />
                                    </View>
                                    <Text
                                        style={[
                                            styles.packageItemText,
                                            {
                                                color: colors.superlike,
                                            },
                                        ]}>
                                        Get Super Likes
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() =>
                                    setIsBootsItemModalVisible(true)
                                }>
                                <View style={styles.packageItemBox}>
                                    <View style={styles.roundIcon}>
                                        <MaterialIcons
                                            name="bolt"
                                            size={24}
                                            color={colors.boots}
                                        />
                                    </View>
                                    <Text
                                        style={[
                                            styles.packageItemText,
                                            {
                                                color: colors.boots,
                                            },
                                        ]}>
                                        Get Boots
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={{marginTop: 20, marginLeft: 15}}>
                        ACCOUNT EMAIL
                    </Text>
                    <View style={styles.infoView}>
                        <Text>Email</Text>
                        <Text style={{color: colors.redColor}}>
                            anhtai3d2y@gmail.com
                        </Text>
                    </View>

                    <Text style={{marginTop: 20, marginLeft: 15}}>
                        DISCOVERY
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setSettingNewsfeedModalVisible(true);
                        }}>
                        <View style={styles.infoView}>
                            <Text>Setting news feed</Text>
                            <Text>{">"}</Text>
                        </View>
                    </TouchableOpacity>
                    <Text style={{marginTop: 20, marginLeft: 15}}>
                        PASSWORD
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            setChangePasswordModalVisible(true);
                        }}>
                        <View style={styles.infoView}>
                            <Text>Change password</Text>
                            <Text>{">"}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleLogout}>
                            <Text style={styles.buttonText}>LOGOUT</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
                {/* <View style={{alignItems: "center", marginTop: 20}}>
                    <TouchableOpacity
                        style={[styles.button, styles.buttonOutline]}
                        onPress={handleUpdateUser}>
                        {isLoadingUpdateUser ? (
                            <ActivityIndicator size="small" color="#fff" />
                        ) : (
                            <Text style={styles.buttonOutlineText}>Save</Text>
                        )}
                    </TouchableOpacity>
                </View> */}
                <SettingNewsfeedModal
                    visible={settingNewsfeedModalVisible}
                    setVisible={setSettingNewsfeedModalVisible}
                />
                <ChangePasswordModal
                    visible={changePasswordModalVisible}
                    setVisible={setChangePasswordModalVisible}
                />
                <KmatchPlusModal
                    visible={isKmatchPlusModalVisible}
                    setVisible={setIsKmatchPlusModalVisible}
                />
                <KmatchGoldModal
                    visible={isKmatchGoldModalVisible}
                    setVisible={setIsKmatchGoldModalVisible}
                />
                <KmatchPlatinumModal
                    visible={isKmatchPlatinumModalVisible}
                    setVisible={setIsKmatchPlatinumModalVisible}
                />
                <BootsItemModal
                    visible={isBootsItemModalVisible}
                    setVisible={setIsBootsItemModalVisible}
                />
                <SuperLikeStarModal
                    visible={isSuperLikeStarModalVisible}
                    setVisible={setIsSuperLikeStarModalVisible}
                />
            </ScrollView>
        </TouchableWithoutFeedback>
    );
}
