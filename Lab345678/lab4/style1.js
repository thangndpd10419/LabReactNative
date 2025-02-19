import { StyleSheet } from "react-native";

const style1 = StyleSheet.create({
  par: {
    margin: 5,
    flex: 1,
    marginTop: 15,
    height: 80,
    width: "46%",
    backgroundColor: "#e4d1ed",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  t1: {
    height: 50,
    width: "100%",
    backgroundColor: "#bcbbbd",
    textAlign: "center",
    lineHeight: 50, // căn dọc của chữ
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  ima: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});
export default style1;
