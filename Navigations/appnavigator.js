import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import JournalScreen from "../Screens/JournalScreen";
import MeditationScreen from "../Screens/MeditationScreen";
import ResourcesScreen from "../Screens/ResourcesScreen";
import SettingsScreen from "../Screens/SettingsScreen";
import HomeScreen from "../Screens/Homescreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* Tabs */}
        <Stack.Screen name="Tabs" component={MainTabs} />

        {/* Screens opened from Home bubbles */}
        <Stack.Screen name="JournalPage" component={JournalScreen} />
        <Stack.Screen name="MeditationPage" component={MeditationScreen} />
        <Stack.Screen name="ResourcesPage" component={ResourcesScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,  // you use your own Appbar in each screen
        tabBarActiveTintColor: "#4CAF50",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "white" }
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Journal"
        component={JournalScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="notebook" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Meditation"
        component={MeditationScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="flower" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Resources"
        component={ResourcesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
