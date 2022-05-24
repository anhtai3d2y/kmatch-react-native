import {StyleSheet} from 'react-native';
import {height, width} from '../../constants/Layout';

const styles = StyleSheet.create({
    container: {
        height: height,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Futura',
        marginTop: 40,
        color: '#000',
        fontSize: 46,
    },
    input: {
        color: 'black',
        fontSize: 24,
        width: width - 60,
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderColor: '#000',
        borderBottomWidth: 2,
        marginTop: 10,
    },
    button: {
        width: width - 50,
        padding: 15,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: 'black',
        fontWeight: '600',
        fontSize: 12,
    },
    linearGradient: {
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
