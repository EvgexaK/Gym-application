import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { connect } from "react-redux";

import Layout from "../../constants/Layout";
import Title from "../../components/Title";
import Box3 from "../../components/Box3";
import Input from "../../components/Input";
import * as Members from "../../data/members";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const DEBUG = false;

class AccountPage extends React.Component {
  state = {
    fields: {},
    isLoadingComplete: false
  };
  constructor(props) {
    super(props);
    props.fetchMember(props.memberId);
  }

  static navigationOptions = {
    title: "Account Page"
  };

  render() {
    const { name, height, days, weight, email, phone, fb } = this.props.fields;
    const { handleChange } = this.props;
    const VectorIcons = { MaterialCommunityIcons };

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
              {name}
            </Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.textLabel}>Have a</Text>
            <Text style={styles.textLabel1}>Nice day!</Text>
          </View>
        </View>

        <Input
          name="Days in Gym"
          iconName="calendar-o"
          label="Days in Gym"
          dafaultValue={days}
          onChangeText={handleChange}
        />
        <Input
          name="Height"
          VectorIcon
          Name="man"
          label="Height"
          dafaultValue={height}
          onChangeText={handleChange}
        />
        <Input
          name="Weight"
          VectorIcon
          Name="weight-kilogram"
          label="Weight"
          dafaultValue={weight}
          onChangeText={handleChange}
        />
        <Input
          name="email"
          iconName="envelope-o"
          label="Email"
          dafaultValue={"isuslov@me.com"}
          onChangeText={handleChange}
          editable={false}
          selectTextOnFocus={false}
          c
        />
        <Input
          name="phone"
          iconName="phone"
          label="Phone"
          dafaultValue={phone}
          onChangeText={handleChange}
        />
        <Input
          name="fb"
          iconName="facebook"
          label="FB"
          dafaultValue={fb}
          onChangeText={handleChange}
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
    flexDirection: "row",
    height: 50
  },
  box: {
    height: 50,
    width: "50%",
    backgroundColor: "black"
  },
  textLabel: {
    color: "white",
    textAlign: "center"
  },
  textLabel1: {
    color: "white",
    textAlign: "center"
  },
  aboutView: {
    height: 64,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    // borderTopLeftRadius: 16,
    // borderTopRightRadius: 16,

    backgroundColor: "#262626",
    padding: 16,
    marginLeft: 32,
    marginRight: 32
  },
  aboutText: {
    color: "#E9B52F",
    fontSize: 32,
    textAlign: "center"
  }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: ({ name, value }) => {
    const payload = {};
    payload[name] = value;
    dispatch({ type: "MEMBER_UPDATE", payload });
  },
  fetchMember: async id => {
    const payload = await Members.getById(id);
    dispatch({ type: "MEMBER_UPDATE", payload });
  }
});

export default connect(s => s.member, mapDispatchToProps)(AccountPage);
