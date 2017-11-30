import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
} from 'react-native';
import Layout from '../constants/Layout';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import ImageExercise1 from '../components/ImageExercise1';
import InputTest from '../components/InputTest';


const remote = 'https://s15.postimg.org/tw2qkvmcb/400px.png';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  handlePress() {
    // console.log('1234567');
  }

  constructor(props) {
    super(props);
    this.state = {
      exercises: [{ name: '1' }, { type: '2' }],
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView vertical>
        <ImageExercise1
          handlePress={() =>
            this.props.navigation.navigate('SingleExercise', {
              name: 'Benchpress',
            })}
          imageSource={require('../assets/images/start.png')}
          color={'#333333'}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#F2C94C',
  },
});

export default connect(s => s.member) (HomeScreen);
