import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

import Liker from '../../components/liker';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F2C94C',
    },
    image: {
        width: 234,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
      },
    title: {
        fontWeight: '500',
        fontSize: 20,
        color: '#fff',
        marginTop: 16,
        alignSelf: 'center',
        textShadowColor: "#000",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16
      },
    desc: {
        marginHorizontal: 16,
        textAlign: 'center'
    }
  });

const Exercise = props => {
  const { id, name, img, desc } = props.navigation.state.params;

  const { execs, handleLikeToggle } = props;
  const isLike = !!execs.filter(v => v === id).length;

  return (
    <ScrollView style={styles.container}>
      <Liker isLike={isLike} onPress={handleLikeToggle(id, isLike)}/>
      <Text style={styles.title}>
        {name}
      </Text>
      <Image
        style={styles.image}
        source={{ uri: img }}
      />
      <Text style={styles.desc}>{desc}</Text>

    </ScrollView>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleLikeToggle: (payload, isLike) => () => {
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
