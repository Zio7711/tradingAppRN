import { Platform } from 'react-native';
import colors from './colors';

const defaultStyles = {
  colors,
  text: {
    fontSize: 18,
    color: colors.dark,
    width: '100%',
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Courier',
  },
};

export default defaultStyles;
