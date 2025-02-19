import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./home1";
import DetailsScreen from "./det1";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        options={{ headerShown: false }}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Details"
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
}
