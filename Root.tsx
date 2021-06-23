import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { View, Text, Settings } from "react-native";
import DetailScreen from "./src/content/screen/DetailScreen";
import HomeScreen from "./src/content/screen/HomeScreen";
import MainStackScreen from "./src/content/screen/MainStackScreen";
import ModelScreen from "./src/content/screen/ModelScreen";
import SettingScreen from "./src/content/screen/SettingScreen";

export default class Root extends Component {
  render() {
    const MainStack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    return (
      // <NavigationContainer>
      //   <MainStack.Navigator initialRouteName="Home">
      //     <MainStack.Screen name="Home" component={HomeScreen} />
      //     <MainStack.Screen name="Detail" component={DetailScreen} />
      //   </MainStack.Navigator>
      // </NavigationContainer>

      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeStackScreen}></Tab.Screen>
          <Tab.Screen
            name="Setting"
            component={SettingStackScreen}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
export const HomeStackScreen = () => {
  const HomeStack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    // <NavigationContainer>
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
    // </NavigationContainer>
  );
};
export const SettingStackScreen = () => {
  const SettingStack = createStackNavigator();
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Setting" component={SettingScreen} />
      <SettingStack.Screen name="Detail" component={DetailScreen} />
    </SettingStack.Navigator>
  );
};
