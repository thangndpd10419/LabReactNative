import { useState } from "react";
import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const AddUser = ({ navigation }) => {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const saveData = async () => {
    const url = "http://192.168.2.19:3000/users";
    let result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, birthday }),
    });
    result = await result.json();
    if (result) {
      console.warn("Add success");
      navigation.navigate("ListUser");
    }
  };
  return (
    <View style={styles.modelContent}>
      <TextInput
        style={styles.input}
        placeholder="Enter name "
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter birthday "
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
      />
      <View style={styles.buttonGroup}>
        <TouchableOpacity style={styles.button} onPress={saveData}>
          <Text style={styles.buttonText}>Add new</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AddUser;
