import {FlatList, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style';
import Button from '../Button';
import {wp} from '../../constants';

const HorizontalButtons = ({data, onPressBtn, active, setActive}) => {
  // const data = Array(noOfBtns).fill(0).map((_, index) => index)
  // const [active, setActive] = useState('1D');

  const handleBtnPress = time => {
    setActive(time);
    if (active !== '1D') {
      onPressBtn();
    }
  };

  const renderItem = ({item, index}) => {
    return (
      <Button
        containerStyle={{marginHorizontal: wp(4)}}
        text={item}
        onPress={() => handleBtnPress(item)}
        active={item === active}
      />
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(_, index) => index}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default HorizontalButtons;
