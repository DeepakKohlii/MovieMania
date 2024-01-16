/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import MyTabs from './src/AppStack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Homescreen from './src/screens/Homescreen';
import SearchScreen from './src/screens/SearchScreen';
import DetailScreen from './src/screens/DetailScreen';

import SplashScreen from 'react-native-splash-screen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): React.JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        tabBarStyle: {
          backgroundColor: '#393E46',
        },

        tabBarActiveTintColor: '#eeeeee',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: 'bold',
        },
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={StackNavigator}
        options={{tabBarLabel: 'Home'}}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{tabBarLabel: 'Search'}}
      />
    </Tab.Navigator>
  );
}
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Homescreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function App(): React.JSX.Element {
  return (
    // <GestureHandlerRootView style={{flex:1}}>
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
    // {/* </GestureHandlerRootView> */}
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
