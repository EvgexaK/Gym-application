import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Layout from '../constants/Layout';
import Title from '../components/Title';

const styles = StyleSheet.create({

});

class AccountPage extends React.Component {
  static navigationOptions = {
    title: 'Account Page',
  };

  render() {
    return (
      <ScrollView>
        <Title title="Account"/>
        <Text>Hello World</Text>
      </ScrollView>
    );
  }
}

export default AccountPage;

