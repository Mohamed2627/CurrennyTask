import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ChartScreen} from '../screens';

const Stack = createNativeStackNavigator();

const ChartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="ChartScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChartScreen" component={ChartScreen} />
    </Stack.Navigator>
  );
};

export default ChartStack;
