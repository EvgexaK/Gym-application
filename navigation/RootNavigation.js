import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import registerForPushNotificationsAsync
  from '../api/registerForPushNotificationsAsync';

import EquipmentsScreen from '../screens/equipment/equipments';
import EquipmentScreen from '../screens/equipment/equipment';

import ExerciseGroupsScreen from '../screens/exercise/index';
import ExercisesScreen from '../screens/exercise/exercises';
import ExerciseScreen from '../screens/exercise/exercise';

import AccountScreen from '../screens/account/index';
import TestScreen from '../screens/account/edit';

import ExerciseItem from '../components/ExerciseItem';
const RootStackNavigator = StackNavigator(
  {
     //Test: { screen: TestScreen },
    Main: {
      screen: MainTabNavigator,
    },
    ExerciseGroups: {
      screen: ExerciseGroupsScreen,
    },
    Exercises: {
      screen: ExercisesScreen,
    },
    Exercise: {
      screen: ExerciseScreen,
    },
    Equipments: {
      screen: EquipmentsScreen,
    },
    Equipment: {
      screen: EquipmentScreen,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator {...this.props} />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}
