import {PixelRatio, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

export const widthPercentageToDP = (widthPercent: any) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return PixelRatio.getFontScale() >= 1
    ? PixelRatio.roundToNearestPixel((width * elemWidth) / 100)
    : Math.round(
        ((width * elemWidth) / 100) * Math.round(PixelRatio.getFontScale()),
      );
};

export const heightPercentageToDP = (heightPercent: any) => {
  const elemHeight =
    typeof heightPercent === 'number'
      ? heightPercent
      : parseFloat(heightPercent);
  return PixelRatio.getFontScale() >= 1
    ? PixelRatio.roundToNearestPixel((height * elemHeight) / 100)
    : Math.round(
        ((height * elemHeight) / 100) * Math.round(PixelRatio.getFontScale()),
      );
};

export const responsiveFontWidth = (widthPercent: number | string) => {
  const elemWidth =
    typeof widthPercent === 'number' ? widthPercent : parseFloat(widthPercent);
  return (
    PixelRatio.roundToNearestPixel((width * elemWidth) / 100) /
    PixelRatio.getFontScale()
  );
};
