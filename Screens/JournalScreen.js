

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-paper";

export default function JournalScreen() {
  const [entry, setEntry] = useState("");
  const [entries, setEntries] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  const moods = ["😄", "🙂", "😐", "😞", "😭"];
  const tags = ["Gratitude", "Stress", "Reflection", "Goals", "Life"];

  const saveEntry = () => {
    if (!entry.trim() || !selectedMood || !selectedTag) return;
    const newItem = {
      id: Date.now(),
      text: entry,
      date: new Date().toLocaleDateString(),
      mood: selectedMood,
      tag: selectedTag,
    };
    setEntries([newItem, ...entries]);
    setEntry("");
    setSelectedMood(null);
    setSelectedTag(null);
  };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Journal 🌤️</Text>
        <Text style={styles.headerSub}>A calm space to reflect & write.</Text>
      </View>

      {/* INPUT BUBBLE */}
      <View style={styles.bigBubble}>
        <Text style={styles.bubbleTitle}>How are you feeling today?</Text>

        <TextInput
          style={styles.textInput}
          placeholder="Write your thoughts... ✏️"
          placeholderTextColor="#9A846A"
          multiline
          value={entry}
          onChangeText={setEntry}
        />

        {/* MOOD */}
        <Text style={styles.sectionLabel}>Choose Mood</Text>
        <View style={styles.row}>
          {moods.map((m) => (
            <TouchableOpacity
              key={m}
              onPress={() => setSelectedMood(m)}
              style={[
                styles.moodBtn,
                selectedMood === m && styles.moodSelected,
              ]}
            >
              <Text style={styles.moodEmoji}>{m}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* TAGS */}
        <Text style={styles.sectionLabel}>Tag this entry</Text>
        <View style={styles.tagsRow}>
          {tags.map((t) => (
            <TouchableOpacity
              key={t}
              onPress={() => setSelectedTag(t)}
              style={[
                styles.tagBtn,
                selectedTag === t && styles.tagSelected,
              ]}
            >
              <Text
                style={{
                  color: selectedTag === t ? "white" : "#4A3F35",
                  fontWeight: "600",
                }}
              >
                #{t}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <Button
          mode="contained"
          buttonColor="#F8A94B"
          textColor="white"
          style={styles.saveBtn}
          onPress={saveEntry}
        >
          Save Entry
        </Button>
      </View>

      {/* PREVIOUS ENTRIES */}
      <Text style={styles.sectionTitle}>Previous Entries ✨</Text>

      {entries.length === 0 && (
        <Text style={styles.emptyText}>Start writing your first entry…</Text>
      )}

      {entries.map((item) => (
        <View key={item.id} style={styles.entryCard}>
          <View style={styles.entryHeader}>
            <Text style={styles.entryDate}>{item.date}</Text>
            <Text style={styles.entryMood}>{item.mood}</Text>
          </View>

          <Text style={styles.entryTag}>#{item.tag}</Text>
          <Text style={styles.entryText}>{item.text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

// ---------------- STYLES ----------------

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFDF8",
    paddingHorizontal: 20,
  },

  // HEADER
  header: {
    paddingVertical: 25,
  },
  headerTitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#F3953E",
  },
  headerSub: {
    fontSize: 15,
    color: "#9A846A",
    marginTop: 6,
  },

  // BIG HEADSPACE BUBBLE
  bigBubble: {
    backgroundColor: "#FFEED9",
    padding: 20,
    borderRadius: 30,
    marginBottom: 25,
    shadowColor: "#000",
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 4,
  },
  bubbleTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#4D4338",
    marginBottom: 10,
  },

  textInput: {
    backgroundColor: "#FFF6EB",
    borderRadius: 18,
    padding: 15,
    fontSize: 15,
    color: "#4D4338",
    minHeight: 120,
    textAlignVertical: "top",
    marginBottom: 15,
  },

  sectionLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6E604F",
    marginBottom: 8,
  },

  // MOODS
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  moodBtn: {
    padding: 10,
    backgroundColor: "#FFF6EB",
    borderRadius: 13,
    marginRight: 8,
  },
  moodSelected: {
    backgroundColor: "#F8A94B",
  },
  moodEmoji: {
    fontSize: 24,
  },

  // TAGS
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 15,
  },
  tagBtn: {
    backgroundColor: "#FFF6EB",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  tagSelected: {
    backgroundColor: "#F8A94B",
  },

  saveBtn: {
    marginTop: 10,
    borderRadius: 20,
  },

  // LIST TITLE
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#556B2F",
    marginBottom: 10,
  },

  emptyText: {
    textAlign: "center",
    color: "#9A846A",
    fontSize: 14,
    marginBottom: 20,
  },

  // ENTRY CARD (HEADSPACE STYLE)
  entryCard: {
    backgroundColor: "#FFEFD9",
    padding: 18,
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  entryHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  entryDate: {
    fontSize: 12,
    color: "#A78D74",
  },
  entryMood: {
    fontSize: 22,
  },
  entryTag: {
    color: "#D47A2A",
    fontWeight: "700",
    marginVertical: 6,
  },
  entryText: {
    fontSize: 16,
    color: "#4A3F35",
    lineHeight: 22,
  },
});
