import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Go back</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.reset({
              index: 1,
              routes: [{ name: "Home" }],
            })
          }
        >
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.pop(2)}
        >
          <Text style={styles.buttonText}>Pop 2 Screens</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.popToTop()}
        >
          <Text style={styles.buttonText}>Pop To Top</Text>
        </TouchableOpacity>
      </View>
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
    color: "#333", // Màu chữ tiêu đề
    marginBottom: 30,
  },
  buttonContainer: {
    width: "80%", // Chiều rộng của button container
    marginTop: 20,
  },
  button: {
    backgroundColor: "#007bff", // Màu nền cho nút
    padding: 15,
    borderRadius: 5,
    marginBottom: 15, // Khoảng cách giữa các nút
    elevation: 3, // Đổ bóng dưới nút
  },
  buttonText: {
    color: "#fff", // Màu chữ trong nút
    fontSize: 16,
    textAlign: "center",
  },
});

export default DetailsScreen;
