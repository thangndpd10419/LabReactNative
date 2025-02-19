import React from "react";
import { View, Text, Button } from "react-native";

const DetailsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Details Screen</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Reset"
        onPress={() =>
          navigation.reset({
            index: 1,
            routes: [{ name: "Home" }],
          })
        }
      />
      <Button title="Pop 2 Screens" onPress={() => navigation.pop(2)} />
      <Button title="Pop To Top" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default DetailsScreen;
