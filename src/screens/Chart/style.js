import {StyleSheet} from 'react-native';
import {Colors, hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  selectionContainer: {
    alignItems: 'center',
  },
  textTitle: {
    fontSize: wp(4),
    color: Colors.title,
    fontWeight: '600',
    marginTop: hp(2),
  },
  displaybutton: {
    backgroundColor: Colors.primaryColor,
    alignSelf: 'center',
    marginVertical: hp(3),
    paddingVertical: wp(4),
    paddingHorizontal: wp(8),
    borderRadius: wp(4),
  },
  chartContainer: {
    padding: wp(4),
  },
});
