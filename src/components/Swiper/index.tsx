import {AntDesign, Ionicons, MaterialIcons} from "@expo/vector-icons";
import {View, Text, TouchableOpacity} from "react-native";
import colors from "../../constants/Colors";
import styles from "../../themes/screens/Profile";
import Swiper from "react-native-swiper/src";
import {useState} from "react";
import {color} from "react-native-reanimated";
export default function SwiperSlide() {
    return (
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
                <View style={styles.slideHeader}>
                    <Ionicons
                        name="logo-web-component"
                        size={24}
                        color="black"
                    />
                    <Text style={[styles.text, {color: colors.black}]}>
                        Kmatch Platium
                    </Text>
                </View>
                <Text style={{marginBottom: 20}}>
                    Level every action you take on Kmatch.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textButton}>LEARN MORE</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.slide}>
                <View style={styles.slideHeader}>
                    <Ionicons
                        name="logo-web-component"
                        size={24}
                        color={colors.goldColor}
                    />
                    <Text style={[styles.text, {color: colors.goldColor}]}>
                        Kmatch Gold™
                    </Text>
                </View>
                <Text style={{marginBottom: 20}}>
                    See more friend on Kmatch.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text
                        style={[styles.textButton, {color: colors.goldColor}]}>
                        TEXT WHO LIKE YOU
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.slide}>
                <View style={styles.slideHeader}>
                    <Ionicons
                        name="logo-web-component"
                        size={24}
                        color={colors.redColor}
                    />
                    <Text style={[styles.text, {color: colors.redColor}]}>
                        Kmatch Plus®
                    </Text>
                </View>
                <Text style={{marginBottom: 20}}>
                    Get unlimited likes, free star, boots item and more.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.textButton, {color: colors.redColor}]}>
                        GET KMATCH PLUS®
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.slide}>
                <View style={styles.slideHeader}>
                    <AntDesign name="star" size={24} color={colors.superlike} />
                    <Text style={[styles.text, {color: colors.superlike}]}>
                        Super Like Star
                    </Text>
                </View>
                <Text style={{marginBottom: 20}}>
                    Get more star, you're 3x more likely to get a match.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text
                        style={[styles.textButton, {color: colors.superlike}]}>
                        GET MORE STAR
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.slide}>
                <View style={styles.slideHeader}>
                    <MaterialIcons name="bolt" size={30} color={colors.boots} />
                    <Text style={[styles.text, {color: colors.boots}]}>
                        Boots Item
                    </Text>
                </View>
                <Text style={{marginBottom: 20}}>
                    Be a top profile for 30 minutes to get more matches.
                </Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.textButton, {color: colors.boots}]}>
                        GO TO TOP NEWS FEED
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.slide}>
                <View style={styles.slideHeader}>
                    <Ionicons
                        name="logo-web-component"
                        size={24}
                        color={colors.redColor}
                    />
                    <Text style={[styles.text, {color: colors.black}]}>
                        Upgrade Your Love Life
                    </Text>
                </View>
                <View style={[styles.slideHeader, {marginBottom: 10}]}>
                    <View style={styles.roundIcon}>
                        <Ionicons
                            name="logo-web-component"
                            size={24}
                            color={colors.redColor}
                        />
                    </View>
                    <View style={styles.roundIcon}>
                        <Ionicons
                            name="logo-web-component"
                            size={24}
                            color={colors.goldColor}
                        />
                    </View>
                    <View style={styles.roundIcon}>
                        <Ionicons
                            name="logo-web-component"
                            size={24}
                            color={colors.black}
                        />
                    </View>
                    <View style={styles.roundIcon}>
                        <AntDesign
                            name="star"
                            size={24}
                            color={colors.superlike}
                        />
                    </View>
                    <View style={styles.roundIcon}>
                        <MaterialIcons
                            name="bolt"
                            size={24}
                            color={colors.boots}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={[styles.textButton, {color: colors.black}]}>
                        SEE ALL PLAN
                    </Text>
                </TouchableOpacity>
            </View>
        </Swiper>
    );
}
