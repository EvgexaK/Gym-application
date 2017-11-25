import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { backgroundColor } from '../constants/Colors';
import { titleText } from '../constants/Fonts';

const styles = StyleSheet.create({
  titleText,
});

const Title = props => {
  const { title } = props;
  return (
    <View style={{ width: '100%', height: 50, backgroundColor }}>
      <Text style={styles.titleText}>{title}</Text>
    </View>
  );
};

export default Title;
