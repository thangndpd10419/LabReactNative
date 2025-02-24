import React, { useState, useEffect } from "react";
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
import * as Font from "expo-font"; // Import expo-font

const LoginScreen = ({ navigation }) => {
  const [state, setState] = useState(false);
  const [fontLoaded, setFontLoaded] = useState(false); // State kiểm tra font đã tải chưa

  const setVisiblity = () => {
    setState((prevState) => !prevState);
  };

  // Tải font
  const fetchFonts = () => {
    return Font.loadAsync({
      font1: require("../assets/fonts/font1.ttf"), // Đường dẫn đến font bạn muốn sử dụng
      font2: require("../assets/fonts/font2.ttf"), // Đường dẫn đến font bạn muốn sử dụng
      font3: require("../assets/fonts/font3.ttf"), // Đường dẫn đến font bạn muốn sử dụng
      font5: require("../assets/fonts/font6.ttf"), // Đường dẫn đến font bạn muốn sử dụng
    });
  };

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true)); // Sau khi tải xong font thì setFontLoaded là true
  }, []);

  if (!fontLoaded) {
    return <Text>Loading...</Text>; // Hiển thị thông báo khi font chưa tải xong
  }

  return (
    <View style={styles.container}>
      <Image source={require("../assets/login1.png")} style={styles.ima} />
      <Text style={{ textAlign: "center", fontSize: 40, fontFamily: "font3" }}>
        HELLO
      </Text>
      <Text
        style={{
          textAlign: "center",
          fontSize: 20,
          marginTop: 20,
          marginBottom: 30,
          fontFamily: "font5",
        }}
      >
        Sign in to your account
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
          placeholder="Mật khẩu"
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

      <Text
        style={{
          fontSize: 13,
          color: "#db4d9b",
          marginTop: 15,
          marginRight: "10%",
          textAlign: "right",
        }}
        onPress={() => {
          /** .....*/
        }}
      >
        Forgot password?
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          /* Xử lý đăng nhập */
        }}
      >
        <Text style={styles.buttonText}>Đăng Nhập</Text>
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
          Register
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
          onPress={() => navigation.navigate("Register")}
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
    width: "100%",
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
    marginRight: 13, // Khoảng cách giữa icon và TextInpu
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

export default LoginScreen;
