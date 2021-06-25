import React, { Component } from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomerView from "./CustomerView";

export default class HomeScreen extends React.Component {
  render() {
    const { navigation, route } = this.props;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> home screen </Text>
        <Button
          title="Go to Detail..."
          onPress={() => {
            /**  the navigation prop is passed in to every screen component (definition) in stack navigator  */
            navigation.navigate("Detail", {
              itemId: 86,
              otherParams: "anything you want here"
            });
          }}
        />
        <Button
          onPress={() => navigation.navigate("MyModal")}
          title="Open Modal"
        />
      </View>
    );
  }
}
