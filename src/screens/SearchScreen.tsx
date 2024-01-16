import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import AppHeader from '../component/AppHeader';
import {Poster} from '../assets/img';
import {Image} from 'react-native';
import {ScrollView} from 'react-native';
import {Home} from 'react-ionicons';
import HomeScreenItem from '../component/HomeScreenItem';
import {FlatList} from 'react-native';
import {useEffect, useState} from 'react';
import {SearchBar} from 'react-native-elements';
import {TextInput} from 'react-native';
import {Search} from '../assets/img';

// https://api.tvmaze.com/search/shows?q=${search_term}

const renderItem = ({item}) => (
  <View style={styles.carouselItem}>
    <Image
      source={{uri: item || 'fallback-image-url'}}
      style={{height: 300, width: 300}}
    />
  </View>
);

const Searchscreen = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showData, setShowData] = useState([]);
  const [topData, setTopData] = useState([]);
  const [remainingData, setRemainingData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://api.tvmaze.com/search/shows?q=all`);
      const data = await response.json();
      // console.log('Data fetched:', data[0].show);

      const topThree = data?.slice(0, 3).map(item => item?.show?.image?.medium); // Assuming the URL is in item.show.image.medium
      const remaining = data?.slice(3);

      setTopData(topThree);
      setRemainingData(remaining);
      setShowData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const fectchSearchResult = async () => {
    try {
      const response = await fetch(
        `https://api.tvmaze.com/search/shows?q=${searchText}`,
      );
      const data = await response.json();
      console.log('Data fetched:', data);
      setSearchResult(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (searchText) {
      fectchSearchResult();
    }
  }, [searchText]);

  const handleSearch = () => {
    // Implement search logic based on searchText
    // Update the data accordingly
    // For simplicity, let's filter data based on the show's name
    const filteredData = showData.filter(item =>
      item.show.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setRemainingData(filteredData);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#000000',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 16,
          marginRight: 36,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 0,
          },
        }}>
        <Image
          source={Search}
          style={{
            width: 20,
            height: 20,
            marginBottom: 16,
            marginLeft: 12,
            gap: 10,
          }}
        />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for a show"
          placeholderTextColor="gray"
          value={searchText}
          onChangeText={text => setSearchText(text)}
          onSubmitEditing={handleSearch}
        />
      </View>

      <ScrollView>
        <View style={styles.container}>
          {/* <Carousel
            data={topData}
            renderItem={renderItem}
            sliderWidth={300}
            itemWidth={300}
            layout="default"
            loop
            autoplay
            autoplayInterval={3000}
            lockScrollWhileSnapping
            inactiveSlideOpacity={0.5}
            inactiveSlideScale={0.8}
            onSnapToItem={index => setActiveSlide(index)}
          /> */}
          {/* <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlide}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.dot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        /> */}
        </View>
        <View style={{flexDirection: 'column', marginLeft: 10}}>
          <Text
            style={{
              color: '#ffffff',
              //   marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Home Screen
          </Text>
          <View style={{flexDirection: 'row'}}>
            <FlatList
              data={searchResult?.length > 0 ? searchResult : remainingData}
              // keyExtractor={item => item.id}
              renderItem={({item}) => (
                <HomeScreenItem flag={true} showData={item} />
              )}
              // horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* <View style={{flexDirection: 'column', marginLeft: 10}}>
          <Text
            style={{
              color: '#ffffff',
              marginTop: 20,
              fontSize: 20,
              fontWeight: 'bold',
            }}>
            Home Screen
          </Text>
          <View style={{flexDirection: 'row'}}>
            <FlatList
              data={searchResult?.length > 0 ? searchResult : remainingData}
              // keyExtractor={item => item.id}
              renderItem={({item}) => <HomeScreenItem showData={item} />}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  carouselItem: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightblue',
    height: 300,
  },
  paginationContainer: {
    // position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'blue',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    color: 'white',
    width: '100%',
    marginLeft: 12,
    // marginRight: 12,
    borderRadius: 10,
  },
});

export default Searchscreen;
