import React from "react";
import { View, Text, TouchableOpacity, NativeModules } from "react-native";
const methodTool = NativeModules.CustomerView;
export default function TestView() {
  console.log(JSON.stringify(NativeModules));
  console.log(methodTool);
  return (
    <View>
      <TouchableOpacity onPress={() => methodTool.setUserName("我是RN")}>
        <Text>welcome To RN </Text>
      </TouchableOpacity>
    </View>
  );
}
