import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Layout from '../constants/Layout';


export default class AccountPage extends React.Component {
  static navigationOptions = {
   title: "Account Page",
  };

  render() {
    return (
      <ScrollView>
            <Text>Hello World</Text>
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});