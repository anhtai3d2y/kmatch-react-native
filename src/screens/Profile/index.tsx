import {Entypo, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";
import {useState} from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Modal,
    Pressable,
} from "react-native";
import TinyLogo from "../../components/TinyLogo";
import colors from "../../constants/Colors";
import {setToken} from "../../helpers";
import useStore from "../../stores/store";
import styles from "../../themes/screens/Profile";
import SettingModal from "../SettingModal";
import Swiper from "react-native-swiper";

export default function ProfileScreen({navigation}) {
    const setTokenStore = useStore(state => state.setToken);
    const getUser = useStore(state => state.getUser);
    const handleLogout = async () => {
        await setToken("");
        setTokenStore("");
    };

    const handleGetUser = async () => {
        await getUser();
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
                                uri: "https://scontent.fhan14-2.fna.fbcdn.net/v/t1.6435-9/76714112_2463775960534937_8739041008815177728_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=l5Qta76QWE0AX-N4OV1&_nc_ht=scontent.fhan14-2.fna&oh=00_AT_-sjENN5Vk2-z0WY-N_OnPjXBKrSqPF-dFjY8WnJz9xg&oe=62D88D22",
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
                    <Text style={styles.textInfo}>Tai, </Text>
                    <Text style={styles.textInfo}>21</Text>
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
                        <TouchableOpacity>
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
                <Swiper style={styles.wrapper}>
                    <View style={styles.slide1}>
                        <Text style={styles.text}>Hello Swiper</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Text style={styles.text}>Beautiful</Text>
                    </View>
                    <View style={styles.slide3}>
                        <Text style={styles.text}>And simple</Text>
                    </View>
                </Swiper>
            </View>
            {/* <TouchableOpacity style={{paddingTop: 50}} onPress={handleGetUser}>
                <Text style={{fontSize: 30}}>Get user</Text>
            </TouchableOpacity> */}
            <SettingModal visible={modalVisible} setVisible={setModalVisible} />
        </View>
    );
}
