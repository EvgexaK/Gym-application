import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, ScrollView } from 'react-native';

import abc from '../../assets/images/abs.png';
import triceps from '../../assets/images/triceps.png';
import situps from '../../assets/images/situps.png';
import pushups from '../../assets/images/pushups.png';

import styles from './styles';

const Exercise = props => {
  return (
    <ScrollView vertical>
      <Image source={abc} />
      <Image source={triceps} />
      <Image source={situps} />
      <Image source={pushups} />
    </ScrollView>
  );
};

export default connect(s => s.exercise)(Exercise);
