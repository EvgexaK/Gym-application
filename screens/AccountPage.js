import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Layout from '../constants/Layout';
import Title from '../components/Title';

class AccountPage extends React.Component {
  static navigationOptions = {
    title: 'Account Page',
  };

  render() {
    return (
      <ScrollView>
        <Title title="Account"/>
        <View style={styles.column}>
          <View style={styles.box} >
            <Text style={styles.textLabel} >left</Text>
          </View>
          <View style={styles.box} >
            <Text style={styles.textLabel} >right</Text>
          </View>
        </View>
        <Text>Hello World</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  column: {
    flexDirection: 'row',
    height: 50,
  },
  box: {
    height: 50,
    width: '50%',
    backgroundColor: 'black',
  },
  textLabel: {
    color: 'white',
    textAlign: 'center',
  },
});


export default AccountPage;

