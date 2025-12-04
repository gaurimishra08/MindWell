import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import {
  Appbar,
  Text,
  Card,
  TouchableRipple,
} from "react-native-paper";

export default function HomeScreen({ navigation }) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // SPLASH SCREEN (Paper Text)
  if (showWelcome) {
    return (
      <Card style={styles.splash}>
        <Card.Content>
          <Text style={styles.splashTitle}>Welcome to MindWell 🌤️</Text>
          <Text style={styles.splashSub}>Find your calm today.</Text>
        </Card.Content>
      </Card>
    );
  }

  return (
    <>
      {/* TOP APPBAR */}
      <Appbar.Header>
        <Appbar.Content title="MindWell" subtitle="Find your calm 🌿" />
      </Appbar.Header>

      <ScrollView style={styles.container}>

        {/* HEADER */}
        <Text style={styles.headerTitle}>Good to see you 🌿</Text>
        <Text style={styles.headerSub}>What would you like to explore?</Text>

        {/* BUBBLE BUTTON – MEDIATION */}
        <TouchableRipple
          style={[styles.bigBubble, { backgroundColor: "#FFD8B0" }]}
          onPress={() => navigation.navigate("Meditation")}
          rippleColor="rgba(0, 0, 0, .1)"
        >
          <Card style={styles.transparentCard}>
            <Card.Content>
              <Text style={styles.bubbleEmoji}>🧘‍♀️</Text>
              <Text style={styles.bubbleTitle}>Meditation</Text>
              <Text style={styles.bubbleSub}>Guided sessions to relax</Text>
            </Card.Content>
          </Card>
        </TouchableRipple>

        {/* BUBBLE BUTTON – JOURNAL */}
        <TouchableRipple
          style={[styles.bigBubble, { backgroundColor: "#FFEFCB" }]}
          onPress={() => navigation.navigate("Journal")}
          rippleColor="rgba(0, 0, 0, .1)"
        >
          <Card style={styles.transparentCard}>
            <Card.Content>
              <Text style={styles.bubbleEmoji}>📖</Text>
              <Text style={styles.bubbleTitle}>Journal</Text>
              <Text style={styles.bubbleSub}>
                Reflect and write your thoughts
              </Text>
            </Card.Content>
          </Card>
        </TouchableRipple>

        {/* BUBBLE BUTTON – RESOURCES */}
        <TouchableRipple
          style={[styles.bigBubble, { backgroundColor: "#E3F5CE" }]}
          onPress={() => navigation.navigate("Resources")}
          rippleColor="rgba(0, 0, 0, .1)"
        >
          <Card style={styles.transparentCard}>
            <Card.Content>
              <Text style={styles.bubbleEmoji}>🌼</Text>
              <Text style={styles.bubbleTitle}>Wellness Tips</Text>
              <Text style={styles.bubbleSub}>Read calming content</Text>
            </Card.Content>
          </Card>
        </TouchableRipple>

        {/* SECTION TITLE */}
        <Text style={styles.sectionTitle}>Recommended for you ✨</Text>

        {/* RECOMMENDED CARDS */}
        <Card style={styles.recoCard}>
          <Card.Content>
            <Text style={styles.recoTitle}>5-min Relaxation</Text>
            <Text style={styles.recoSub}>A quick session to refresh your mind</Text>
          </Card.Content>
        </Card>

        <Card style={styles.recoCard}>
          <Card.Content>
            <Text style={styles.recoTitle}>Evening Reflection</Text>
            <Text style={styles.recoSub}>End your day with gratitude</Text>
          </Card.Content>
        </Card>

      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  // SPLASH
  splash: {
    flex: 1,
    justifyContent: "center",
    margin: 20,
    alignItems: "center",
    backgroundColor: "#FFF7EA",
    borderRadius: 20,
  },
  splashTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF9F50",
    textAlign: "center",
  },
  splashSub: {
    fontSize: 16,
    color: "#AD7740",
    marginTop: 10,
    textAlign: "center",
  },

  container: {
    backgroundColor: "#FFFDF8",
    paddingHorizontal: 20,
    paddingTop: 15,
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#556B2F",
  },
  headerSub: {
    fontSize: 15,
    color: "#7A8E54",
    marginBottom: 15,
  },

  // BUBBLE BUTTONS
  bigBubble: {
    borderRadius: 30,
    padding: 0,
    marginBottom: 20,
    elevation: 3,
    overflow: "hidden",
  },
  transparentCard: {
    backgroundColor: "transparent",
    elevation: 0,
  },
  bubbleEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },
  bubbleTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#4A4A4A",
  },
  bubbleSub: {
    fontSize: 14,
    color: "#6D6D6D",
    marginTop: 4,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#556B2F",
    marginTop: 20,
    marginBottom: 10,
  },

  recoCard: {
    backgroundColor: "#FFF2D7",
    marginBottom: 15,
    borderRadius: 20,
    elevation: 2,
  },
  recoTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#D47A2A",
  },
  recoSub: {
    fontSize: 14,
    color: "#7A6B58",
  },
});
