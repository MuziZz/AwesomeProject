import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class HomeScreen extends React.Component {
  
    render() {
        
        return (
            <View>
                <Text> home screen </Text>
                <Button title="Go to Detail..." onPress={()=>{
                /**  the navigation prop is passed in to every screen component (definition) in stack navigator  */
                this.props.navigation.navigate("Detail");
                }}/>
            </View>
        )
    }
}
