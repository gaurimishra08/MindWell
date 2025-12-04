import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import HomeScreen from "../Screens/Homescreen";
import JournalScreen from "../Screens/JournalScreen";
import MeditationScreen from "../Screens/MeditationScreen";
import ResourcesScreen from "../Screens/ResourcesScreen";
import SettingsScreen from "../Screens/SettingsScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // hides top header
          tabBarIcon: ({ size, color }) => {
            let iconName;

            if (route.name === "Home") iconName = "home";
            else if (route.name === "Journal") iconName = "book";
            else if (route.name === "Meditation") iconName = "leaf";
            else if (route.name === "Resources") iconName = "list";
            else if (route.name === "Settings") iconName = "settings";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "green",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Journal" component={JournalScreen} />
        <Tab.Screen name="Meditation" component={MeditationScreen} />
        <Tab.Screen name="Resources" component={ResourcesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

