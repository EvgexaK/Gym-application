import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, View, Text, Image } from 'react-native';
import styles from './styles';
/*

 любимые надо сделать так:
┌──────────────────┐
│    УПРАЖНЕНИЯ    │
├──────────────────┤
│┌───────────────┐ │
││  упражнение1  │ │
│├───────────────┤ │
││  упражнение2  │ │
│└───────────────┘ │
├──────────────────┤
│    ТРЕНАЖЕРЫ     │
├──────────────────┤
│┌───────────────┐ │
││   тренажер1   │ │
│├───────────────┤ │
││   тренажер2   │ │
│└───────────────┘ │
└──────────────────┘
 */
const Home = props => {
  const { execs } = props.member;
  const exercises = props.exercise.items;
  // liked - список любимых упражнений
  const liked = exercises.filter(v => execs.indexOf(v.id) !== -1);
  return (
    <View>
      <Image
        style={styles.backgroundImage}
        source={require('../../assets/images/bg_home.jpg')}
      />
      <View style={styles.container}>
        <Text style={styles.title}>Wake Up.</Text>
        <Text style={styles.title}>Work Out.</Text>
        <Text style={styles.title}>Look Hot.</Text>
        <Text style={styles.title}>Go to Gym.</Text>
      </View>
    </View>
  );
};
Home.navigationOptions = {
  title: 'Home',
};

export default connect(s => s)(Home);
