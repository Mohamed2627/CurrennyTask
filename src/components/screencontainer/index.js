import {StatusBar, SafeAreaView} from 'react-native';
import React from 'react';
import {styles} from './styles';

const ScreenContainer = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <StatusBar
        translucent={false}
        hidden={false}
        barStyle="light-content"
        animated
        showHideTransition="fade"
      />
      <>{children}</>
    </SafeAreaView>
  );
};

export default ScreenContainer;
