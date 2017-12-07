import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  row: {
    flex: 1,
    width: '100%',
    height: 64,
    backgroundColor: '#262626',
  },
  coner: {
    marginTop: 8,
    marginRight: 8,
    flexDirection: 'row',
    backgroundColor: '#EEC03C',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  icon: {
    width: 48,
    height: 48,
    paddingTop: 16,
    paddingLeft: 16,
  },

  viewLabel: {
    height: 48,
    width: 100,
    padding: 16,
  },
  textLabel: {},

  viewInput: {
    height: 48,
    // width: 200,
    flex: 1,
    padding: 11,
  },

  textInput: {
    flex: 1,
    height: 24,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 12,
    paddingLeft: 12,
    paddingRight: 12,
  },
});

const MyView = props => {
  const { iconName, label, value } = props;
  return (
    <View style={styles.row}>
      <View style={styles.coner}>
        <View style={styles.icon}>
          <FontAwesome name={iconName} size={16} />
        </View>
        <View style={styles.viewInput}>
          <Text style={styles.textInput}>{value}</Text>
        </View>
      </View>
    </View>
  );
};

MyView.propTypes = {};

export default MyView;
