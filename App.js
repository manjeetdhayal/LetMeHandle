import React from "react";
import { NativeBaseProvider } from "native-base";

//importing drawer
import { createDrawerNavigator } from "@react-navigation/drawer";

import { NavigationContainer } from "@react-navigation/native";

//importing screens
import HomeScreen from "./screens/HomeScreen";
import NotificationsScreen from "./screens/NotificationScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        </Drawer.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
