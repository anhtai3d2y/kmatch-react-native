import React, {useState, useRef, useCallback, useEffect} from "react";
import {View, Text, Image} from "react-native";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import styles from "../../themes/screens/Home";
import {Animated, PanResponder} from "react-native";
import {ACTION_X_OFFSET, ACTION_Y_OFFSET, CARD} from "../../constants/Layout";
import TinyLogo from "../../components/TinyLogo";
import useStore from "../../stores/store";
import shallow from "zustand/shallow";
import {ActivityIndicator} from "react-native-paper";
import colors from "../../constants/Colors";
import PulseLoading from "../../components/PulseLoading";
import * as Location from "expo-location";

export default function HomeScreen() {
    const [users, setUsers] = useState([]);
    const userNewsFeed = useStore(state => state.userNewsFeed, shallow);
    const getUserNewsFeed = useStore(state => state.getUserNewsFeed);
    const addLikeUser = useStore(state => state.addLikeUser);
    const addDislikeUser = useStore(state => state.addDislikeUser);
    const addSuperlikeUser = useStore(state => state.addSuperlikeUser);
    const reduceSuperlikeStar = useStore(state => state.reduceSuperlikeStar);
    const userProfile = useStore(state => state.userProfile, shallow);
    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        if (!users.length) {
            getUserNewsFeed({
                gender: "Both",
                minAge: 16,
                maxAge: 30,
                distance: 100,
            });
        }
    }, [users.length]);

    useEffect(() => {
        setUsers(userNewsFeed);
    }, [userNewsFeed]);
    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: (_, {dx, dy, y0}) => {
            swipe.setValue({x: dx, y: dy});
            tiltSign.setValue(y0 > CARD.HEIGHT / 2 ? 1 : -1);
        },
        onPanResponderRelease: (_, {dx, dy}) => {
            const direction = Math.sign(dx);
            const isActionXActive = Math.abs(dx) > ACTION_X_OFFSET;
            const isActionYActive = Math.abs(dy) > ACTION_Y_OFFSET;

            if (isActionXActive) {
                Animated.timing(swipe, {
                    duration: 200,
                    toValue: {
                        x: direction * CARD.OUT_OF_WIDTH,
                        y: dy,
                    },
                    useNativeDriver: true,
                }).start(() => removeTopCardLike(dx));
            } else if (isActionYActive && dy < 0) {
                Animated.timing(swipe, {
                    duration: 200,
                    toValue: {
                        x: dx,
                        y: direction * CARD.OUT_OF_HEIGHT,
                    },
                    useNativeDriver: true,
                }).start(removeTopCardSuperLike);
            } else {
                Animated.spring(swipe, {
                    toValue: {
                        x: 0,
                        y: 0,
                    },
                    useNativeDriver: true,
                    friction: 5,
                }).start();
            }
        },
    });
    const removeTopCardLike = useCallback(
        dx => {
            if (users.length > 0) {
                setUsers(prevState => {
                    const user = [...prevState][0];
                    if (dx > 0) {
                        addLikeUser(user._id);
                    } else {
                        addDislikeUser(user._id);
                    }
                    return prevState.slice(1);
                });
                swipe.setValue({x: 0, y: 0});
            }
        },
        [swipe],
    );

    const removeTopCardSuperLike = useCallback(() => {
        setUsers(prevState => {
            const user = [...prevState][0];
            addSuperlikeUser(user._id);
            reduceSuperlikeStar();
            return prevState.slice(1);
        });
        swipe.setValue({x: 0, y: 0});
    }, [swipe]);

    const handleChoiceLike = useCallback(
        direction => {
            const swipeXY = direction ? swipe.x : swipe.y;
            direction = direction
                ? direction * CARD.OUT_OF_WIDTH
                : -1 * CARD.OUT_OF_HEIGHT;
            Animated.timing(swipeXY, {
                toValue: direction,
                duration: 400,
                useNativeDriver: true,
            }).start(removeTopCardLike);
        },
        [removeTopCardLike, swipe.y],
    );

    const handleChoiceSuperlike = useCallback(
        direction => {
            const swipeXY = direction ? swipe.x : swipe.y;
            direction = direction
                ? direction * CARD.OUT_OF_WIDTH
                : -1 * CARD.OUT_OF_HEIGHT;
            Animated.timing(swipeXY, {
                toValue: direction,
                duration: 400,
                useNativeDriver: true,
            }).start(removeTopCardSuperLike);
        },
        [removeTopCardSuperLike, swipe.y],
    );

    const handleChoiceBoots = () => {
        console.log("boots");
    };
    return (
        <View style={styles.container}>
            <TinyLogo />
            <ActivityIndicator
                size="large"
                color={colors.redColor}
                style={styles.loading}
            />
            {users
                .map((user, index) => {
                    const isFirst = index === 0;
                    const dragHandles = isFirst ? panResponder.panHandlers : {};
                    return (
                        <Card
                            key={user._id}
                            name={user.name}
                            age={user.age}
                            distance={user.distance}
                            source={user.avatar.secureURL}
                            isFirst={isFirst}
                            swipe={swipe}
                            tiltSign={tiltSign}
                            {...dragHandles}
                        />
                    );
                })
                .reverse()}
            <Footer
                handleChoiceLike={handleChoiceLike}
                handleChoiceSuperlike={handleChoiceSuperlike}
                handleChoiceBoots={handleChoiceBoots}
                starAmount={userProfile.starAmount}
                bootsAmount={userProfile.bootsAmount}
            />
        </View>
    );
}
