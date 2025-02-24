import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import Home from "./Acount";
import Like from "./like";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { paddingTop: 17, backgroundColor: "white" },
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          fontSize: 16,
          flexDirection: "row",
          alignItems: "center",
        },
      }}
    >
      <Tab.Screen
        name="Chi tiết"
        component={Home}
        options={{
          tabBarLabel: "Chi tiết",
          tabBarIcon: ({ color }) => (
            <Icon name="folderopen" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Like}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon name="setting" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
