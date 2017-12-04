import React from 'react';
import {
  AsyncStorage,
  Platform,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import RootNavigation from './navigation/RootNavigation';
import Firebase from './data/firebase';
import { Provider } from 'react-redux';
import store from './store';
import Exercise from './data/exercise';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };
  constructor(props) {
    super(props);
    this.fetchState();
  }

  fetchState = async () => {
    // await AsyncStorage.setItem('@Gyp-App:memberId','-L-0R6B96NDEnkANbNOp');
    const memberId = await AsyncStorage.getItem('@Gyp-App:memberId');
    if (memberId) {
      store.dispatch({ type: 'MEMBER_FETCH', payload: { memberId } });
    }
    const exercises = await Exercise.all();
    if (exercises) {
      store.dispatch({ type: 'EXERCISE_FETCH', payload: { items: exercises } });
    }
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            {Platform.OS === 'android' &&
              <View style={styles.statusBarUnderlay} />}
            <RootNavigation app={this.state} />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'Advent Pro': require('./assets/fonts/adventpro-medium.ttf'),
        'Advent Pro Regular': require('./assets/fonts/adventpro-regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2C94C',
  },
  statusBarUnderlay: {
    height: 24,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});
