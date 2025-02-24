import React from "react";
import { View, Text, Button, Image } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "#68e8e8",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        source={require("../assets/ima.png")}
        style={{
          width: 280,
          height: 380,
          resizeMode: "contain",
          borderWidth: 5, // Thêm độ dày viền
          borderColor: "#000", // Màu viền (màu đen)
          borderRadius: 20, // Bo tròn góc
        }}
      />
    </View>
  );
};

export default DetailsScreen;
