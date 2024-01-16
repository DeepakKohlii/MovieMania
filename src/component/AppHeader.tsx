import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Search} from '../assets/img';
import {Searchhhhh} from '../assets/img';

const AppHeader = () => {
  const navigation = useNavigation();

  const handleSearchIconClick = () => {
    // Navigate to the SearchScreen
    navigation.navigate('SearchScreen');
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 16,
      }}>
      <Text
        style={{
          color: 'red',
          fontSize: 20,
          fontWeight: 'bold',
          backgroundColor: '#000000',
        }}>
        Movie Mania
      </Text>

      <TouchableOpacity onPress={handleSearchIconClick}>
        <Image source={Search} />
      </TouchableOpacity>
    </View>
  );
};

export default AppHeader;
