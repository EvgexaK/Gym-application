import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';

import Layout from '../../constants/Layout';
import Title from '../../components/Title';
import Box3 from '../../components/Box3';
import Input from '../../components/Input';
import * as Members from '../../data/members';
import {fb} from '../../data/firebase';

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
  },
  textLabel1: {
    color: 'white',
    textAlign: 'center',
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
  if(user){
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
    this.state.fields = serialise(this.props.fbUser);
  }

  static navigationOptions = {
    title: 'Account Page',
  };

  render() {
    // console.log({state: this.state});
    // const { name } = serialise(this.props.fbUser);
    // console.log('fbUser :', this.props.fbUser);
    // console.log(serialise(this.props.fbUser));
    const {displayName, email, phone} = this.state.fields;
    //
    const { height, days, weight, fb } = this.props.fields;
    const { handleChange } = this.props;
    // const VectorIcons = {MaterialCommunityIcons};

    const VectorIcon = ({ groupName, name, size, style }) => {
      let Icon = VectorIcons[groupName];
      return <Icon name={name} size={size} style={style} />;
    };

    return (
      <ScrollView>
        <Title title="Account" />
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.textLabel}>Wellcome</Text>
            <Text style={styles.textLabel1}>
              {displayName}
            </Text>
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
          onChangeText={handleChange(this.props.fbUser)}
        />

        <Input
          name="Height"
          VectorIcon
          label="Height"
          dafaultValue={height}
          onChangeText={handleChange}
        />
        <Input
          name="Weight"
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
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: user => ({ name, value }) => {
    // console.log(user);
    if(user){
      user.updateProfile({[name]:value});
    }
    // const payload = {};
    // payload[name] = value;
    // dispatch({ type: 'MEMBER_UPDATE', payload });
  },
  fetchMember: async id => {
    const payload = await Members.getById(id);
    dispatch({ type: 'MEMBER_UPDATE', payload });
  },
});

export default connect(s => s.member, mapDispatchToProps)(AccountPage);
