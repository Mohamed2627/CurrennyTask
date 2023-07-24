import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LocationScreen} from '../screens';

const Stack = createNativeStackNavigator();

const LocationStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LocationScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LocationScreen" component={LocationScreen} />
    </Stack.Navigator>
  );
};

export default LocationStack;
