import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Avatar } from "react-native-elements";
import CustomListItem from "./CustomListItem";
// import { AntDesign, SimpleLineIcon } from "@expo-vector-icons";
import auth from "./firebase";

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);

  const signOutUser = () => {
    // auth.signOut().then(() => {
    //   navigation.replace("Login");
    // });
  };

  useEffect(() => {
    const unsub = db.collection("chats").onSnapshot((snapshot) =>
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return unsub;
  }, []);

  useLayoutEffect(
    () =>
      navigation.setOptions({
        title: "Signal",
        headerStyle: { backgroundColor: "white" },
        headerTitleStyle: { color: "black" },
        headerTintColor: "#000",
        headerLeft: () => (
          <View style={{ marginLeft: 20 }}>
            <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
              <Avatar source={{ uri: "" }} rounded />
            </TouchableOpacity>
          </View>
        ),
        headerRight: () => {
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 80,
              marginRight: 20,
            }}
          >
            <TouchableOpacity activeOpacity={0.5}>
              {/* <AntDesign name="camerao" size={24} color="#000" /> */}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddChat")}
              activeOpacity={0.5}
            >
              {/* <SimpleLineIcon name="pencil" size={24} color="#000" /> */}
            </TouchableOpacity>
          </View>;
        },
      }),
    [navigation]
  );

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id,
      chatName,
    });
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem
            id={id}
            chatName={chatName}
            key={id}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
