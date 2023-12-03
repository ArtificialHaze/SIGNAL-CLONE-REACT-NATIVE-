import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "./RegisterScreen";
import HomeScreen from "./HomeScreen";
import AddChatScreen from "./AddChatScreen";
import ChatScreen from "./ChatScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: "#2c6bed" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddChat" component={AddChatScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
