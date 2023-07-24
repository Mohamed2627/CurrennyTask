import {StyleSheet} from 'react-native';
import {Colors, wp} from '../../constants';

export const styles = StyleSheet.create({
  sceenContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp(5),
  },
  text: {
    fontSize: wp(10),
    color: Colors.primaryColor,
    fontWeight: 'bold',
  },
});
