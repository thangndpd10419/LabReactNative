import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text style={styles.buttonText}>Go to Details</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa", // Màu nền sáng
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333", // Màu chữ tiêu đề
  },
  button: {
    backgroundColor: "#007bff", // Màu nền cho nút
    padding: 15,
    borderRadius: 5,
    elevation: 3, // Đổ bóng dưới nút
  },
  buttonText: {
    color: "#fff", // Màu chữ trong nút
    fontSize: 16,
    textAlign: "center",
  },
});

export default HomeScreen;
