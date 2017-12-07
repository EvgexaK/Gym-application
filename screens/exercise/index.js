import React from 'react';
import { ScrollView } from 'react-native';
import BlockBtn from '../../components/block_btn3';

const Library = props => {
  const { navigate } = props.navigation;
  return (
    <ScrollView style={{ flex: 1 }}>
      <BlockBtn
        label="BODY"
        imageSource={require('../../assets/images/body.png')}
        onPress={() => navigate('Exercises', { filter: 'body' })}
      />
      <BlockBtn
        label="ARMS"
        imageSource={require('../../assets/images/arms.png')}
        onPress={() => navigate('Exercises', { filter: 'arm' })}
      />
      <BlockBtn
        label="LEGS"
        imageSource={require('../../assets/images/legs.png')}
        onPress={() => navigate('Exercises', { filter: 'legs' })}
      />
    </ScrollView>
  );
};
Library.navigationOptions = { title: 'Exercises' };

export default Library;
