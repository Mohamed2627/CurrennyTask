import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNavigation from './BottomTabNavigation';
import {SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="BottomTabNavigation"
        component={BottomTabNavigation}
      />
      <Stack.Screen name="splash" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
