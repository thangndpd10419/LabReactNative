import "react-native-gesture-handler";
import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Animated } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import Account from "./Acount";
import Like from "./like";

const Tab = createBottomTabNavigator();

const Bai1 = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarLabelStyle: {
            flexDirection: "row",
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
          tabBarStyle: {
            backgroundColor: "white",
            position: "absolute",
            height: 60,
            width: "90%",
            bottom: 16,
            borderRadius: 16,
            marginHorizontal: "5%",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              const scale = useRef(new Animated.Value(1)).current;

              const animateIcon = () => {
                Animated.sequence([
                  Animated.timing(scale, {
                    toValue: 1.5,
                    duration: 300,
                    useNativeDriver: true,
                  }),
                  Animated.timing(scale, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                  }),
                ]).start();
              };

              return (
                <Animated.View
                  style={{ transform: [{ scale }] }}
                  onTouchStart={animateIcon}
                >
                  <Ionicons name="home-outline" color={color} size={size} />
                </Animated.View>
              );
            },
            tabBarLabel: "Trang chủ",
          }}
        />
        <Tab.Screen
          name="Like"
          component={Account}
          options={{
            tabBarIcon: ({ color, size }) => {
              const scale = useRef(new Animated.Value(1)).current;

              const animateIcon = () => {
                Animated.sequence([
                  Animated.timing(scale, {
                    toValue: 1.5,
                    duration: 300,
                    useNativeDriver: true,
                  }),
                  Animated.timing(scale, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                  }),
                ]).start();
              };

              return (
                <Animated.View
                  style={{ transform: [{ scale }] }}
                  onTouchStart={animateIcon}
                >
                  <Ionicons name="heart-outline" color={color} size={size} />
                </Animated.View>
              );
            },
            tabBarLabel: "Yêu thích",
          }}
        />
        <Tab.Screen
          name="Account"
          component={Like}
          options={{
            tabBarIcon: ({ color, size }) => {
              const scale = useRef(new Animated.Value(1)).current;

              const animateIcon = () => {
                Animated.sequence([
                  Animated.timing(scale, {
                    toValue: 1.5,
                    duration: 300,
                    useNativeDriver: true,
                  }),
                  Animated.timing(scale, {
                    toValue: 1,
                    duration: 500,
                    useNativeDriver: true,
                  }),
                ]).start();
              };

              return (
                <Animated.View
                  style={{ transform: [{ scale }] }}
                  onTouchStart={animateIcon}
                >
                  <Ionicons name="person-outline" color={color} size={size} />
                </Animated.View>
              );
            },
            tabBarLabel: "Account",
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Bai1;
