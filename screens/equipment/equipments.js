import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ScrollView, FlatList } from 'react-native';

import ImageExercise from '../../components/ImageExercise';

export const Item = props => {
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
      handlePress={() => {
        navigate('Machine', props.item)
      }}
    />
  );
};

const List = props => {
  console.log(props);
  // const { filter } = props.navigation.state.params;
  const { items } = props;
  const data = items
    .map(item => ({ ...item, key: item.id }));
  // console.log(data);
  const { navigate } = props.navigation;
  return (
    <ScrollView>
      <FlatList
        horizontal
        data={data}
        renderItem={item => <Item {...item} navigate={navigate} />}
      />
    </ScrollView>
  );
};

List.navigationOptions = {
  title: 'Machines',
};

export default connect(s => s.equipment)(List);
