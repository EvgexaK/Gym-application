import React, { Component } from "react";
import { ScrollView, Text, StyleSheet, Image } from "react-native";
import Layout from '../constants/Layout';

class ExerciseItem extends Component {
    static navigationOptions = {
        title: ' ',
      };
  render() {
    return (
      <ScrollView style={styles.container}>
          <Text style={styles.title}>{this.props.navigation.state.params.name}</Text>
          <Image
              style={styles.image}
              source={{ uri: this.props.navigation.state.params.img }}
            />
          <Text style={styles.desc}>{this.props.navigation.state.params.desc}</Text>
          
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#F2C94C',
    },
    image: {
        width: 234,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center'
      },
    title: {
        fontWeight: '500',
        fontSize: 20,
        color: '#fff',
        marginTop: 16,
        alignSelf: 'center',
        textShadowColor: "#000",
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 1,
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 16
      },
    desc: {
        marginHorizontal: 16,
        textAlign: 'center'
    }
  });

export default ExerciseItem;