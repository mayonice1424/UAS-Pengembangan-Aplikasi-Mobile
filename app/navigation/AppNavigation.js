import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  MaterialIcons,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Movies from "../screens/Movies";
import Details from "../screens/Details";
import Search from "../screens/Search";

const Tab = createBottomTabNavigator();
const AppNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="List Film"
        component={Movies}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <Entypo name="video" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <FontAwesome5 name="search" size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Details"
        component={Details}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons name="library-books" size={size} color={color} />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
export default AppNavigation;
