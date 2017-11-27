//import liraries
import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import AccountPage from "./main";
import Title from "../../components/Title";
import styles from "./styles";

import Register from './register';
import TabControl from './tab';

import pack from "../../package.json";
const Login = props => {
  const { handle, handleChange, handleFogot, tab } = props;
  return (tab==='register')
  ? <Register {...props} />
  : (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TabControl {...props} />
        <Text style={styles.title}>Wellcome</Text>
        <Text>Wellcome</Text>
        <TextInput
          style={styles.textInput}
          name="email"
          placeholder="Enter you email address."
          onChangeText={handleChange}
          value={props.username}
        />
        <TextInput
          style={styles.textInput}
          name="password"
          placeholder="Enter you password."
          onChangeText={handleChange}
        />
        <Button onPress={handle} title="Login" style={styles.activeButton} />
        <Text style={styles.textFogot} onPress={handleFogot}>
          fogot you password?
        </Text>
      </View>
    </View>
  );
};

// create a component
const Account = props => {
  return props.memberId ? <AccountPage /> : <Login {...props} />;
};

Account.propTypes = {
  handle: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleFogot: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handle: key => {
    switch (key) {
      case "login":
        return dispatch({ type: "LOGIN" });
      case "register":
        return dispatch({ type: "REGISTER" });
    }
  },
  handleChange: () => {},
  handleFogot: () => {}
});

export default connect(s => s.member, mapDispatchToProps)(Account);
