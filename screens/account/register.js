//import liraries
import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import Title from "../../components/Title";

import pack from "../../package.json";
import styles from "./styles";

const handle = e => {
  console.log(e);
};
const handleChange = text => {
  console.log(this, text);
};

// create a component
class Register extends Component {
  render() {
    return <View style={styles.container}>
        <View style={styles.formContainer}>
          <View style={styles.row}>
            <Button onPress={handle} title="Login" style={styles.button} />
            <Button onPress={handle} title="Register" style={styles.activeButton} />
          </View>
          <Text style={styles.title}>Hello!</Text>
          <Text style={styles.sub}>
            we just need know somthing about you
          </Text>
          <TextInput style={styles.textInput} name="name" placeholder="How can I call you?" onChangeText={handleChange} value={props.username} />
          <TextInput style={styles.textInput} name="email" placeholder="Enter you email address." onChangeText={handleChange} />
          <TextInput style={styles.textInput} name="password" placeholder="Enter you password." onChangeText={handleChange} />
          <View style={styles.row}>
            <Text style={styles.label}>I am a:</Text>
            <Button title="Gay" style={styles.buttonActive} />
            <Button title="Girl" style={styles.buttonActive} />
          </View>
          <Text style={styles.title}>Ready?</Text>
          <Button onPress={handle} title="Yes!" style={styles.activeButton} />
        </View>
      </View>;
  }
}

export default Register;
