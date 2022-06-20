import React, {useState, useRef, useCallback, useEffect} from "react";
import {View, Text} from "react-native";
import {pets as petsArray} from "../../assets/data";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import styles from "../../themes/screens/Home";
import {Animated, PanResponder} from "react-native";
import {ACTION_X_OFFSET, ACTION_Y_OFFSET, CARD} from "../../constants/Layout";
export default function HomeScreen() {
    const [pets, setPets] = useState(petsArray.reverse());
    const swipe = useRef(new Animated.ValueXY()).current;
    const tiltSign = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        if (!pets.length) {
            setPets(petsArray);
        }
    }, [pets.length]);

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
                }).start(removeTopCard);
            } else if (isActionYActive) {
                Animated.timing(swipe, {
                    duration: 200,
                    toValue: {
                        x: dx,
                        y: direction * CARD.OUT_OF_HEIGHT,
                    },
                    useNativeDriver: true,
                }).start(removeTopCard);
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

    const removeTopCard = useCallback(() => {
        setPets(prevState => prevState.slice(1));
        swipe.setValue({x: 0, y: 0});
    }, [swipe]);

    const handleChoice = useCallback(
        direction => {
            const swipeXY = direction ? swipe.x : swipe.y;
            direction = direction
                ? direction * CARD.OUT_OF_WIDTH
                : -1 * CARD.OUT_OF_HEIGHT;
            Animated.timing(swipeXY, {
                toValue: direction,
                duration: 400,
                useNativeDriver: true,
            }).start(removeTopCard);
        },
        [removeTopCard, swipe.y],
    );

    return (
        <View style={styles.container}>
            {pets
                .map(({name, age, source}, index) => {
                    const isFirst = index === 0;
                    const dragHandles = isFirst ? panResponder.panHandlers : {};
                    return (
                        <Card
                            key={name}
                            name={name}
                            age={age}
                            source={source}
                            isFirst={isFirst}
                            swipe={swipe}
                            tiltSign={tiltSign}
                            {...dragHandles}
                        />
                    );
                })
                .reverse()}
            <Footer handleChoice={handleChoice} />
        </View>
    );
}
