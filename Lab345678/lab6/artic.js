import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details Screen</Text>
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
    backgroundColor: "#fff", // Màu nền của Text
    width: 300, // Chiều rộng của văn bản
    textAlign: "center", // Căn giữa văn bản
    paddingVertical: 20, // Đệm trên và dưới
    borderWidth: 2, // Độ dày viền
    borderColor: "red", // Màu viền
    borderRadius: 10, // Bo tròn góc
    fontSize: 24, // Kích thước chữ
    fontWeight: "bold", // Độ đậm của chữ
    shadowColor: "#000", // Màu đổ bóng
    shadowOffset: { width: 0, height: 2 }, // Độ dời của đổ bóng
    shadowOpacity: 0.3, // Độ trong suốt của đổ bóng
    shadowRadius: 4, // Mức độ mờ của đổ bóng
    elevation: 5, // Đổ bóng trên Android
  },
});

export default DetailsScreen;
