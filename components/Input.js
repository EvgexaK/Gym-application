import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  background: {},
  coner: {},
  icon: {},
  ico: {
    fontSize: 32,
    // size: 70,
    // backgroundColor: 'transparent',
    // color: '#FFB6C1',
  },
  viewLabel: {},
  textLabel: {},
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
});

const Input = props => {
  console.log(props);
  const { iconName, label, dafaultValue, name } = props;
  return (
    <View style={styles.background}>
      <View style={styles.coner}>
        <View style={styles.icon}>
          <FontAwesome name={iconName} size={32} />
        </View>
        <View style={styles.viewLabel}>
          <Text style={styles.textLabel}>{label}</Text>
        </View>
        <View style={styles.input}>
          <TextInput
            style={styles.textInput}
            value={dafaultValue}
            onChangeText={value =>
              props.onChangeText &&
              props.onChangeText({ name, value })}
          />
        </View>
      </View>
    </View>
  );
};

Input.propTypes = {};

export default Input;
