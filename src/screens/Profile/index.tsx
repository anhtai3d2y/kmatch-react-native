import {View, Text, TouchableOpacity} from "react-native";
import {setToken} from "../../helpers";
import useStore from "../../stores/store";

export default function ProfileScreen() {
    const setTokenStore = useStore(state => state.setToken);
    const handleLogout = async () => {
        await setToken("");
        setTokenStore("");
    };
    return (
        <View>
            <Text>This is Profile Screen</Text>
            <TouchableOpacity style={{paddingTop: 20}} onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
