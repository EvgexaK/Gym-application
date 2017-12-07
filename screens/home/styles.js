import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    ...Platform.select({
      ios: {backgroundColor: 'transparent'},
      android: {}})
   // backgroundColor: "rgba(0,0,0,0)",
  },
  backgroundImage: {
    position: "absolute",
    resizeMode: "cover"
  },
  title: {
    width: '100%',
    height: 50,
    color: '#E9B52F',
    fontSize: 48,
    textAlign: 'center',
    fontFamily: 'Advent Pro Bold',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'black',
  },
});

export default styles;
