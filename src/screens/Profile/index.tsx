import {Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {useEffect, useState} from "react";
import {View, Text, TouchableOpacity, Image} from "react-native";
import TinyLogo from "../../components/TinyLogo";
import colors from "../../constants/Colors";
import {setToken} from "../../helpers";
import useStore from "../../stores/store";
import styles from "../../themes/screens/Profile";
import shallow from "zustand/shallow";
import * as WebBrowser from "expo-web-browser";
import {PackageType} from "../../constants/packageType";
import {Package} from "../../constants/package";
import MatchedModal from "../../modals/MatchedModal";
import SwiperSlide from "../../components/Swiper";
import SettingModal from "../../modals/SettingModal";

export default function ProfileScreen({navigation}) {
    const setTokenStore = useStore(state => state.setToken);
    const userAuth = useStore(state => state.userAuth, shallow);
    const getUserProfile = useStore(state => state.getUserProfile);
    const userProfile = useStore(state => state.userProfile, shallow);
    const addPaypal = useStore(state => state.addPaypal);
    const clearPaypal = useStore(state => state.clearPaypal);
    const paypal = useStore(state => state.paypal, shallow);
    const [user, setUser] = useState({});

    const handleLogout = async () => {
        await setToken("");
        setTokenStore("");
    };

    useEffect(() => {
        setUser(userProfile);
    }, [userProfile]);

    useEffect(() => {
        const callWebBrowser = async () => {
            try {
                const webBrowserStatus = await WebBrowser.openBrowserAsync(
                    paypal,
                );
                await getUserProfile();
                await clearPaypal();
            } catch (error) {
                console.log(error);
            }
        };
        if (paypal) {
            callWebBrowser();
        }
    }, [paypal]);
    const handelEditProfile = async () => {
        await addPaypal(PackageType.Star, Package.SuperLike3);
    };

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            <TinyLogo />
            <View
                style={{
                    alignItems: "center",
                    paddingBottom: 60,
                    borderBottomStartRadius: 400,
                    borderBottomEndRadius: 400,
                    width: 600,
                    backgroundColor: "white",
                }}>
                <View style={styles.messageHeader}>
                    <View
                        style={{
                            borderWidth: 5,
                            borderColor: colors.redColor,
                            borderRadius: 500,
                            marginTop: 20,
                        }}>
                        <Image
                            source={{
                                uri:
                                    user?.avatar?.secureURL ||
                                    "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/76714112_2463775960534937_8739041008815177728_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=l5Qta76QWE0AX-N4OV1&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_-sjENN5Vk2-z0WY-N_OnPjXBKrSqPF-dFjY8WnJz9xg&oe=62D88D22",
                            }}
                            style={{
                                width: 130,
                                height: 130,
                                borderRadius: 500,
                                borderWidth: 4,
                                borderColor: "#fff",
                            }}
                        />
                    </View>
                </View>
                <View style={styles.info}>
                    <Text style={styles.textInfo}>{user.name}</Text>
                    <Text style={styles.textInfo}>,{" " + user.age}</Text>
                    <Ionicons
                        name="ios-checkmark-circle"
                        size={24}
                        color={colors.superlike}
                    />
                </View>
                <View style={styles.actions}>
                    <View>
                        <TouchableOpacity onPress={() => setModalVisible(true)}>
                            <View style={styles.action}>
                                <Ionicons
                                    name="ios-settings-sharp"
                                    size={24}
                                    color="#ccc"
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.actionName}>SETTINGS</Text>
                    </View>
                    <View>
                        <TouchableOpacity onPress={handelEditProfile}>
                            <View style={styles.action}>
                                <MaterialCommunityIcons
                                    name="lead-pencil"
                                    size={24}
                                    color="#ccc"
                                />
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.actionName}>EDIT PROFILE</Text>
                    </View>
                </View>
            </View>
            <View style={styles.swiperPackage}>
                <SwiperSlide />
            </View>
            {/* <SettingModal visible={modalVisible} setVisible={setModalVisible} /> */}
            <MatchedModal visible={modalVisible} setVisible={setModalVisible} />
        </View>
    );
}
