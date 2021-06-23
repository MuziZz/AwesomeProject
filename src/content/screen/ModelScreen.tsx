import React from "react";
import { View, Text, Button } from "react-native";

export default function ModelScreen({ navigation }) {
  return (
    <View>
      <Text>ModelScreen</Text>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}
