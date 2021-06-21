import React from 'react'
import { Button, Text, View } from 'react-native'

 
export default class DetailScreen extends React.PureComponent {
    render() {
        return (
            <View>
                <Text> textInComponent </Text>
                <Button title="Go back"  onPress={()=>{
                }} />
            </View>
        )
    }
}
