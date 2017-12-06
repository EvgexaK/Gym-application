import React from 'react';
import { ScrollView } from 'react-native';
import BlockBtn from '../components/block_btn';

const Library = props => {
  const { navigate } = props.navigation;
  return (
    <ScrollView style={{ flex: 1 }}>
      <BlockBtn
        label="EXERCISES"
        imageSource={require('../assets/images/exercises.png')}
        onPress={() => navigate('ExerciseGroups', { filter: false })}
      />
      <BlockBtn
        label="EQUIPMENTS"
        imageSource={require('../assets/images/machines.png')}
        onPress={() => navigate('Equipments', { filter: false })}
      />
    </ScrollView>
  );
};
Library.navigationOptions = { title: 'Library' };

export default Library;
