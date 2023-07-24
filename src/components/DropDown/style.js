import {StyleSheet} from 'react-native';
import {hp, wp} from '../../constants';

export const styles = StyleSheet.create({
  componentContainer: {
    alignItems: 'center',
  },
  selectContainer: {
    flexDirection: 'row',
    marginTop: hp(2),
    padding: wp(3),
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: wp(0.3),
  },
  itemContainer: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1.5),
    alignItems: 'center',
    borderBottomWidth: wp(0.1),
    width: wp(70),
    borderBottomColor: 'grey',
    alignSelf: 'center',
  },
  itemText: {
    fontSize: wp(4.5),
    fontWeight: 'bold',
    color: 'black',
  },
  listContainer: {
    height: hp(80),
    width: wp(80),
    borderWidth: wp(0.3),
    marginTop: hp(0.5),
    // position: 'absolute',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(75),
    borderWidth: wp(0.3),
    alignSelf: 'center',
    marginTop: hp(1),
    paddingHorizontal: wp(3),
  },
  searchInput: {
    flex: 1,
    fontSize: wp(5),
    color: 'black',
    fontWeight: '400',
  },
});
