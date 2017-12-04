import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "transparent",
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
    // textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    textShadowOffset: {width: 2, height: 2},
    textShadowRadius: 5,
    textShadowColor: 'black',
  },
});

export default styles;
