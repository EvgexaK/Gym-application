import { StyleSheet } from "react-native";

const color1 = '#E9B52F';
const color2 = '#262626';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: 300,
    // height: 300,
    flexDirection: "row",
    backgroundColor: "#333333",
    borderColor: "#808080",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    paddingHorizontal: 16,
    marginTop: 32,
    marginRight: 32,
    marginBottom: 32,
    marginLeft: 32
  },
  textTitle: {
    fontSize: 30,
    color: color1,
    fontFamily: 'Advent Pro Regular',
  },

  sub: {
    fontSize: 14,
    color: color1,
    fontFamily: 'Advent Pro Regular',
  },
  row: {
    flexDirection: "row"
  },
  textInput: {
    backgroundColor: "#fff"
  },
  textFogot: {},
  formContainer: {
    padding: 8,
    flex: 1
  },
  image: {
    width: 234,
    height: 234
  },
  title: {
    fontWeight: "500",
    fontSize: 20
  },
  description: {
    fontSize: 16,
    width: 100
  },
  button: {
    backgroundColor: '#2E9298',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 10,
    shadowOpacity: 0.25,
    padding: 12,
    fontSize: 20,
    // backgroundColor: color2,
    color: "#fff"
  },
  activeButton: {
    backgroundColor: color1,
    color: "#000"
  },
  textInput: {
    backgroundColor: "#fff",
    color: "#000",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: "Advent Pro Regular"
  }
});
export default styles;
