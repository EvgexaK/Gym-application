import React from 'react';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from "@expo/vector-icons";

import Layout from '../../constants/Layout';
import Title from '../../components/Title';
import Box3 from '../../components/Box3';
import Input from '../../components/Input';
import * as Members from '../../data/members';
import { fb } from '../../data/firebase';

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
    fontSize: 24,
    fontFamily: 'Advent Pro Bold',
  },
  textLabel1: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Advent Pro Bold',
  },
  aboutView: {
    height: 64,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,

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

const serialise = user => {
  const res = {};
  if (user) {
    res.displayName = user.displayName || '';
    res.email = user.email || '';
    res.phone = user.phone || '';
  }
  return res;
};

const AccountEditPage = props => {
  const { handleChange, handleView } = props;
  const { displayName, email, phone, height, weight } = props.fields;

  const VectorIcon = ({ groupName, name, size, style }) => {
    const Icon = VectorIcons[groupName];
    return <Icon name={name} size={size} style={style} />;
  };

  return (
    <ScrollView>
      <View style={styles.row}>
        <View style={styles.box}>
          <Text style={styles.textLabel}>Welcome,</Text>
          <Text style={styles.textLabel1}>
            {displayName}
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
              onPress={handleView}
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
      <Input
        name="displayName"
        VectorIcon
        label="Display Name"
        dafaultValue={displayName}
        onChangeText={handleChange}
      />

      <Input
        name="height"
        VectorIcon
        label="Height"
        dafaultValue={height}
        onChangeText={handleChange}
      />
      <Input
        name="weight"
        VectorIcon
        label="weight"
        dafaultValue={weight}
        onChangeText={handleChange}
      />
      <Input
        name="email"
        iconName="envelope-o"
        label="Email"
        dafaultValue={email}
        onChangeText={handleChange}
      />
      <Input
        name="phone"
        iconName="phone"
        label="Phone"
        dafaultValue={phone}
        onChangeText={handleChange}
      />

      <View style={styles.aboutView}>
        <Text style={styles.aboutText}>About GYM</Text>
      </View>
    </ScrollView>
  );
};

AccountEditPage.navigationOptions = {
  title: 'Account Page',
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleView: () => dispatch({ type: 'MEMBER_EDIT' }),
  handleChange: ({ name, value }) => {
    dispatch({
      type: 'MEMBER_UPDATE_SAVE',
      payload: { [name]: value },
    });
  },
  fetchMember: async id => {
    const payload = await Members.getById(id);
    dispatch({ type: 'MEMBER_UPDATE', payload });
  },
});

export default connect(s => s.member, mapDispatchToProps)(AccountEditPage);
