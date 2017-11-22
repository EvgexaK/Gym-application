import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import Layout from '../constants/Layout'
export default class Library extends React.Component {
  static navigationOptions = {
    title: 'Library',
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={{flex: 1}}
        onPress={() => this.props.navigation.navigate('ExercisesScreen', { name: "Benchpress"})}>
        <Image style={styles.img} source={require('../assets/images/exercises.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}
        onPress={() => this.props.navigation.navigate('SingleExercise', { name: "Benchpress"})}>
        <Image style={styles.img} source={require('../assets/images/machines.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  img : {
    width: Layout.window.width,
    height: Layout.window.height * 0.45
  }
});
