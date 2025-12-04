import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";

export default function ResourcesScreen() {
  const resources = [
    {
      title: "Understanding Stress",
      emoji: "🌿",
      desc: "Learn how stress affects your mind & simple techniques to calm your system.",
      color: "#EAF7D5",
    },
    {
      title: "How to Sleep Better",
      emoji: "🌙",
      desc: "Gentle guidance to improve sleep quality and night-time peace.",
      color: "#E8E6FF",
    },
    {
      title: "Mindful Breathing 101",
      emoji: "🌬️",
      desc: "A beginner-friendly guide to use your breath as a tool for balance.",
      color: "#FFEAD1",
    },
    {
      title: "Boost Focus",
      emoji: "🎯",
      desc: "Tips to improve concentration and sharpen your mental clarity.",
      color: "#FFF6CC",
    },
    {
      title: "Gratitude Practice",
      emoji: "✨",
      desc: "Daily gratitude habit that improves mood & emotional balance.",
      color: "#FFE3E3",
    },
  ];

  const categories = [
    { title: "Stress Relief", emoji: "🍃", color: "#E1F7E3" },
    { title: "Sleep", emoji: "💤", color: "#E8E4FF" },
    { title: "Focus", emoji: "🔆", color: "#FFF2C8" },
    { title: "Emotions", emoji: "💛", color: "#FFE6D1" },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <Text style={styles.header}>Wellness Resources 🌱</Text>
      <Text style={styles.subheader}>Learn, grow & take mindful steps daily.</Text>

      {/* CATEGORY BUBBLES */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((cat, idx) => (
          <View key={idx} style={[styles.categoryBubble, { backgroundColor: cat.color }]}>
            <Text style={styles.catEmoji}>{cat.emoji}</Text>
            <Text style={styles.catText}>{cat.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* RESOURCE CARDS */}
      {resources.map((res, index) => (
        <TouchableOpacity key={index} style={[styles.card, { backgroundColor: res.color }]}>
          <Text style={styles.cardEmoji}>{res.emoji}</Text>
          <Text style={styles.cardTitle}>{res.title}</Text>
          <Text style={styles.cardDesc}>{res.desc}</Text>

          <View style={styles.readMoreBtn}>
            <Text style={styles.readMoreText}>Read More →</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

// ------------------- STYLES ---------------------

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFDF8",
    padding: 20,
  },

  // HEADER
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#E8893E",
  },
  subheader: {
    fontSize: 15,
    color: "#9A846A",
    marginBottom: 20,
  },

  // CATEGORY BUBBLES
  categoryBubble: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 5,
  },
  catEmoji: {
    fontSize: 24,
  },
  catText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4A3F35",
  },

  // RESOURCE CARD
  card: {
    padding: 22,
    borderRadius: 25,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  cardEmoji: {
    fontSize: 30,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#4A3F35",
  },
  cardDesc: {
    fontSize: 14,
    color: "#6E604F",
    marginVertical: 10,
  },

  readMoreBtn: {
    marginTop: 10,
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 10,
    borderRadius: 15,
    alignSelf: "flex-start",
  },
  readMoreText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4A3F35",
  },
});
