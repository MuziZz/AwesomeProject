import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { Component } from "react";
import { View, Text, Settings } from "react-native";
import DetailScreen from "./src/content/screen/DetailScreen";
import HomeScreen from "./src/content/screen/HomeScreen";
import MainStackScreen from "./src/content/screen/Feed";
import ModelScreen from "./src/content/screen/ModelScreen";
import ProfileScreen from "./src/content/screen/ProfileScreen";
import SettingScreen from "./src/content/screen/SettingScreen";
import FeedScreen from "./src/content/screen/Feed";

export default class Root extends Component {
  render() {
    const MainStack = createStackNavigator();
    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        {/* <Tab.Navigator>
          <Tab.Screen
            name="Home"
            component={HomeStackScreen}
            options={{ tabBarLabel: "Home" }}
          />
          <Tab.Screen
            name="Setting"
            component={SettingStackScreen}
            options={{ tabBarLabel: "Setting" }}
          />
        </Tab.Navigator> */}
        <MainStack.Navigator>
          <MainStack.Screen name="Home" component={HomeTab} />
          <MainStack.Screen name="Setting" component={HomeTab} />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }
}
export const HomeStackScreen = () => {
  const HomeStack = createStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Detail" component={DetailScreen} />
    </HomeStack.Navigator>
  );
};
export const SettingStackScreen = () => {
  const SettingStack = createStackNavigator();
  return (
    <SettingStack.Navigator>
      <SettingStack.Screen name="Detail" component={DetailScreen} />
      <SettingStack.Screen name="Profile" component={ProfileScreen} />
    </SettingStack.Navigator>
  );
};
const HomeTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Feed" component={FeedScreen} />
    </Tab.Navigator>
  );
};
