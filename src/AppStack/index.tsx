import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Homescreen from '../screens/Homescreen';
import SearchScreen from '../screens/SearchScreen';
import DetailScreen from '../screens/DetailScreen';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Movie Mania"
        component={Homescreen}
        options={{
          headerShown: false,
          headerStyle: {
            backgroundColor: '#393E46',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default MyTabs;
