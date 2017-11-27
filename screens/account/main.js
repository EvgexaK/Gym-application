import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import {connect} from 'react-redux';

import Layout from '../../constants/Layout';
import Title from '../../components/Title';
import Box3 from '../../components/Box3';
import Input from '../../components/Input';
import * as Members from '../../data/members';

const DEBUG = false;

class AccountPage extends React.Component {
  state = {
    fields: {},
    isLoadingComplete: false
  };
  constructor(props) {
    super(props);
    // const { navigate } = props.navigation;
    // // if !member go Login
    // if (!props.memberId){
    //   navigate("LoginScreen");
    // }
  }

  componentDidMount() {
    const { id = "id0" } = this.props;
    DEBUG && console.log("fetch AccountPage data");
    Members.getById(id).on("value", fields => {
      DEBUG && console.log("fetched AccountPage data", fields.val());
      this.setState({ fields: fields.val() });
    });
  }

  static navigationOptions = {
    title: "Account Page"
  };

  handleChange = ({ name, value }) => {
    const { fields } = this.state;
    fields[name] = value;
    this.setState({ fields });
  };

  render() {
    const { name, height, days, weight, email, phone, fb } = this.state.fields;
    return (
      <ScrollView>
        <Title title="Account" />
        <View style={styles.row}>
          <View style={styles.box}>
            <Text style={styles.textLabel}>Wellcome</Text>
            <Text style={styles.textLabel1}>{name}</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLabel}>Have a</Text>
            <Text style={styles.textLabel1}>Nice day!</Text>
          </View>
        </View>
        <View style={styles.row}>
          <Box3 label="Height" value={height} />
          <Box3 label="Day's in Gym" value={days} />
          <Box3 label="Weight" value={weight} />
        </View>
        <Input
          name="email"
          iconName="envelope-o"
          label="Email"
          dafaultValue={email}
          onChangeText={this.handleChange}
        />
        <Input
          name="phone"
          iconName="phone"
          label="Phone"
          dafaultValue={phone}
          onChangeText={this.handleChange}
        />
        <Input
          name="fb"
          iconName="facebook"
          label="FB"
          dafaultValue={fb}
          onChangeText={this.handleChange}
        />
        <View style={styles.aboutView}>
          <Text style={styles.aboutText}>About GYM</Text>
        </View>
      </ScrollView>
    );
  }
}

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

export default connect(s => s.member)(AccountPage);
