import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  StyleSheet,
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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        style={styles.contain}
        source={require("../assets/image.png")}
      >
        <View style={styles.sub}>
          <Text
            style={{
              fontFamily: "Oswald-Regular",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            Đây la font mới
          </Text>
        </View>
        <View style={styles.sub2}>
          <Text style={{ fontFamily: "Oswald-Regular" }}>Hello</Text>
          <View style={styles.sub3}></View>
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
    flex: 3,
    backgroundColor: "white",
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
    backgroundColor: "blue",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
});

export default Bai3;
