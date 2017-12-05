import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, FlatList } from 'react-native';

import ImageExercise from '../../components/ImageExercise';

export const Row = props => {
  const { navigate } = props;
  const { id, name, type, description, img } = props.item;
  return (
    <ImageExercise
      title={name}
      key={id}
      type={type}
      color={'#F2C94C'}
      description={description}
      imageSource={img}
      handlePress={() =>
        navigate('ExerciseItem', item)}
    />
  );
};

const Exercises = props => {
  const { items } = props;
  const data = items.map(item => ({ ...item, key: item.id }));
  const { navigate } = props.navigation;
  return (
    <ScrollView>
      <FlatList
        horizontal
        data={data}
        renderItem={item => <Row key={item.id} {...item} navigate={navigate} />}
      />
    </ScrollView>
  );
};

Exercises.navigationOptions = {
  title: 'Exercises',
};

export default connect(s => s.exercise)(Exercises);
