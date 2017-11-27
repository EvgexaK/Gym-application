//import liraries
import React, { Component } from 'react';
import { View, Button } from 'react-native';
import styles from "./styles";

// create a component
const TabControl = props => {
  const {handle, tab} = props;
  return <View style={styles.row}>
      <Button onPress={() => handle("login")} title="Login" style={tab === "login" ? styles.activeButton : styles.button} />
      <Button onPress={() => handle("register")} title="Register" style={tab === "register" ? styles.activeButton : styles.button} />
    </View>;
};

export default TabControl;
