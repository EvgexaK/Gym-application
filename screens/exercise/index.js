import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, ScrollView } from 'react-native';

import Liker from '../../components/liker';

import abc from '../../assets/images/abs.png';
import triceps from '../../assets/images/triceps.png';
import situps from '../../assets/images/situps.png';
import pushups from '../../assets/images/pushups.png';

import styles from './styles';

const Exercise = props => {
  const { id } = props.navigation.state.params;

  const { execs, handleLikeToggle } = props;
  const isLike = !!execs.filter(v => v === id).length;
  return (
    <ScrollView vertical>
      <Liker isLike={isLike} handleLikeToggle={handleLikeToggle(id, isLike)} />
      <Image source={abc} />
      <Image source={triceps} />
      <Image source={situps} />
      <Image source={pushups} />
    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLikeToggle: (payload, isLike) => () => {
    // console.log({ payload, isLike });
    isLike
      ? dispatch({ type: 'MEMBER_EXEC_UNLIKE', payload })
      : dispatch({ type: 'MEMBER_EXEC_LIKE', payload });
  },
});

export default connect(
  s => ({
    execs: s.member.execs,
  }),
  mapDispatchToProps
)(Exercise);
