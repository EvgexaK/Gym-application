import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fb } from '../../data/firebase';
import Layout from '../../constants/Layout';
import Title from '../../components/Title';
import Box3 from '../../components/Box3';
import Input from '../../components/Input';
import MyView from '../../components/myview';
import * as Members from '../../data/members';
import Button from 'react-native-button';
import { FontAwesome } from '@expo/vector-icons';

import MaterialCommunityIcons
  from 'react-native-vector-icons/MaterialCommunityIcons';

const AccountPage = props => {
  const { name, height, days, weight, email, phone } = props.fields;
  const { handleChange, handleSignOut, handleEdit } = props;

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
        <View style={{ width: '20%', backgroundColor: 'black', paddingTop: 2 }}>
          <View
            style={{
              height: 48,
              width: 48,
              borderTopLeftRadius: 22,
              borderTopRightRadius: 22,
              backgroundColor: '#E9B52F',
              padding: 6,
            }}
          >
            <FontAwesome
              onPress={handleEdit}
              name="gear"
              size={42}
              style={{ backgroundColor: 'transparent' }}
              color="#262626"
            />
          </View>
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
      <MyView iconName="envelope-o" label="Phone" value={phone} />
      <View style={styles.aboutView}>
        <Button
          onPress={handleSignOut}
          style={{
            fontSize: 16,
            color: '#000',
          }}
          containerStyle={{
            // width: '50%',
            padding: 4,
            height: 28,
            overflow: 'hidden',
            borderRadius: 14,
            backgroundColor: '#E9B52F',
          }}
        >
          SignOut
        </Button>
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
    width: '40%',
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

AccountPage.propTypes = {
  handleSignOut: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleEdit: () => dispatch({ type: 'MEMBER_EDIT' }),
  handleSignOut: () => {
    fb.auth().signOut().then(() => {
      dispatch({ type: 'USER_SIGNOUT' });
    });
  },
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
