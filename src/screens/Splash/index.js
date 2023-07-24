import {Text} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getAllCountries, getAllCurrencies} from '../../redux';
import {useNavigation} from '@react-navigation/native';
import {ScreenContainer} from '../../components';
import {styles} from './style';

const SplashScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  const getCountreis = async () => {
    try {
      await dispatch(getAllCountries()).unwrap();
    } catch (error) {
      console.log('countriesError', error);
    }
  };

  const getCurrencies = async () => {
    try {
      await dispatch(getAllCurrencies()).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountreis();
    getCurrencies();

    const timeOut = setTimeout(() => {
      navigate.replace('BottomTabNavigation');
    }, 2000);

    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  return (
    <ScreenContainer style={styles.sceenContainer}>
      <Text style={styles.text}>Currency App</Text>
    </ScreenContainer>
  );
};

export default SplashScreen;
