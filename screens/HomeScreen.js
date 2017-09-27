import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Layout from '../constants/Layout';

// Importing Menu Item components that we have created
import MenuItem from '../components/MenuItem';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
   title: "Home"
  };

  render() {
    return (
      <ScrollView style={{flexDirection: 'column'}}>

         <View style={{height: 300, flexDirection: 'row'}}>
            <MenuItem name={"Muscle"} 
            image={require('../assets/images/exercises.jpg')}/>
            <MenuItem name={"Program"}/>
         </View>

         <View style={{height: 300, flexDirection: 'row'}}>
            <MenuItem name={"Exercise"}/>
            <MenuItem name={"Hellow"}/>
        </View>

        <View style={{height: 300, flexDirection: 'row'}}>
            <MenuItem name={"Works"}/>
            <MenuItem name={"Trainer"}/>
        </View>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});
