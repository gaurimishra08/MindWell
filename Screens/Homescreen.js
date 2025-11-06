import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button } from "react-native-paper";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Welcome Card */}
      <Card style={styles.welcomeCard}>
        <Card.Content>
          <Title style={styles.title}>Welcome to MindWell!</Title>
          <Paragraph style={styles.subtitle}>
            Explore your journey towards mindfulness and mental wellness.
          </Paragraph>
        </Card.Content>
      </Card>

      {/* Journal Card */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Daily Journal</Title>
          <Paragraph>Reflect on your thoughts and track your progress.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log("Go to Journal")}>
            Go to Journal
          </Button>
        </Card.Actions>
      </Card>

      {/* Meditation Card */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Meditation</Title>
          <Paragraph>Start a calming meditation session to relax.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log("Start Meditation")}>
            Start Meditation
          </Button>
        </Card.Actions>
      </Card>

      {/* Resources Card */}
      <Card style={styles.card}>
        <Card.Content>
          <Title>Resources</Title>
          <Paragraph>Read helpful tips and articles to improve your wellness.</Paragraph>
        </Card.Content>
        <Card.Actions>
          <Button mode="contained" onPress={() => console.log("View Resources")}>
            View Resources
          </Button>
        </Card.Actions>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F0F4F7",
  },
  welcomeCard: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#E0F7FA",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
  },
  card: {
    marginBottom: 15,
  },
});
