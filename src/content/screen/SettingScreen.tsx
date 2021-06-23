import React from "react";
import { View, Text, Button } from "react-native";

export default function SettingScreen({ navigation }) {
  //   const { navigation } = props;
  return (
    <View>
      <Text>Setting Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
}
