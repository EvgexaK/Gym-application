import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet, Icon } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const styles = StyleSheet.create({
  heart: {
    position: 'absolute',
    backgroundColor: 'transparent',
    top: 10,
    right: 10,
    zIndex: 99,
  },
  active: {
    color: 'red',
  },
  inactive: {
    color: 'gray',
  },
});

const Liker = props => {
  const {isLike, onPress} = props;
  return (
    <FontAwesome
      onPress={onPress}
      name="heart"
      size={32}
      style={isLike
        ? [styles.heart, styles.active ]
        : [styles.heart, styles.inactive ]
      }
      color={'#FFB6C1'}
    />
  );
};

Liker.propTypes = {
  isLike: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Liker;
