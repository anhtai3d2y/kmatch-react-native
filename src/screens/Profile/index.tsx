import {View, Text, TouchableOpacity} from "react-native";
import {setToken} from "../../helpers";
import useStore from "../../stores/store";

export default function ProfileScreen() {
    const setTokenStore = useStore(state => state.setToken);
    const getUser = useStore(state => state.getUser);
    const handleLogout = async () => {
        await setToken("");
        setTokenStore("");
    };

    const handleGetUser = async () => {
        await getUser();
    };
    return (
        <View>
            <Text>This is Profile Screen</Text>
            <TouchableOpacity style={{paddingTop: 50}} onPress={handleGetUser}>
                <Text style={{fontSize: 30}}>Get user</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{paddingTop: 50}} onPress={handleLogout}>
                <Text style={{fontSize: 30}}>Logout</Text>
            </TouchableOpacity>
        </View>
    );
}
