import {useState} from "react";
import * as Location from "expo-location";

const [location, setLocation] = useState("location");

const handleGetLocation = async () => {
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
        setLocation("Permission to access location was denied");
    }

    let location = await Location.getCurrentPositionAsync({});

    setLocation(location.coords.latitude + ", " + location.coords.longitude);
};
