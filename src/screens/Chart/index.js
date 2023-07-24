import {Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  DropDown,
  HorizontalButtons,
  ScreenContainer,
} from '../../components';
import {styles} from './style';
import {useDispatch, useSelector} from 'react-redux';
import {LineChart, YAxis, Grid} from 'react-native-svg-charts';
import {getDate, setError} from '../../utils';
import {wp, Colors, hp} from '../../constants';
import {getLatestRate, getTimeSeries} from '../../redux';

const ChartScreen = () => {
  const dispatch = useDispatch();
  const btnsData = ['1D', '1M', '3M', '1Y', '5Y'];

  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('EUR');
  const [showChart, setShowChart] = useState(false);
  const [active, setActive] = useState('1D');

  const {allCurrencies, ratesData} = useSelector(state => state.currencies);

  const getLatest = async () => {
    if (from === to) {
      return setError('Choose different currencies');
    }
    try {
      setShowChart(true);
      const res = await dispatch(getLatestRate({from, to})).unwrap();
    } catch (error) {
      return setError(error);
    }
  };

  const handleChangeTime = async () => {
    if (from === to) {
      return setError('Choose different currencies');
    }
    try {
      const date = getDate(active);
      const res = await dispatch(getTimeSeries({date, from, to})).unwrap();
    } catch (error) {
      return setError(error);
    }
  };

  useEffect(() => {
    if (active === '1D') {
      getLatest();
    } else {
      handleChangeTime();
    }
  }, [active, from, to]);

  return (
    <ScreenContainer>
      <View style={styles.selectionContainer}>
        <Text style={styles.textTitle}> From: </Text>
        <DropDown
          data={allCurrencies}
          selectedValue={from}
          setSelectedValue={setFrom}
        />
        <Text style={styles.textTitle}> To: </Text>
        <DropDown
          data={allCurrencies}
          selectedValue={to}
          setSelectedValue={setTo}
        />
      </View>
      <Button text={'Display'} onPress={getLatest} active={true} />
      {showChart && (
        <>
          <View style={styles.chartContainer}>
            <View
              style={{
                height: hp(30),
                flexDirection: 'row',
              }}>
              <YAxis
                data={ratesData}
                contentInset={{top: hp(4), bottom: wp(4)}}
                svg={{
                  fontSize: 10,
                  fill: Colors.title,
                }}
                numberOfTicks={12}
                formatLabel={value => `${value} ${to}`}
              />
              <LineChart
                style={{flex: 1, marginLeft: 8}}
                data={ratesData}
                svg={{stroke: 'rgb(134, 65, 244)'}}
                contentInset={{top: hp(4), bottom: wp(4)}}>
                <Grid />
              </LineChart>
            </View>
          </View>
          <HorizontalButtons
            data={btnsData}
            onPressBtn={handleChangeTime}
            active={active}
            setActive={setActive}
          />
        </>
      )}
    </ScreenContainer>
  );
};

export default ChartScreen;
