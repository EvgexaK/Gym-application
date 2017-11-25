import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  row: {
    width: '100%',
    height: 64,
    backgroundColor: '#262626',
  },
  coner: {
    marginTop: 8,
    flexDirection: 'row',
    backgroundColor: '#EEC03C',
  },
  icon: {
    width: 48,
    height: 48,
    paddingTop: 16,
    paddingLeft: 16,
  },
  ico: {
    // size: 70,
    // backgroundColor: 'transparent',
    // color: '#FFB6C1',
  },
  viewLabel: {
    height: 48,
    width: 100,
    padding: 16,
  },
  textLabel: {

  },
  viewInput:{
    height: 48,
    width: 200,
    padding: 8,
  },
  textInput: {
    height: 24,
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: 'white',
  },
});

const Input = props => {
  console.log(props);
  const { iconName, label, dafaultValue, name } = props;
  return (
    <View style={styles.row}>
      <View style={styles.coner}>
        <View style={styles.icon}>
          <FontAwesome name={iconName} size={16} />
        </View>
        <View style={styles.viewLabel}>
          <Text style={styles.textLabel}>{label}</Text>
        </View>
        <View style={styles.viewInput}>
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
