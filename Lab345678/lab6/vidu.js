import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image } from "react-native"; // Thêm import cho Image
import Icon from "react-native-vector-icons/FontAwesome"; // Thêm import cho Icon
import Hom from "./hom";
import Artic from "./artic";
import Bai1 from "./bai1";

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          backgroundColor: "#cacfcf",
          padding: 20,
          alignItems: "center",
          width: "100%",
          borderRadius: 10,
        }}
      >
        <Image
          source={require("../assets/ima.png")}
          style={{ width: 100, height: 100, borderRadius: 50 }}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff",
            marginTop: 10,
          }}
        >
          Nguyen Đ.Thang
        </Text>
        <Text style={{ color: "#fff", marginTop: 10 }}>ndthang@gmail.com</Text>
      </View>
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate("Home")}
        icon={() => <Icon name="home" size={23} color="#000" />}
      />
      <DrawerItem
        label="Article"
        onPress={() => props.navigation.navigate("Article")}
        icon={() => <Icon name="newspaper-o" size={23} color="#000" />}
      />
      <DrawerItem
        label="Bai1"
        onPress={() => props.navigation.navigate("Bai1")}
        icon={() => <Icon name="book" size={23} color="#000" />}
      />
      <View
        style={{
          height: 1,
          backgroundColor: "#ccc", // Màu cho đường ngang
          marginVertical: 10, // Khoảng cách trên và dưới đường ngang
        }}
      />
      <Text style={{ textAlign: "left", marginVertical: 10, fontSize: 16 }}>
        Lab6
      </Text>
    </DrawerContentScrollView>
  );
};

export default function App3() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#cacfcf", // Màu nền của header
        },
        headerTintColor: "#fff", // Màu chữ của header
        headerTitleStyle: {
          fontWeight: "bold", // Cỡ chữ của header
          fontSize: 25,
        },
        drawerStyle: {
          backgroundColor: "white", // Màu nền của drawer
          width: 240, // Chiều rộng của drawer
        },
        drawerLabelStyle: {
          fontSize: 15, // Kích thước chữ trong drawer
        },
      }}
    >
      <Drawer.Screen name="Home" component={Hom} />
      {/* tên màn hình là Home sử dụng trong Drawer ItemItem */}
      <Drawer.Screen name="Article" component={Artic} />
      <Drawer.Screen name="Bai1" component={Bai1} />
    </Drawer.Navigator>
  );
}
