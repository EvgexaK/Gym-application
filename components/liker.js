import React from 'react';
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
};

export default Liker;
