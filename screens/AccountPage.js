import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Layout from '../constants/Layout';

const styles = StyleSheet.create({});

class AccountPage extends React.Component {
  static navigationOptions = {
    title: 'Account Page',
  };

  render() {
    return (
      <ScrollView>
        <Text>Hello World</Text>
      </ScrollView>
    );
  }
}

export default AccountPage;
