import { StyleSheet } from 'react-native';

const color1 = '#E9B52F';
const color2 = '#262626';

const styles = StyleSheet.create({
  buttonContainer: {
    marginLeft: 16,
    padding: 4,
    overflow: 'hidden',
    borderRadius: 14,
  },
  tabContainer: {
    backgroundColor: '#262626',
    flexDirection: 'row',
    borderRadius: 10,
  },
  container: {
    flex: 1,
    // width: 300,
    // height: 300,
    flexDirection: 'row',
    backgroundColor: '#333333',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    // paddingHorizontal: 16,
    marginTop: 32,
    marginRight: 32,
    marginBottom: 32,
    marginLeft: 32,
  },
  formBody: {
    flex: 1,
    paddingHorizontal: 16,
  },
  textTitle: {
    paddingTop: 32,
    paddingBottom: 32,

    textAlign: 'center',
    fontSize: 30,
    color: 'white',
    fontFamily: 'Advent Pro Regular',
  },

  sub: {
    padding: 4,
    fontSize: 18,
    color: 'white',
    fontFamily: 'Advent Pro Regular',
  },
  row: {
    flexDirection: 'row',
  },
  textInput: {
    backgroundColor: '#fff',
  },
  textFogot: {},
  formContainer: {
    padding: 8,
    flex: 1,
  },
  image: {
    width: 234,
    height: 234,
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
  },
  description: {
    fontSize: 16,
    width: 100,
  },
  textInput: {
    padding: 8,
    paddingLeft: 18,
    paddingRight: 18,
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 1,
    borderRadius: 18,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: 'Advent Pro Regular',
  },
});
export default styles;
