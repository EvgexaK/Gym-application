//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import { connect } from "react-redux";
import AccountPage from "./main";
import Title from "../../components/Title";
import styles from "./styles";

import pack from "../../package.json";

const handle = e => {
  console.log(e);
};
const handleChange = text => {
  console.log(this, text);
};

const handleFogot = () => {
  console.log("fogot");
};

const Login = props => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.row}>
          <Button onPress={handle} title="Login" style={styles.activeButton} />
          <Button onPress={handle} title="Register" style={styles.button} />
        </View>
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

export default connect(s => s.member)(Account);
