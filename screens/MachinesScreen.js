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
import ImageExercise from '../components/ImageExercise';
import InputTest from '../components/InputTest';

export default class ListOfExercises extends React.Component {
  static navigationOptions = {
    title: 'Machines',
  };
  constructor(props) {
    super(props);
    this.state = {
      m: [],
    };
    this.handlePress = this.handlePress.bind(this);
  }


  componentDidMount() {
    Database.getMachines((machines) => {
      this.setState({
        machines: Object.values(machines)
      })
    });
  }

  handlePress(name, desc, muscle, img) {
    // this.props.navigation.navigate('ExerciseItem', {
    //   name: name,
    //   desc: desc,
    //   muscle: muscle,
    //   img: img
    // });
    console.log(name, desc, muscle, img)
  }

  render() {
    const { navigate } = this.props.navigation;
    if(this.state.machines) {
    return (
      <ScrollView>
        <FlatList
          horizontal
          data={this.state.machines}
          renderItem={({ item }) => (
            <ImageExercise
              title={item.name}
              muscle={item.muscle}
              id={item.name}
              type={item.type}
              handlePress={() => {
                this.handlePress(item.name, item.desc, item.muscle, item.img);
              }}
              desc={item.desc}
              imageSource={item.img}
              color={'#F2C94C'}
            />
          )}
        />
      </ScrollView>
    ); }
    else {
      return (
        <View>
          <Text>Loading...</Text>
        </View>)
    }
  }
}

const styles = StyleSheet.create({});
