// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function HomeScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Welcome to the settings  Screen!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
// });
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Switch, List, Divider } from "react-native-paper";

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <List.Section style={{ width: "100%" }}>
        <List.Subheader>Preferences</List.Subheader>

        <List.Item
          title="Dark Mode"
          left={() => <List.Icon icon="theme-light-dark" />}
          right={() => (
            <Switch value={darkMode} onValueChange={() => setDarkMode(!darkMode)} />
          )}
        />

        <Divider />

        <List.Item
          title="Notifications"
          left={() => <List.Icon icon="bell-outline" />}
          right={() => (
            <Switch
              value={notifications}
              onValueChange={() => setNotifications(!notifications)}
            />
          )}
        />

        <Divider />

        <List.Subheader>Account</List.Subheader>

        <List.Item
          title="Profile"
          left={() => <List.Icon icon="account" />}
          onPress={() => console.log("Profile pressed")}
        />

        <List.Item
          title="Privacy"
          left={() => <List.Icon icon="shield-lock-outline" />}
          onPress={() => console.log("Privacy pressed")}
        />
      </List.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
  },
});

