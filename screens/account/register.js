import React, { Component } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Title from "../../components/Title";

import pack from "../../package.json";
import styles from "./styles";
import TabControl from "./tab";


const Register = props => {
  const { handle, handleChange, handleFogot, tab } = props;
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
          onChangeText={handleChange}
          value={props.username}
        />
        <TextInput
          style={styles.textInput}
          name="email"
          placeholder="Enter you email address."
          onChangeText={handleChange}
        />
        <TextInput
          style={styles.textInput}
          name="password"
          placeholder="Enter you password."
          onChangeText={handleChange}
        />
        <View style={styles.row}>
          <Text style={styles.label}>I am a:</Text>
          <Button title="Gay" style={styles.buttonActive} />
          <Button title="Girl" style={styles.buttonActive} />
        </View>
        <Text style={styles.title}>Ready?</Text>
        <Button onPress={handle} title="Yes!" style={styles.activeButton} />
      </View>
    </View>
  );
};

export default Register;
