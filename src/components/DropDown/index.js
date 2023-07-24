import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {styles} from './style';
import {IonIcon} from '../../assets';
import {Colors, wp} from '../../constants';
import {debounce} from '../../utils';

const DropDown = ({containerStyle, data, selectedValue, setSelectedValue}) => {
  const [toggle, setToggle] = useState(false);
  const limit = 40;
  const noOfPages = Math.ceil(data.length / limit);
  const [page, setPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data.slice(0, 40));
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);

  const onSelectValue = item => {
    setSelectedValue(item);
    setToggle(!toggle);
    setSearchInput('');
  };

  const onLoadMore = () => {
    setLoading(true);
    if (page < noOfPages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    // just for assurance
    if (page > 1 && page < noOfPages) {
      let newData = filteredData.slice((page - 1) * limit, page * limit);
      setFilteredData([...filteredData, ...newData]);
      setLoading(false);
    }
  }, [page]);

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelectValue(item)}>
      <Text style={styles.itemText}>{item}</Text>
    </TouchableOpacity>
  );

  useEffect(() => {
    const getSearchResults = debounce(() => {
      if (searchInput !== '') {
        const result = data.filter(item =>
          item.toLowerCase().includes(searchInput.toLowerCase()),
        );
        setFilteredData([...result]);
        setLoading(false);
      } else {
        setLoading(false);
        let newData = data.slice(0, 40);
        setFilteredData([...newData]);
        setPage(1);
      }
    }, 500);
    getSearchResults();
  }, [searchInput]);

  const renderFooter = () => {
    if (loading) {
      return <ActivityIndicator size="large" color={Colors.primaryColor} />;
    } else {
      return null;
    }
  };

  return (
    <View style={[styles.componentContainer, {containerStyle}]}>
      <TouchableOpacity
        style={styles.selectContainer}
        onPress={() => setToggle(!toggle)}>
        <Text style={styles.itemText}>{selectedValue}</Text>
        <IonIcon name="caret-down-outline" size={wp(4)} color="black" />
      </TouchableOpacity>
      {toggle && (
        <View style={styles.listContainer}>
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              onChangeText={setSearchInput}
              value={searchInput}
              placeholder={'Search'}
              editable
              maxLength={40}
            />
            <IonIcon name="search-outline" size={wp(7)} color="black" />
          </View>
          <FlatList
            data={filteredData}
            renderItem={renderItem}
            keyExtractor={(_, index) => index}
            onEndReached={onLoadMore}
            onEndReachedThreshold={0.5}
            ListFooterComponent={renderFooter}
            // Incase we will not use pagination
            // initialNumToRender={40}
            // maxToRenderPerBatch={40}
          />
        </View>
      )}
    </View>
  );
};

export default DropDown;
