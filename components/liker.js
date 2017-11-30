import React from 'react';
import PropTypes from "prop-types";
import { Text } from 'react-native';

const Liker = props => {
  return <Text onPress={props.handleLikeToggle}>[like]</Text>;
};

Liker.propTypes = {
  isLike: PropTypes.bool.isRequired,
  handleLikeToggle: PropTypes.func.isRequired,
};

export default Liker;
