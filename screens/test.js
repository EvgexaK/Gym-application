import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ScrollView } from 'react-native';

import Liker from '../components/liker';

handle = e => console.log(e);

const Test = props => {
  return (
    <ScrollView vertical>
      <Liker id="test" handleLikeToggle={handle} isLike={true}/>
    </ScrollView>
  );
};

export default Test;
