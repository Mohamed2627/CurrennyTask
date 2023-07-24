import {Text, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './style';
import {DropDown, ScreenContainer} from '../../components';
import {useSelector} from 'react-redux';
import notifee from '@notifee/react-native';

const LocationScreen = () => {
  const {allCountriesNames} = useSelector(state => state.countries);
  const [country, setCountry] = useState('Egypt');

  const getNotifcationsPermission = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();
  };

  const onDisplayNotification = async () => {
    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });
    // Display a notification
    await notifee.displayNotification({
      title: 'Currency App',
      body: 'Hello from Currency App',
      android: {
        channelId,
        smallIcon: 'ic_launcher', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  useEffect(() => {
    getNotifcationsPermission();
    // just test: push one notification every 5 min
    const intervalId = setInterval(() => {
      onDisplayNotification();
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <ScreenContainer style={styles.screenContainer}>
      <DropDown
        data={allCountriesNames}
        selectedValue={country}
        setSelectedValue={setCountry}
      />
    </ScreenContainer>
  );
};

export default LocationScreen;
