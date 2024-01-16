import React from 'react';
import {Image, View, Text, SafeAreaView, FlatList} from 'react-native';
import {Back, Poster} from '../assets/img';
import {useRoute} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {TouchableOpacity} from 'react-native';
import {Search} from '../assets/img';
import {useNavigation} from '@react-navigation/native';

const DetailScreen = ({}) => {
  const genresData = ['Action', 'Drama', 'Sci-Fi', 'Thriller', 'Adventure'];

  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const details = useRoute()?.params?.showData;

  console.log('details', details);

  const renderPlainTextFromHTML = htmlString => {
    const plainText = htmlString ? htmlString.replace(/<[^>]*>/g, '') : '';
    return plainText.slice();
  };

  return (
    <View style={{flex: 1, backgroundColor: '#000000', position: 'relative'}}>
      <TouchableOpacity
        style={{position: 'absolute', zIndex: 100, top: 45, left: 15}}
        onPress={handleBackPress}>
        <Image
          source={Back}
          style={{
            width: 20,
            height: 20,
            marginBottom: 16,
            marginLeft: 12,
            gap: 10,
          }}
        />
      </TouchableOpacity>
      <ScrollView style={{}}>
        <View style={{flexDirection: 'column'}}>
          <Image
            source={{uri: details?.show?.image?.medium}}
            style={{width: '100%', height: 550}}
            resizeMode="contain"
          />
          <View
            style={{
              marginLeft: 16,
              marginRight: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 10,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              {details?.show?.name || 'Movie Title'}
            </Text>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 16,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              {details?.show?.runtime || 'Movie Time'} mins
            </Text>
          </View>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              borderColor: '#ffffff',
              borderWidth: 1,
              padding: 5,
              width: 64,
              marginLeft: 16,
            }}>
            {details?.show?.rating?.average || 'NA'}
          </Text>

          {/* Genres */}
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '',
              padding: 10,
              marginTop: 10,
            }}>
            <FlatList
              horizontal
              data={details?.show?.genres}
              keyExtractor={item => item}
              renderItem={({item}) => (
                <View
                  style={{
                    backgroundColor: '#555555',
                    padding: 8,
                    borderRadius: 5,
                    marginRight: 8,
                  }}>
                  <Text style={{color: '#ffffff'}}>{item}</Text>
                </View>
              )}
              style={{marginBottom: 0}}
            />
          </View>

          {/* Description */}

          <View
            style={{
              flexDirection: 'column',
              marginTop: 10,
              marginLeft: 16,
              marginRight: 16,
            }}>
            <Text style={{color: '#ffffff', fontSize: 16, fontWeight: 'bold'}}>
              {renderPlainTextFromHTML(details?.show?.summary) ||
                'Movie Description'}
            </Text>
          </View>
          <View style={{height: 20}} />
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
