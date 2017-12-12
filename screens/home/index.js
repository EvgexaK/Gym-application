import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';
import GridView from 'react-native-super-grid';


const FlatListItem = props => {
  const {name} = props.item;
  return (<View style={{
    marginBottom: 4,
    backgroundColor:'#F2C94C',
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 10
    }}>
    <TouchableOpacity onPress={() => {props.navigate('Exercise', props.item)}}>
      <Text style={{
        color:'white',
        fontSize: 28,
        fontFamily: 'Advent Pro Bold',
        padding: 10}}
      >
        {name}
      </Text>
    </TouchableOpacity>
  </View>)
};



const Home = props => {
  const { execs } = props.member;
  const exercises = props.exercise.items;
  const liked = exercises.filter(v => execs.indexOf(v.id) !== -1);
  const { navigate } = props.navigation;
  return (
    <View>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/images/bghome.jpg')}
      />
      <FlatList 
        style={{padding: 50}}
        data={liked}
        renderItem={(item) => <FlatListItem {...item} navigate={navigate} />}
      />
    </View>
  );
  
};
Home.navigationOptions = {
  title: 'Home',
};

export default connect(s => s)(Home);
