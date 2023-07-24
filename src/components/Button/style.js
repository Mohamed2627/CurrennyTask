import {StyleSheet} from 'react-native';
import {wp, hp, Colors} from '../../constants';

export const styles = StyleSheet.create({
  displaybutton: {
    backgroundColor: Colors.primaryColor,
    alignSelf: 'center',
    marginTop: hp(3),
    paddingVertical: wp(2),
    paddingHorizontal: wp(6),
    borderRadius: wp(4),
  },
  displayText: {
    color: 'white',
    fontSize: wp(5),
    fontWeight: 'bold',
  },
});
