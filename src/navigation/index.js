import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './MainStackNavigator';

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
