import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
  Button,
} from 'react-native';
import PropTypes from 'prop-types';

import Layout from '../constants/Layout';
const height = Layout.window.height / 3;
const fontSize = 64;
const styles = StyleSheet.create({
  touch: {
    width: '100%',
    height,
    padding: 0,
  },
  backgroundImage: {
    height,
    position: 'absolute',
    resizeMode: 'cover',
  },
  container: {
    backgroundColor: 'transparent',
    height,
    paddingTop: (height - fontSize) / 2,
  },

  title: {
    width: '100%',
    fontSize,
    height,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Advent Pro Bold',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    textShadowColor: 'black',
  },
});

const BlockBtn = props => {
  const { label, onPress, imageSource } = props;
  return (
    <TouchableOpacity style={styles.touch} onPress={onPress}>
      <Image style={styles.backgroundImage} source={imageSource} />
      <View style={styles.container}>
        <Text style={styles.title}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

BlockBtn.propTypes = {
  onPress: PropTypes.func.isRequired,
};

export default BlockBtn;
