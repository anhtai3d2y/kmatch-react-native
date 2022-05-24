import React from 'react';
import {View, Text} from 'react-native';
import colors from '../../constants/Colors';
import styles from '../../themes/components/Choice';
export default function Choice({type}) {
    const color = colors[type];
    return (
        <View style={[styles.container, {borderColor: color}]}>
            <Text style={[styles.text, {color: color}]}>{type}</Text>
        </View>
    );
}
