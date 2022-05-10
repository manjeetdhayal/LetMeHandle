import { Button, Text, View } from "native-base";
import React from "react";

const NotificationsScreen = ({ navigation }) => {
  return (
    <View>
      <Button onPress={() => navigation.navigate("Home")} small primary>
        <Text>Go to Home</Text>
      </Button>
    </View>
  );
};

export default NotificationsScreen;
