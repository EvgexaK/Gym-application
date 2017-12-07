import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { backgroundColor } from '../constants/Colors';

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    fontFamily: 'Advent Pro Bold',
    fontSize: 20,
  },
  value: {
    textAlign: 'center',
    fontFamily: 'Advent Pro Bold',
    fontSize: 24,
  },
});

const Box3 = props => {
  const { label, value } = props;
  return (
    <View style={{ width: '33.3%', height: 50, backgroundColor,}}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

export default Box3;
