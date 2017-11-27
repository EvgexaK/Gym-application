import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { View } from "react-native";
import styles from "./styles";
import Button from "react-native-button";

const TabControl = props => {
  const { handle, tab } = props;

  const loginStyle =
    tab === "login"
      ? [styles.button, styles.activeButton]
      : [styles.button];
  const registerStyle =
    tab === "register"
      ? [styles.button, styles.activeButton]
      : [styles.button];
  return (
    <View style={styles.row}>
      <Button style={loginStyle} onPress={() => handle("login")}>
        Login
      </Button>
      <Button style={registerStyle} onPress={() => handle("register")} >
        Register
      </Button>
    </View>
  );
};

TabControl.propTypes = {
  handle: PropTypes.func.isRequired,
  tab:  PropTypes.string.isRequired,
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
});

export default connect(s => s.member, mapDispatchToProps)(TabControl);
