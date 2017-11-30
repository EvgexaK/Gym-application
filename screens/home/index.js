import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
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
  console.log(props);
  return (
    <ScrollView>

    </ScrollView>
  );
};

export default connect(s => s)(Home);

