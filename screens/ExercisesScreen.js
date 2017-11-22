import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  FlatList,
} from 'react-native';
import Layout from '../constants/Layout';
import Database from '../api/database';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';

export default class ExerciseScreen extends React.Component {
  static navigationOptions = {
   title: "Exercises",
  };
  constructor(props){
    super(props);
    this.state = {
      exercises: []
    }
    this.handlePress = this.handlePress.bind(this)
  }

  componentDidMount() {
    Database.getExercises( (exercises) => {
      this.setState({
        exercises: exercises
      })
    });
  }

  handlePress(name, description, type) {
    console.log(type)
    this.props.navigation.navigate('SingleExercise', {name: name, description: description, type: type})
  }


  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <FlatList
        horizontal
          data={Object.values(this.state.exercises)}
          renderItem={({item}) =>
          <ImageExercise
            title={item.name}
            id={item.name}
            type={item.type}
            handlePress={() => {this.handlePress(item.name, item.description, item.type)}}
            description={item.description}
            imageSource={item.img}
            color={"#F2C94C"}/>}
          />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});