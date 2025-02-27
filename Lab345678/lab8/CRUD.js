import { NavigationContainer } from "@react-navigation/native";
import listUser from "./listUser";
import addUser from "./addUser";

const { createStackNavigator } = require("@react-navigation/stack");

const Crud = () => {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ListUser">
        <Stack.Screen name="ListUser" component={listUser} />
        <Stack.Screen name="AddUser" component={addUser} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Crud;
