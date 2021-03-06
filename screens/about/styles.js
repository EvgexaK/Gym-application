import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: 95
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
  },
  contact: {
    width: "100%",
    color: "#ffffff",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "Advent Pro Bold",
    backgroundColor: "rgba(0,0,0,0)"
  },
  title: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: "#ffffff",
    width: "100%",
    height: 50,
    color: "#E9B52F",
    fontSize: 32,
    textAlign: "center",
    fontFamily: "Advent Pro Bold",
  }
});

export default styles;
