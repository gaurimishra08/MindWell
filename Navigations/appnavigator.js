import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { BottomNavigation } from "react-native-paper";

import HomeScreen from "../Screens/HomeScreen";
import JournalScreen from "../Screens/JournalScreen";
import MeditationScreen from "../Screens/MeditationScreen";
import ResourcesScreen from "../Screens/ResourcesScreen";
import SettingsScreen from "../Screens/SettingsScreen";

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        
        {/* bottom tabs */}
        <Stack.Screen name="Tabs" component={MainTabs} />

        {/* screens opened from Home bubbles */}
        <Stack.Screen name="JournalPage" component={JournalScreen} />
        <Stack.Screen name="MeditationPage" component={MeditationScreen} />
        <Stack.Screen name="ResourcesPage" component={ResourcesScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainTabs({ navigation }) {
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: "home", title: "Home", icon: "home" },
    { key: "journalTab", title: "Journal", icon: "notebook" },
    { key: "meditationTab", title: "Meditation", icon: "flower" },
    { key: "resourcesTab", title: "Resources", icon: "format-list-bulleted" },
    { key: "settings", title: "Settings", icon: "cog" },
  ];

  const renderScene = ({ route }) => {
    switch (route.key) {
      case "home":
        return <HomeScreen navigation={navigation} />; 
      case "journalTab":
        return <JournalScreen />;
      case "meditationTab":
        return <MeditationScreen />;
      case "resourcesTab":
        return <ResourcesScreen />;
      case "settings":
        return <SettingsScreen />;
      default:
        return null;
    }
  };

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#4CAF50"
      inactiveColor="gray"
      barStyle={{ backgroundColor: "white" }}
    />
  );
}
