import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Layout from '../constants/Layout';
import BlockBtn from '../components/block_btn';

export default class Library extends React.Component {
  static navigationOptions = {
    title: 'Library',
  };

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <BlockBtn
          label="EXERCISES"
          imageSource={require('../assets/images/exercises.png')}
          onPress={()=>navigate('SingleExercise', {name: 'Benchpress'})}
        />
        <BlockBtn
          label="MACHINES"
          imageSource={require('../assets/images/machines.png')}
          onPress={()=>navigate('SingleExercise', {name: 'Benchpress'})}
        />

      </ScrollView>
    );
  }
}

/*

        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() =>
            this.props.navigation.navigate('SingleExercise', {
              name: 'Benchpress',
            })}
        >
          <Image
            style={styles.img}
            source={require('../assets/images/exercises.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() =>
            this.props.navigation.navigate('Machines', { name: 'Benchpress' })}
        >
          <Image
            style={styles.img}
            source={require('../assets/images/machines.png')}
          />
        </TouchableOpacity>
 */

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: Layout.window.width,
    height: Layout.window.height * 0.46,
  },
});
