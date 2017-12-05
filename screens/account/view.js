import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../../constants/Layout';
import Title from '../../components/Title';
import Box3 from '../../components/Box3';
import Input from '../../components/Input';
import MyView from '../../components/myview';
import * as Members from '../../data/members';
import MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';

const DEBUG = false;

const AccountPage = props => {
  console.log(props);
  const { name, height, days, weight, email, phone } = props.fields;
  const { handleChange } = props;
  const VectorIcon = ({ groupName, name, size, style }) => {
    let Icon = VectorIcons[groupName];
    return <Icon name={name} size={size} style={style} />;
  };

  return (
    <ScrollView>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.textLabel}>Wellcome</Text>
          <Text style={styles.textLabel1}>
            {name}
          </Text>
        </View>
        <View style={styles.box}>
          <Text style={styles.textLabel}>Have a</Text>
          <Text style={styles.textLabel1}>Nice day!</Text>
        </View>
      </View>
      <View style={styles.row}>
        <Box3 label="Height" value={height} />
        <Box3 label="Days in Gym" value={days} />
        <Box3 label="Weight" value={weight} />
      </View>
      <MyView iconName="envelope-o" label="Email" value={email} />
      <View style={styles.aboutView}>
        <Text style={styles.aboutText}>About GYM</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 50,
  },
  box: {
    height: 50,
    width: '50%',
    backgroundColor: 'black',
  },
  textLabel: {
    color: 'white',
    textAlign: 'center',
  },
  textLabel1: {
    color: 'white',
    textAlign: 'center',
  },
  aboutView: {
    height: 64,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    backgroundColor: '#262626',
    padding: 16,
    marginLeft: 32,
    marginRight: 32,
  },
  aboutText: {
    color: '#E9B52F',
    fontSize: 32,
    textAlign: 'center',
  },
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: ({ name, value }) => {
    const payload = {};
    payload[name] = value;
    dispatch({ type: 'MEMBER_UPDATE', payload });
  },
  fetchMember: async id => {
    const payload = await Members.getById(id);
    dispatch({ type: 'MEMBER_UPDATE', payload });
  },
});

export default connect(s => s.member, mapDispatchToProps)(AccountPage);
