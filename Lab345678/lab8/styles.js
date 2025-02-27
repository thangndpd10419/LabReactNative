import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    backgroundColor: "#B0E0E0",
    borderRadius: 4,
    padding: 16,
    margin: 10,
  },
  containerText: {
    flexDirection: "row",
    backgroundColor: "#e89b68",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    margin: 15,
  },
  containerButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonNew: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginHorizontal: 8,
    backgroundColor: "orange",
    marginBottom: 12,
    marginTop: 12,
  },
  name: {
    textAlign: "left",
    marginRight: "auto",
    fontSize: 16,
    fontWeight: "bold",
  },
  birthday: {
    textAlign: "right",
    marginRight: "auto",
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  //styles model
  modelContent: {
    backgroundColor: "white",
    padding: 16,
    marginTop: 130,
    borderRadius: 8,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "orange",
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  userImage: {
    width: 50, // Chiều rộng của ảnh
    height: 50, // Chiều cao của ảnh
    borderRadius: 25, // Làm cho ảnh thành hình tròn
    marginRight: 10, // Khoảng cách giữa ảnh và văn bản
  },
});
