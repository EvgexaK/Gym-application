import React from 'react';
import PropTypes from "prop-types";
import { Text, StyleSheet, Icon  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const styles = StyleSheet.create({
  active:{

    color: 'red',
  },
  inactive:{}
})
const Liker = props => {
  return (<FontAwesome
    onPress={props.handleLikeToggle}
    name='heart'
    size={70}
    style={{
      position: 'absolute',
      backgroundColor: 'transparent',
      top: 10,
      right: 10,
    }}
    color={'#FFB6C1'}
  />);
};

Liker.propTypes = {
  isLike: PropTypes.bool.isRequired,
  handleLikeToggle: PropTypes.func.isRequired,
};

export default Liker;
