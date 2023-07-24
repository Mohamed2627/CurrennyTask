import {TouchableOpacity, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Colors} from '../../constants';

const Button = ({containerStyle, textStyle, text, active, onPress}) => {
  return (
    <TouchableOpacity
      style={[
        styles.displaybutton,
        {backgroundColor: active ? Colors.primaryColor : 'white'},
        containerStyle,
      ]}
      onPress={onPress}>
      <Text
        style={[
          styles.displayText,
          {color: active ? 'white' : Colors.primaryColor},
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
