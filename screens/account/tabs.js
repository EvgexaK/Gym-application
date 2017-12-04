import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Image, View } from "react-native";

import Button from "react-native-button";

// import { Button } from 'react-native-elements'

import Colors from "../../constants/Colors";
import LoginScreen from "./login";
import RegisterScreen from "./register";
import styles from "./styles";

const screens = ["Login", "Register"];

const AccountTabs = props => {
  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.tabContainer}>
          {screens.map((v, i) => {
            const isActive = v === props.activeTab;
            return (
              <Button
                key={`tab-${i}`}
                containerStyle={{
                  width: "50%",
                  padding: 4,
                  height: 28,
                  overflow: "hidden",
                  borderRadius: 4,
                  backgroundColor: isActive ? "#E9B52F" : "#262626"
                }}
                disabledContainerStyle={{
                  backgroundColor: "grey"
                }}
                style={{
                  fontSize: 16,
                  color: isActive ? "#000" : "#fff"
                }}
                onPress={() => {
                  props.handlePress(v);
                }}
              >
                {v}
              </Button>
            );
          })}
        </View>
        <View style={styles.formBody}>
          {props.activeTab === "Login" && <LoginScreen />}
          {props.activeTab === "Register" && <RegisterScreen />}
        </View>
      </View>
    </View>
  );
};

AccountTabs.propTypes = {
  handlePress: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handlePress: payload => dispatch({ type: "ACTIVE_TAB", payload })
});

export default connect(s => s.member, mapDispatchToProps)(AccountTabs);
