import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import DetailScreen from '../screens/DetailScreen';
import {Poster} from '../assets/img';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const HomeScreenItem = ({showData, flag}: {showData: any; flag: boolean}) => {
  const navigation = useNavigation();

  const renderPlainTextFromHTML = (htmlString, maxLength) => {
    const plainText = htmlString ? htmlString.replace(/<[^>]*>/g, '') : '';
    return plainText.slice(0, maxLength);
  };

  const handleItemClick = () => {
    // Navigate to detail screen with the showData or any specific ID
    navigation.navigate('Detail', {showData});
  };

  return (
    <TouchableOpacity onPress={handleItemClick}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            flexDirection: 'column',
            marginTop: 12,
            marginRight: 12,
          }}>
          <Image
            source={{
              uri: showData?.show?.image?.medium || Poster,
            }}
            style={{width: flag ? width : 180, height: 120}}
          />
          <View style={{flexDirection: 'column'}}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              {showData?.show?.name || 'Movie Title'}
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 12,
                marginTop: 3,
                maxWidth: flag ? width : 180,
                marginBottom: flag ? 25 : 10,
              }}>
              {renderPlainTextFromHTML(showData?.show?.summary, 55) ||
                'Movie Description'}
            </Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeScreenItem;
