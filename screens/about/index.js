/**
  About

 */

import React, { Component } from "react";
import PropTypes from "prop-types";
import { ScrollView, Text, StyleSheet, View, Image } from "react-native";
import Title from "../../components/Title";
import backgroundImage from "../../assets/images/bghome.jpg";

import styles from "./styles";

const About = props => {
  return (
    <View>
      <Image
        source={backgroundImage}
        style={require('../../assets/images/bghome.jpg')}
      />
      <Title title="About GymAPP" />
      <Text style={styles.title}>Contact Info</Text>

    <View style={styles.container}>
       <Text style={styles.contact}>
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
About.navigationOptions = {
  title: 'About',
};

About.propTypes = {
};

export default About;
