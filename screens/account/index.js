//import liraries
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';

import SettingsEdit from './edit';
import SettingsView from './view';
import Tabs from './tabs.js';
import styles from './styles';

// create a component
const AccountScreen = props => {
  const AccountView = props.edit ? <SettingsEdit {...props} /> :  <SettingsView />;
  return props.fbUser ? AccountView : <Tabs />;
};
AccountScreen.navigationOptions = {
  title: 'Account',
};

AccountScreen.propTypes = {};

export default connect(s => s.member)(AccountScreen);
