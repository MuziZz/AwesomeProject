import React from "react";
import { View, Text, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
  return (
    <View>
      <Text>ProfileScreen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Setting")}
      />
    </View>
  );
}
