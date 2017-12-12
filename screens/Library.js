import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import BlockBtn from '../components/block_btn';


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center'
  }
});
const Library = props => {
  const { navigate } = props.navigation;
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
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
