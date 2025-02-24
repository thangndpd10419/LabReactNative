import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Image,
  TouchableOpacity,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import icon

const Register = ({ navigation }) => {
  const [state, setState] = useState(false);
  const setVisiblity = () => {
    setState((prevState) => !prevState);
  };
  return (
    <View style={styles.container}>
      <Image source={require("../assets/register.png")} style={styles.ima} />
      {/* <Text style={{ textAlign: "center", fontSize: 40 }}>HELLO</Text> */}
      <Text
        style={{
          textAlign: "center",
          fontSize: 30,
          marginTop: 20,
          marginBottom: 30,
        }}
      >
        Create your account
      </Text>

      <View style={styles.inputContainer}>
        <Icon name="user" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="User"
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Pass "
          secureTextEntry={!state}
          placeholderTextColor="#888"
        />
        <Icon
          name={state ? "eye" : "eye-slash"}
          size={20}
          color="#888"
          style={styles.icon}
          onPress={setVisiblity}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="RePass"
          secureTextEntry={!state}
          placeholderTextColor="#888"
        />
        <Icon
          name={state ? "eye" : "eye-slash"}
          size={20}
          color="#888"
          style={styles.icon}
          onPress={setVisiblity}
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* Xử lý đăng nhập */
        }}
      >
        <Text style={styles.buttonText}>Đăng Kí</Text>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: "row",
          marginRight: 20,
          justifyContent: "flex-end",
          alignItems: "center",
          position: "absolute",
          bottom: 60,
          right: 20,
        }}
      >
        <Text style={{ marginRight: 10, fontSize: 17, color: "#db4d9b" }}>
          Login
        </Text>
        <TouchableOpacity
          style={{
            backgroundColor: "#db4d9b",
            height: 50,
            alignItems: "center",
            paddingVertical: 15,

            paddingLeft: 10,
            width: 80,
            borderRadius: 30,
          }}
          onPress={() => navigation.navigate("Login")}
        >
          <Icon name="arrow-right" size={20} color="#fff" style={styles.icon} />
        </TouchableOpacity>
      </View>
      <Image source={require("../assets/login2.png")} style={styles.ima2} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
  ima: {
    width: 200,
    height: 150,
    resizeMode: "contain",
    marginBottom: 30,
  },
  ima2: {
    width: 100,
    padding: 0,
    height: 160,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  inputContainer: {
    flexDirection: "row", // Đặt icon và TextInput nằm ngang
    alignItems: "center", // Căn giữa icon và TextInput
    marginHorizontal: 30,
    marginTop: 25,
    height: 50,
    paddingLeft: 20,
    borderRadius: 30,
    backgroundColor: "#f2f2f2",
    elevation: 30,
  },
  icon: {
    marginRight: 10, // Khoảng cách giữa icon và TextInput
  },
  input: {
    flex: 1, // Đảm bảo TextInput chiếm toàn bộ không gian còn lại
    height: 50,
    paddingLeft: 10, // Khoảng cách giữa chữ trong TextInput và viền TextInput
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#db4d9b",
    paddingVertical: 15,
    marginHorizontal: 30,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 50,
  },
  link: {
    fontSize: 15,
    marginTop: 30,
    color: "#db4d9b",
    textAlign: "center",
  },
});

export default Register;
