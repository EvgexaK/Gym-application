/**
  About

 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import Title from "../../components/Title";
import backgroundImage from "../../assets/images/aboutBack.jpg";

import styles from "./styles";

const About = props => {
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.backgroundImage} />
      <View>
        <Title title="About GymAPP" />
        <Text style={style.title}>Contact Info</Text>
        <Text style={style.contact}>
          Email: gymapp@me.com{"\n"}
          {"\n"}
          Contact tel: +123456789{"\n"}
          {"\n"}
          Address: Öömannin alakerrassa, Torikatu 21, Tornio
        </Text>
      </View>
    </View>
  );
};

About.propTypes = {
  handle: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  handle: () => {}
});

export default connect(s => s, mapDispatchToProps)(About);
