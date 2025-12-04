// import React, { useEffect, useState } from "react";
// import { View, Text, StyleSheet, ScrollView } from "react-native";
// import { Card, Button } from "react-native-paper";

// export default function HomeScreen({ navigation }) {
//   const [showWelcome, setShowWelcome] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => setShowWelcome(false), 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   // -------------------- WELCOME SCREEN --------------------
//   if (showWelcome) {
//     return (
//       <View style={styles.welcomeContainer}>
//         <Text style={styles.welcomeTitle}>MindWell ✨</Text>
//         <Text style={styles.welcomeSubtitle}>
//           Breathe. Relax. Find your calm.
//         </Text>
//       </View>
//     );
//   }

//   // -------------------- MAIN UI --------------------
//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {/* Header */}
//       <Card style={styles.headerCard}>
//         <Card.Content>
//           <Text style={styles.mainTitle}>Welcome Back 🌿</Text>
//           <Text style={styles.mainSubtitle}>
//             Choose your mindfulness activity today.
//           </Text>
//         </Card.Content>
//       </Card>

//       {/* Journal */}
//       <Card style={styles.featureCard}>
//         <Card.Title title="Daily Journal ✏️" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           <Text style={styles.descText}>
//             Reflect and write your thoughts with clarity.
//           </Text>
//         </Card.Content>
//         <Card.Actions>
//           <Button
//             mode="contained"
//             buttonColor="#7A8E54"
//             textColor="white"
//             onPress={() => navigation.navigate("Journal")}
//           >
//             Open Journal
//           </Button>
//         </Card.Actions>
//       </Card>

//       {/* Meditation */}
//       <Card style={styles.featureCard}>
//         <Card.Title title="Meditation 🧘‍♀️" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           <Text style={styles.descText}>
//             Find peace through guided meditation.
//           </Text>
//         </Card.Content>
//         <Card.Actions>
//           <Button
//             mode="contained"
//             buttonColor="#7A8E54"
//             textColor="white"
//             onPress={() => navigation.navigate("Meditation")}
//           >
//             Start Session
//           </Button>
//         </Card.Actions>
//       </Card>

//       {/* Resources */}
//       <Card style={styles.featureCard}>
//         <Card.Title title="Wellness Resources 📚" titleStyle={styles.cardTitle} />
//         <Card.Content>
//           <Text style={styles.descText}>
//             Learn techniques to improve your emotional well-being.
//           </Text>
//         </Card.Content>
//         <Card.Actions>
//           <Button
//             mode="contained"
//             buttonColor="#7A8E54"
//             textColor="white"
//             onPress={() => navigation.navigate("Resources")}
//           >
//             Explore
//           </Button>
//         </Card.Actions>
//       </Card>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   // 🌿 Welcome Screen
//   welcomeContainer: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#FAF8F1",
//   },
//   welcomeTitle: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#556B2F",
//   },
//   welcomeSubtitle: {
//     marginTop: 8,
//     fontSize: 16,
//     color: "#7A8E54",
//   },

//   // 🌿 Main Container
//   container: {
//     padding: 20,
//     backgroundColor: "#FAF8F1",
//   },

//   // 🌿 Header Card
//   headerCard: {
//     backgroundColor: "#E8E2D0",
//     paddingVertical: 18,
//     marginBottom: 20,
//     borderRadius: 12,
//   },
//   mainTitle: {
//     fontSize: 26,
//     fontWeight: "600",
//     color: "#5B4E3B",
//   },
//   mainSubtitle: {
//     fontSize: 14,
//     color: "#7A8E54",
//     marginTop: 4,
//   },

//   // 🌿 Feature Cards
//   featureCard: {
//     backgroundColor: "#F5F5DC",
//     padding: 12,
//     borderRadius: 12,
//     marginBottom: 15,
//     elevation: 2,
//   },
//   cardTitle: {
//     color: "#556B2F",
//     fontWeight: "bold",
//     fontSize: 18,
//   },
//   descText: {
//     color: "#5B4E3B",
//     marginBottom: 10,
//     fontSize: 14,
//   },
// });
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  // HEADSPACE STYLE SPLASH
  if (showWelcome) {
    return (
      <View style={styles.splash}>
        <Text style={styles.splashTitle}>Welcome to MindWell 🌤️</Text>
        <Text style={styles.splashSub}>Find your calm today.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Good to see you 🌿</Text>
        <Text style={styles.headerSub}>What would you like to explore?</Text>
      </View>

      {/* BIG BUBBLE BUTTONS (HEADSPACE STYLE) */}
      <TouchableOpacity
        style={[styles.bigBubble, { backgroundColor: "#FFD8B0" }]}
        onPress={() => navigation.navigate("Meditation")}
      >
        <Text style={styles.bubbleEmoji}>🧘‍♀️</Text>
        <Text style={styles.bubbleTitle}>Meditation</Text>
        <Text style={styles.bubbleSub}>Guided sessions to relax</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.bigBubble, { backgroundColor: "#FFEFCB" }]}
        onPress={() => navigation.navigate("Journal")}
      >
        <Text style={styles.bubbleEmoji}>📖</Text>
        <Text style={styles.bubbleTitle}>Journal</Text>
        <Text style={styles.bubbleSub}>Reflect and write your thoughts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.bigBubble, { backgroundColor: "#E3F5CE" }]}
        onPress={() => navigation.navigate("Resources")}
      >
        <Text style={styles.bubbleEmoji}>🌼</Text>
        <Text style={styles.bubbleTitle}>Wellness Tips</Text>
        <Text style={styles.bubbleSub}>Read calming content</Text>
      </TouchableOpacity>

      {/* SMALL SECTION LIKE HEADSPACE */}
      <Text style={styles.sectionTitle}>Recommended for you ✨</Text>

      <View style={styles.recoCard}>
        <Text style={styles.recoTitle}>5-min Relaxation</Text>
        <Text style={styles.recoSub}>A quick session to refresh your mind</Text>
      </View>

      <View style={styles.recoCard}>
        <Text style={styles.recoTitle}>Evening Reflection</Text>
        <Text style={styles.recoSub}>End your day with gratitude</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // SPLASH
  splash: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF7EA",
  },
  splashTitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#FF9F50",
  },
  splashSub: {
    fontSize: 16,
    color: "#AD7740",
    marginTop: 10,
  },

  container: {
    backgroundColor: "#FFFDF8",
    paddingHorizontal: 20,
  },

  // HEADER
  header: {
    paddingVertical: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#556B2F",
  },
  headerSub: {
    fontSize: 15,
    color: "#7A8E54",
    marginTop: 5,
  },

  // BIG HEADSPACE BUBBLE BUTTONS
  bigBubble: {
    borderRadius: 30,
    padding: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 4,
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

  // SECTION TITLE
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#556B2F",
    marginTop: 20,
    marginBottom: 12,
  },

  recoCard: {
    backgroundColor: "#FFF2D7",
    padding: 18,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
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
