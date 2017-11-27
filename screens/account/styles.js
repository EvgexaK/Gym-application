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
  title:{},
  sub:{},
  row: {},
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
    backgroundColor: color2,
    color: "#fff"
  },
  activeButton: {
    backgroundColor: color1,
    color: "#000"
  }
});
export default styles;