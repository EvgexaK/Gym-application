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
      <View style={{flex: 1, flexDirection: 'column'}}>

         <View style={{flex: 1, flexDirection: 'row'}}>
            <MenuItem name={"Muscle"} />
            <MenuItem name={"Program"}/>
         </View>

         <View style={{flex: 1, flexDirection: 'row'}}>
            <MenuItem name={"Exercise"}/>
            <MenuItem name={"Hellow"}/>
        </View>

        <View style={{flex: 1, flexDirection: 'row'}}>
            <MenuItem name={"Works"}/>
            <MenuItem name={"Trainer"}/>
        </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({

});
