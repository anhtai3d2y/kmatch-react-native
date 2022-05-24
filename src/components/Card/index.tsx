import {LinearGradient} from 'expo-linear-gradient';
import React, {useCallback} from 'react';
import {Image, View, Text, Animated} from 'react-native';
import {ACTION_OFFSET} from '../../constants/Layout';
import styles from '../../themes/components/Card';
import Choice from '../Choice';

export default function Card({
    name,
    age,
    source,
    isFirst,
    swipe,
    tiltSign,
    ...rest
}) {
    const rotate = Animated.multiply(swipe.x, tiltSign).interpolate({
        inputRange: [-ACTION_OFFSET, 0, ACTION_OFFSET],
        outputRange: ['8deg', '0deg', '-8deg'],
    });

    const likeOpacity = swipe.x.interpolate({
        inputRange: [25, ACTION_OFFSET],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    const nopeOpacity = swipe.x.interpolate({
        inputRange: [-ACTION_OFFSET, -25],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const animatedCardStyle = {
        transform: [...swipe.getTranslateTransform(), {rotate}],
    };

    const renderChoice = useCallback(() => {
        return (
            <>
                <Animated.View
                    style={[
                        styles.choiceContainer,
                        styles.likeContainer,
                        {opacity: likeOpacity},
                    ]}>
                    <Choice type="like" />
                </Animated.View>
                <Animated.View
                    style={[
                        styles.choiceContainer,
                        styles.nopeContainer,
                        {opacity: nopeOpacity},
                    ]}>
                    <Choice type="nope" />
                </Animated.View>
                {/* <View
                    style={[styles.choiceContainer, styles.superLikeContainer]}>
                    <Choice type="SUPER LIKE" />
                </View> */}
            </>
        );
    }, [likeOpacity, nopeOpacity]);

    return (
        <Animated.View
            style={[styles.container, isFirst && animatedCardStyle]}
            {...rest}>
            <Image source={source} style={styles.image} />
            <LinearGradient
                colors={['transparent', 'rgba(0,0,0,0.9)']}
                style={styles.gradient}
            />
            <Text style={styles.name}>
                {name}, {age}
            </Text>
            {isFirst && renderChoice()}
        </Animated.View>
    );
}

// import React from 'react';
// import {View, Text, Image, ImageSourcePropType} from 'react-native';
// import {shape, string, number} from 'prop-types';
// import styles from '../../themes/components/Card';
// const Card = ({card}) => (
//   <View activeOpacity={1} style={styles.card}>
//     <Image style={styles.image} source={card.photo} resizeMode="cover" />
//     <View style={styles.photoDescriptionContainer}>
//       <Text style={styles.text}>{`${card.name}, ${card.age}`}</Text>
//     </View>
//   </View>
// );

// Card.propTypes = {
//   card: shape({
//     photo: ImageSourcePropType,
//     name: string,
//     age: number,
//   }).isRequired,
// };
// export default Card;
