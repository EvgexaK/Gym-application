import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Layout from '../constants/Layout'
class SingleExerciseScreen extends Component {
  static navigationOptions = {
    title: 'Exercises',
  };
  render() {
    return (
      <ScrollView vertical>
        
        <TouchableOpacity style={{flex: 1}}
        onPress={() => this.props.navigation.navigate('ListOfExercises', { muscle: "body"})}>
        <Image style={styles.img} source={require('../assets/images/myBody.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}
        onPress={() => this.props.navigation.navigate('ListOfExercises', { muscle: "arm"})}>
        <Image style={styles.img} source={require('../assets/images/myArm.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}
        onPress={() => this.props.navigation.navigate('ListOfExercises', { muscle: "legs"})}>
        <Image style={styles.img} source={require('../assets/images/myLegs.png')} />
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 420,
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 16,
    marginRight: 16,
    marginBottom: 5,
    marginLeft: 30,
  },
  imageContainer: {
    padding: 8,
    flex: 1,
  },
  image: {
    width: 234,
    height: 234,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    width: 100,
  },
  img : {
    width: Layout.window.width,
    height: Layout.window.height * 0.30
  }
});

export default SingleExerciseScreen;
