import React from 'react';
<<<<<<< HEAD
import { Text, StyleSheet, Icon  } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
=======
import PropTypes from "prop-types";
import { Text } from 'react-native';
>>>>>>> 13038313714c1b032ad9cd33a6bbaf9a34224bfb


const styles = StyleSheet.create({
  active:{
    
    color: 'red',
  },
  inactive:{}
})
const Liker = props => {
<<<<<<< HEAD
  return (<FontAwesome
    name='fa-heart'
    size={70}
    style={{
      position: 'absolute',
      backgroundColor: 'transparent',
      top: 10,
      right: 10,
    }}
    color={'#FFB6C1'}
  />);
=======
  return <Text onPress={props.handleLikeToggle}>[like]</Text>;
};

Liker.propTypes = {
  isLike: PropTypes.bool.isRequired,
  handleLikeToggle: PropTypes.func.isRequired,
>>>>>>> 13038313714c1b032ad9cd33a6bbaf9a34224bfb
};

export default Liker;
