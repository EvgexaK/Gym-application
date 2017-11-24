import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Layout from '../constants/Layout';
import { backgroundColor } from '../constants/Colors';
import {titleText} from '../constants/Fonts';

// console.log(backgroundColor);

const styles = StyleSheet.create({
  titleText,
});

class AccountPage extends React.Component {
  static navigationOptions = {
    title: 'Account Page',
  };

  render() {
    return (
      <ScrollView>
        <View
          style={{ width: '100%', height: 50, backgroundColor}}
        >
          <Text style={styles.titleText}>Account</Text>
        </View>
        <Text>Hello World</Text>
      </ScrollView>
    );
  }
}

export default AccountPage;

