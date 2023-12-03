import { StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Button, Input } from "react-native-elements";
import { Icon } from "react-native-vector-icons";

const AddChatScreen = ({ navigation }) => {
  const [input, setInput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Add a new Chat",
      headerBackTitle: "Chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({ chatName: input })
      .then(() => {
        navigation.goBack();
      })
      .catch((err) => alert(err.message));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a Chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name="wechat" type="antdesign" size={24} color={"black"} />
        }
      />
      <Button
        disabled={!input}
        onPress={createChat}
        title={"Create a new Chat"}
      />
    </View>
  );
};

export default AddChatScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    height: "100%",
  },
});
