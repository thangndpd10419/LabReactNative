import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
const Bai3 = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      "Oswald-Regular": require("../assets/fonts/Oswald-Regular.ttf"),
    });
  };

  useEffect(() => {
    fetchFonts().then(() => setFontLoaded(true));
  }, []);

  if (!fontLoaded) {
    return <AppLoading />;
  }

  const handlePress = () => {
    Alert.alert("Button Pressed", "You pressed the button!");
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.contain}
        source={require("../assets/image.png")}
      >
        <View style={styles.sub}>
          <Text
            style={{
              fontFamily: "Oswald-Medium",
              fontSize: 30,
              color: "#dddae0",
              fontWeight: "bold",
            }}
          >
            LAB5 BAI3
          </Text>
        </View>
        <View style={styles.sub2}>
          <Text style={styles.text}>Ephemeral</Text>
          <Text
            style={{
              margin: 10,
              fontWeight: "bold",
            }}
          >
            Information:{" "}
          </Text>
          <Text style={{ margin: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Sed do eiusmod temporLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Sed do eiusmod tempor.
          </Text>
          <View style={styles.sub3}>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                marginLeft: 30,
                fontSize: 20,
              }}
            >
              $100/d
            </Text>
            <TouchableOpacity
              onPress={handlePress}
              style={{
                padding: 10,
                marginRight: 20,
                backgroundColor: "white",
                borderRadius: 15,
              }}
            >
              <Text
                style={{ color: "#ae9df2", fontSize: 20, fontWeight: "bold" }}
              >
                Buy now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: "column",
    resizeMode: "cover",
  },
  sub: {
    flex: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  sub2: {
    flex: 4,
    backgroundColor: "#e0e0e0",
    borderTopEndRadius: 40,
    borderTopStartRadius: 40,
    flexDirection: "column",
    padding: 10,
  },
  sub3: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 80,
    backgroundColor: "#ae9df2",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: {
    fontFamily: "Oswald-Regular",
    margin: 20,
    marginLeft: 40,
    fontSize: 20,
    color: "#ae9df2",
  },
});

export default Bai3;
