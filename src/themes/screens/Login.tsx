import {StyleSheet} from 'react-native';
import {width} from '../../constants/Layout';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        width: width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Futura',
        fontSize: 50,
        color: '#fff',
        fontWeight: '700',
        position: 'absolute',
        top: 100,
    },
    kma: {
        color: '#612fc4',
        top: 102,
        left: 93,
        zIndex: 1,
    },
    match: {
        color: '#ccc',
        left: 130,
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonContainer: {
        marginTop: 100,
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'white',
        width: width - 50,
        padding: 15,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#fff',
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonOutline: {
        backgroundColor: 'rgba(0,0,0,0)',
        marginTop: 5,
        borderColor: '#fff',
        borderWidth: 2,
    },
    buttonText: {
        color: '#737373',
        fontWeight: '600',
        fontSize: 12,
    },
    buttonOutlineText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 12,
    },
});

export default styles;
