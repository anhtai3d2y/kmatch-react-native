import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../constants/Colors';
import {CARD} from '../../constants/Layout';
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 45,
    },
    image: {
        width: CARD.WIDTH,
        height: CARD.HEIGHT,
        borderRadius: CARD.BORDER_RADIUS,
    },
    gradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 160,
        borderRadius: CARD.BORDER_RADIUS,
    },
    name: {
        position: 'absolute',
        bottom: 22,
        left: 22,
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    choiceContainer: {
        position: 'absolute',
        top: 100,
    },
    likeContainer: {
        left: 45,
        transform: [{rotate: '-30deg'}],
    },
    nopeContainer: {
        right: 45,
        transform: [{rotate: '30deg'}],
    },
    superLikeContainer: {
        bottom: 45,
        right: 45,
    },

    // card: {
    //   /* Setting the height according to the screen height, it also could be fixed value or based on percentage. In this example, this worked well on Android and iOS. */
    //   height: height - 300,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: colors.white,
    //   borderRadius: 5,
    //   shadowColor: colors.black,
    //   shadowOffset: {
    //     width: 0,
    //     height: 2,
    //   },
    //   shadowRadius: 6,
    //   shadowOpacity: 0.3,
    //   elevation: 2,
    // },
    // image: {
    //   borderRadius: 5,
    //   flex: 1,
    //   width: '100%',
    // },
    // photoDescriptionContainer: {
    //   justifyContent: 'flex-end',
    //   alignItems: 'flex-start',
    //   flexDirection: 'column',
    //   height: '100%',
    //   position: 'absolute',
    //   left: 10,
    //   bottom: 10,
    // },
    // text: {
    //   textAlign: 'center',
    //   fontSize: 20,
    //   color: colors.white,
    //   fontFamily: 'Avenir',
    //   textShadowColor: colors.black,
    //   textShadowRadius: 10,
    // },
});

export default styles;
