import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { AsyncStorage, View, Text, TextInput, StyleSheet } from 'react-native';
import Button from 'react-native-button';
import Title from '../../components/Title';

import pack from '../../package.json';
import styles from './styles';

import { fb } from '../../data/firebase';

//       <Text style={styles.textTitle}>Hello!</Text>
const Register = props => {
  const { handle, handleChange, handleForgot, tab, handleRegister } = props;
  const { name, email, sex } = props.fields;
  return (
    <View>
      <Text style={[styles.sub, { textAlign: 'center' }]}>
        We just need know somthing about you
      </Text>
      <TextInput
        style={styles.textInput}
        name="name"
        placeholder="How can I call you?"
        onChangeText={value => handleChange({ value, name: 'name' })}
        value={name}
      />
      <TextInput
        style={styles.textInput}
        name="email"
        placeholder="Enter you email address."
        onChangeText={value => handleChange({ value, name: 'email' })}
        value={email}
      />
      <TextInput
        style={styles.textInput}
        name="password"
        placeholder="Enter you password."
        onChangeText={value => handleChange({ value, name: 'password' })}
      />
      <View style={styles.row}>
        <Text style={styles.sub}>I am a:</Text>
        <Button
          onPress={props.handleBoy}
          containerStyle={[
            styles.buttonContainer,
            {
              backgroundColor: sex === 'm' ? '#E9B52F' : '#262626',
            },
          ]}
          style={{
            fontFamily: 'Advent Pro Regular',
            color: sex === 'm' ? '#000' : '#fff',
          }}
        >
          Boy
        </Button>
        <Button
          onPress={props.handleGirl}
          containerStyle={[
            styles.buttonContainer,
            {
              backgroundColor: sex === 'f' ? '#E9B52F' : '#262626',
            },
          ]}
          style={{
            fontFamily: 'Advent Pro Regular',
            color: sex === 'f' ? '#000' : '#fff',
          }}
        >
          Girl
        </Button>
      </View>
      <Text
        style={[
          styles.textTitle,
          {
            paddingTop: 4,
            textAlign: 'center',
            paddingBottom: 4,
          },
        ]}
      >
        Ready?
      </Text>
      <Button
        containerStyle={{
          padding: 8,
          // height: 28,
          overflow: 'hidden',
          borderRadius: 4,
          backgroundColor: '#E9B52F',
          borderRadius: 24,
        }}
        style={{
          fontFamily: 'Advent Pro Regular',
          fontSize: 32,
          color: '#000',
        }}
        onPress={handleRegister(props.fields)}
      >
        Yes!
      </Button>
    </View>
  );
};

Register.propTypes = {
  handleChange: PropTypes.func.isRequired,
  handleBoy: PropTypes.func.isRequired,
  handleGirl: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: ({ name, value }) =>
    dispatch({ type: 'MEMBER_UPDATE', payload: { [name]: value } }),

  handleBoy: () => dispatch({ type: 'MEMBER_UPDATE', payload: { sex: 'm' } }),

  handleGirl: () => dispatch({ type: 'MEMBER_UPDATE', payload: { sex: 'f' } }),

  handleRegister: fields => async () => {
    if (!fields.email || !fields.name || !fields.password) return;
    // const member = await Members.create(fields);
    // if (member) {
    // console.log(member);
    fb
      .auth()
      .createUserWithEmailAndPassword(fields.email, fields.password)
      .catch(error => {
        // @todo: onError
        console.log(error);
      })
      .then(user => {
        if (user) {
          user.updateProfile({
            displayName: fields.name,
          });
        }
      });
    // dispatch({ type: 'MEMBER_FETCH', payload: { memberId: member.id } });
    // await AsyncStorage.setItem('@Gyp-App:memberId', member.id);
  },
});
export default connect(s => s.member, mapDispatchToProps)(Register);
