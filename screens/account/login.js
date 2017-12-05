import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AsyncStorage, View, Text, TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';

import { fb } from '../../data/firebase';

import styles from './styles';
const State = {};
const Login = props => {
  const { handleLogin, handleChange } = props;
  return (
    <View>
      <Text style={styles.textTitle}>Wellcome</Text>
      <TextInput
        style={styles.textInput}
        name="email"
        placeholder="Enter you email address."
        onChangeText={value => handleChange({ value, name: 'email' })}
      />
      <TextInput
        style={styles.textInput}
        name="password"
        placeholder="Enter you password."
        secureTextEntry={true}
        onChangeText={value => handleChange({ value, name: 'password' })}
      />

      <Button
        onPress={handleLogin}
        containerStyle={{
          marginTop: 16,
          marginLeft: 32,
          marginRight: 32,
          padding: 8,
          // height: 28,
          overflow: 'hidden',
          borderRadius: 14,
          backgroundColor: '#E9B52F',
        }}
        style={{
          fontSize: 16,
          color: '#000',
        }}
      >
        Login
      </Button>
    </View>
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: ({ name, value }) => State[name] = value,
  handleLogin: async () => {
    if (!State.email || !State.password) return;

    fb
      .auth()
      .signInWithEmailAndPassword(State.email, State.password)
      .catch(error => {
        // @todo: onError
        console.log(error);
      })
      .then(fbUser => {
        dispatch({ type: 'MEMBER_FETCH', payload: { fbUser } });
      });
  },
});

export default connect(s => s.member, mapDispatchToProps)(Login);
