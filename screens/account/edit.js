import React from 'react';
import { ScrollView, StyleSheet, Text, View, } from 'react-native';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';

import Layout from '../../constants/Layout';
import Title from '../../components/Title';
import Box3 from '../../components/Box3';
import Input from '../../components/Input';
import * as Members from '../../data/members';
import { fb } from '../../data/firebase';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DEBUG = false;

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

class AccountPage extends React.Component {
  state = {
    fields: {},
    isLoadingComplete: false,
  };

  constructor(props) {
    super(props);
    // this.state.fields = serialise(this.props.fbUser);
    // console.log(this.props);
  }

  static navigationOptions = {
    title: 'Account Page',
  };

  render() {
    const { handleChange } = this.props;
    console.log(this.props.fields);
    const { displayName, email, phone, height, weight } = this.props.fields;
    // const VectorIcons = {MaterialCommunityIcons};

    const VectorIcon = ({ groupName, name, size, style }) => {
      let Icon = VectorIcons[groupName];
      return <Icon name={name} size={size} style={style} />;
    };

    return (
      <ScrollView>
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.textLabel}>Wellcome,</Text>
            <Text style={styles.textLabel1}>
              {displayName}
            </Text>
          </View>
          <View>
            <FontAwesome
              name="gear"
              size={32}
              color="white"
              backgroundColor='yellow'
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.textLabel}>Have a</Text>
            <Text style={styles.textLabel1}>Nice day!</Text>
          </View>
        </View>
        <Input
          name="displayName"
          iconName='user'
          label="Display Name"
          dafaultValue={displayName}
          onChangeText={handleChange}
        />

        <Input
          name="height"
          iconName='weight'
          label="Height"
          dafaultValue={height}
          onChangeText={handleChange}
        />
        <Input
          name="weight"
          iconName='weight'
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
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: ({ name, value }) => {
    dispatch({
      type: 'MEMBER_UPDATE',
      payload: { [name]: value },
    });
  },
  fetchMember: async id => {
    const payload = await Members.getById(id);
    dispatch({ type: 'MEMBER_UPDATE', payload });
  },
});

export default connect(s => s.member, mapDispatchToProps)(AccountPage);
