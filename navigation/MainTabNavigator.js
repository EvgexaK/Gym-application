import React from 'react';
import { Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ExerciseScreen from '../screens/ExerciseScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Links: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    Exercise: {
      screen: ExerciseScreen,
    },

  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = require('../assets/icons/Home.png'),
            focusedIconName =  require('../assets/icons/HomeC.png')
            break;
          case 'Links':
            iconName = require('../assets/icons/Gym.png'),
            focusedIconName =  require('../assets/icons/GymC.png')
            break;
          case 'Settings':
            iconName = require('../assets/icons/Map.png'),
            focusedIconName =  require('../assets/icons/MapC.png')
            break;
          case 'Exercise':
            iconName = require('../assets/icons/Account.png'),
            focusedIconName =  require('../assets/icons/AccountC.png')
        }
        return (
          <Image
            style={{ width: 23, height: 23, resizeMode: 'contain' }}
            source={focused ? focusedIconName : iconName}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: { showLabel: false},
    animationEnabled: false,
    swipeEnabled: false,
  }
);