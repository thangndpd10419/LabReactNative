import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const HomeScreen2 = ({ navigation }) => {
  return (
    <View
      style={{
        width: "100%",
        backgroundColor: "orange",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        height: 80,
        //
        shadowColor: "#000", // Màu bóng
        shadowOffset: { width: 0, height: 2 }, // Độ lệch của bóng
        shadowOpacity: 0.3, // Độ mờ của bóng
        shadowRadius: 4, // Bán kính bóng
      }}
    >
      <Text
        style={{
          lineHeight: 70,
          fontSize: 25,
          fontWeight: "bold",
          color: "white",
        }}
      >
        Drawer Navigation
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "white",
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
        onPress={() => navigation.navigate("Drawer")}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            color: "orange",
          }}
        >
          Go
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen2;
