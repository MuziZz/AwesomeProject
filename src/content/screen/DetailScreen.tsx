import React from "react";
import { Button, Text, View } from "react-native";

export default class DetailScreen extends React.Component {
  render() {
    const { navigation, route } = this.props;
    // const { itemId, otherParams } = route.params;
    return (
      <View>
        {/* <Text> itemId:{JSON.stringify(itemId)} </Text>
        <Text>otherParams: {JSON.stringify(otherParams)} </Text> */}
        <Button
          title="Go to Home"
          onPress={() =>
            navigation.navigate({
              name: "Home",
              params: { post: "123" },
              merge: true
            })
          }
        />
        <Button
          title="Go to Detail again..."
          onPress={() => {
            navigation.push("Home");
          }}
        />
        <Button
          title="Go back"
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
    );
  }
}
