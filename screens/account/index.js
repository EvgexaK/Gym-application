//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from "react-redux";
import AccountPage from './main';
import Title from "../../components/Title";

import pack from "../../package.json";


const Login = props => {
  return (<View style={styles.container}>
    <View style={styles.formContainer}>
      <Text>Wellcome</Text>
    </View>
  </View>)
}


// create a component
const Account = (props) => {
  return props.memberId ? <AccountPage /> : <Login {...props}/>;
};

// define your styles
const radius = 32;
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
  formContainer: {
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
});

//make this component available to the app
export default connect(s => s.member)(Account);
