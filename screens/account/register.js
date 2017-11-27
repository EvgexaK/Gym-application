import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Title from "../../components/Title";

import pack from "../../package.json";
import styles from "./styles";
import TabControl from "./tab";

import Members from "../../data/members";


const Register = props => {
  const { handle, handleChange, handleForgot, tab, handleRegister } = props;
  const { name, email } = props.fields;
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <TabControl {...props} />
        <Text style={styles.title}>Hello!</Text>
        <Text style={styles.sub}>we just need know somthing about you</Text>
        <TextInput
          style={styles.textInput}
          name="name"
          placeholder="How can I call you?"
          onChangeText={value => handleChange({ value, name: "name" })}
          value={name}
        />
        <TextInput
          style={styles.textInput}
          name="email"
          placeholder="Enter you email address."
          onChangeText={value => handleChange({ value, name: "email" })}
          value={email}
        />
        <TextInput
          style={styles.textInput}
          name="password"
          placeholder="Enter you password."
          onChangeText={value => handleChange({ value, name: "password" })}
        />
        <View style={styles.row}>
          <Text style={styles.label}>I am a:</Text>
          <Button
            onPress={props.handleBoy}
            title="Man"
            style={styles.buttonActive}
          />
          <Button
            onPress={props.handleGirl}
            title="Woman"
            style={styles.buttonActive}
          />
        </View>
        <Text style={styles.title}>Ready?</Text>
        <Button
          onPress={handleRegister(props.fields)}
          title="Yes!"
          style={styles.activeButton}
        />
      </View>
    </View>
  );
};

Register.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBoy: PropTypes.func.isRequired,
  handleGirl: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: ({ name, value }) =>
    dispatch({ type: "MEMBER_UPDATE", payload: { [name]: value } }),
  handleBoy: () => dispatch({ type: "MEMBER_UPDATE", payload: { sex: "m" } }),
  handleGirl: () => dispatch({ type: "MEMBER_UPDATE", payload: { sex: "f" } }),
  handleRegister: fields => async () => {
    if (!fields.email || !fields.name || !fields.password) return;
    const member = Members.create(fields);
    console.log("====================================");
    console.log(member);
    console.log("====================================");
  }
});
export default connect(s => s.member, mapDispatchToProps)(Register);
