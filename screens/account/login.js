import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { AsyncStorage, View, Text, TextInput, StyleSheet } from "react-native";
import Button from "react-native-button";

import styles from "./styles";
//          {/*onChangeText={handleChange}*/}
//          onPress={handle}

const Login = props => {
  return (
    <View>
      <Text style={styles.textTitle}>Wellcome</Text>
      <TextInput
        style={styles.textInput}
        name="email"
        placeholder="Enter you email address."
        value={props.username}
      />
      <TextInput
        style={styles.textInput}
        name="password"
        placeholder="Enter you password."
      />

      <Button
        containerStyle={{
          marginTop: 16,
          marginLeft: 32,
          marginRight: 32,
          padding: 8,
          // height: 28,
          overflow: "hidden",
          borderRadius: 14,
          backgroundColor: "#E9B52F"
        }}
        style={{
          fontSize: 16,
          color: "#000"
        }}
      >
        Login
      </Button>
    </View>
  );
};

Login.propTypes = {};

export default connect()(Login);
