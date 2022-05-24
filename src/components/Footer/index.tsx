import React from 'react';
import {View} from 'react-native';
import Colors from '../../constants/Colors';
import RoundButton from '../RoundButton';
import styles from '../../themes/components/Footer';

export default function Footer({handleChoice}) {
    return (
        <View style={styles.container}>
            <RoundButton
                name="times"
                size={40}
                color={Colors.nope}
                onPress={() => handleChoice(-1)}
            />
            <RoundButton
                name="heart"
                size={34}
                color={Colors.like}
                onPress={() => handleChoice(1)}
            />
        </View>
    );
}
