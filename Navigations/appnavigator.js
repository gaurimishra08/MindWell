import * as React from "react";
import { BottomNavigation } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "../Screens/Homescreen";
import JournalScreen from "../Screens/JournalScreen";
import MeditationScreen from "../Screens/MeditationScreen";
import ResourcesScreen from "../Screens/ResourcesScreen";
import SettingsScreen from "../Screens/SettingsScreen";

export default function AppNavigator() {
  const [index, setIndex] = React.useState(0);

  const routes = [
    { key: "home", title: "Home", icon: "home" },
    { key: "journal", title: "Journal", icon: "book" },
    { key: "meditation", title: "Meditation", icon: "leaf" },
    { key: "resources", title: "Resources", icon: "format-list-bulleted" },
    { key: "settings", title: "Settings", icon: "cog" },
  ];

  const renderScene = BottomNavigation.SceneMap({
    home: HomeScreen,
    journal: JournalScreen,
    meditation: MeditationScreen,
    resources: ResourcesScreen,
    settings: SettingsScreen,
  });

  return (
    <NavigationContainer>
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
        activeColor="green"
        inactiveColor="gray"
        barStyle={{ backgroundColor: "white" }}
      />
    </NavigationContainer>
  );
}
