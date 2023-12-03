import { KeyboardAvoidingView, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Input, Image } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import { auth } from "./firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .catch((error) => alert(error.message));
  };

  useEffect(() => {
    // const unsubscribe = auth.onAuthStateChange((authUser) => {
    //   if (authUser) {
    //     navigation.replace("Home");
    //   }
    // });
    // return () => {
    //   unsubscribe();
    // };
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Image source={{ uri: "" }} style={{ width: 200, height: 200 }} />
      <View style={styles.inputContainer}>
        <Input
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email.."
          style={{ outline: "none" }}
          autoFocus
        />
        <Input
          style={{ outline: "none" }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          placeholder="Password.."
          secureTextEntry
          onSubmitEditing={signIn}
        />
      </View>
      <Button onPress={signIn} containerStyle={styles.button} title={"Login"} />
      <Button
        onPress={() => navigation.navigate("Register")}
        containerStyle={styles.button}
        title={"Register"}
        type="outline"
      />
      <View style={{ height: 200 }} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  inputContainer: { width: 300 },
  button: { width: 200, marginTop: 10 },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
});
