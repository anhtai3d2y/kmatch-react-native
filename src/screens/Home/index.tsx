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

export default function HomeScreen() {
    const [users, setUsers] = useState([]);
    const userNewsFeed = useStore(state => state.userNewsFeed, shallow);
    const userProfile = useStore(state => state.userProfile, shallow);
    const getUserNewsFeed = useStore(state => state.getUserNewsFeed);
    const addLikeUser = useStore(state => state.addLikeUser);
    const getLikeUser = useStore(state => state.getLikeUser);
    const getDislikeUser = useStore(state => state.getDislikeUser);
    const getSuperlikeUser = useStore(state => state.getSuperlikeUser);
    const addDislikeUser = useStore(state => state.addDislikeUser);
    const addSuperlikeUser = useStore(state => state.addSuperlikeUser);
    const getUserProfile = useStore(state => state.getUserProfile);
    const reduceSuperlikeStar = useStore(state => state.reduceSuperlikeStar);
    const useBoots = useStore(state => state.useBoots);
    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;
    useEffect(() => {
        const getUser = async () => {
            if (!userProfile.genderShow) {
                const user = await getUserProfile();
                await getUserNewsFeed({
                    gender: user.genderShow,
                    minAge: user.minAge,
                    maxAge: user.maxAge,
                    distance: user.distance,
                });
            } else {
                await getUserNewsFeed({
                    gender: userProfile.genderShow,
                    minAge: userProfile.minAge,
                    maxAge: userProfile.maxAge,
                    distance: userProfile.distance,
                });
            }
        };

        if (!users.length) {
            getUser();
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
            const addLike = async (user: any) => {
                await addLikeUser(user._id);
                await getLikeUser();
            };

            setUsers(prevState => {
                const user = [...prevState][0];
                addLike(user);
                return prevState.slice(1);
            });
            swipe.setValue({x: 0, y: 0});
        },
        [swipe],
    );

    const removeTopCardDislike = useCallback(
        dx => {
            const addDislike = async (user: any) => {
                await addDislikeUser(user._id);
                await getDislikeUser();
            };
            setUsers(prevState => {
                const user = [...prevState][0];
                addDislike(user);
                return prevState.slice(1);
            });
            swipe.setValue({x: 0, y: 0});
        },
        [swipe],
    );

    const removeTopCardSuperLike = useCallback(() => {
        setUsers(prevState => {
            const addSuperlike = async (user: any) => {
                await addSuperlikeUser(user._id);
                await getSuperlikeUser();
            };
            const user = [...prevState][0];
            addSuperlike(user);
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

    const handleChoiceDislike = useCallback(
        direction => {
            const swipeXY = direction ? swipe.x : swipe.y;
            direction = direction
                ? direction * CARD.OUT_OF_WIDTH
                : -1 * CARD.OUT_OF_HEIGHT;
            Animated.timing(swipeXY, {
                toValue: direction,
                duration: 400,
                useNativeDriver: true,
            }).start(removeTopCardDislike);
        },
        [removeTopCardLike, swipe.y],
    );

    const handleChoiceSuperlike = useCallback(
        async direction => {
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
        getUserProfile();
        useBoots();
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
                .map((user: any, index) => {
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
                handleChoiceDislike={handleChoiceDislike}
                handleChoiceSuperlike={handleChoiceSuperlike}
                handleChoiceBoots={handleChoiceBoots}
            />
        </View>
    );
}
