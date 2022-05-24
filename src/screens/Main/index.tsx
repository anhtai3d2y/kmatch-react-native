import React, {useState, useRef, useCallback, useEffect} from 'react';
import {View, Text} from '../../components/Themed';
import {pets as petsArray} from '../../assets/data';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import styles from '../../themes/screens/Main';
import {Animated, PanResponder} from 'react-native';
import {ACTION_OFFSET, CARD} from '../../constants/Layout';
export default function MainScreen() {
    const [pets, setPets] = useState(petsArray);
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
            const isActionActive = Math.abs(dx) > ACTION_OFFSET;

            if (isActionActive) {
                Animated.timing(swipe, {
                    duration: 200,
                    toValue: {
                        x: direction * CARD.OUT_OF_SCREEN,
                        y: dy,
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
            Animated.timing(swipe.x, {
                toValue: direction * CARD.OUT_OF_SCREEN,
                duration: 200,
                useNativeDriver: true,
            }).start(removeTopCard);
        },
        [removeTopCard, swipe.x],
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
