import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Colors, wp, hp} from '../constants';
import {IonIcon} from '../assets';
import LocationStack from './LocationStack';
import ChartStack from './ChartStack';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({focused, color, size}) => {
          let icon;
          if (route.name === 'location') {
            icon = focused ? (
              <IonIcon
                name="location"
                size={wp(10)}
                color={Colors.primaryColor}
              />
            ) : (
              <IonIcon
                name="location-outline"
                size={wp(10)}
                color={Colors.primaryColor}
              />
            );
          } else if (route.name === 'chart') {
            icon = focused ? (
              <IonIcon
                name="stats-chart"
                size={wp(10)}
                color={Colors.primaryColor}
              />
            ) : (
              <IonIcon
                name="stats-chart-outline"
                size={wp(10)}
                color={Colors.primaryColor}
              />
            );
          }
          return icon;
        },
        tabBarStyle: {
          height: hp(7),
          backgroundColor: 'white',
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      })}>
      <Tab.Screen name="location" component={LocationStack} />
      <Tab.Screen name="chart" component={ChartStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
