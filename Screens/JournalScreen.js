import React, { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import {
  Appbar,
  Text,
  Card,
  Button,
  TextInput,
  TouchableRipple,
} from "react-native-paper";

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
    <>
      {/* APP BAR */}
      <Appbar.Header>
        <Appbar.Content title="Journal" subtitle="Reflect & write 🌤️" />
      </Appbar.Header>

      <ScrollView style={styles.container}>
        
        {/* INPUT BUBBLE */}
        <Card style={styles.bigBubble}>
          <Card.Content>

            <Text style={styles.bubbleTitle}>How are you feeling today?</Text>

            <TextInput
              mode="flat"
              placeholder="Write your thoughts... ✏️"
              multiline
              value={entry}
              onChangeText={setEntry}
              style={styles.textInput}
              placeholderTextColor="#9A846A"
              underlineColor="transparent"
              activeUnderlineColor="#F8A94B"
            />

            {/* MOOD SELECTOR */}
            <Text style={styles.sectionLabel}>Choose Mood</Text>
            <View style={styles.row}>
              {moods.map((m) => (
                <TouchableRipple
                  key={m}
                  onPress={() => setSelectedMood(m)}
                  style={[
                    styles.moodBtn,
                    selectedMood === m && styles.moodSelected,
                  ]}
                  rippleColor="rgba(0, 0, 0, .1)"
                >
                  <Text style={styles.moodEmoji}>{m}</Text>
                </TouchableRipple>
              ))}
            </View>

            {/* TAG SELECTOR */}
            <Text style={styles.sectionLabel}>Tag this entry</Text>
            <View style={styles.tagsRow}>
              {tags.map((t) => (
                <TouchableRipple
                  key={t}
                  onPress={() => setSelectedTag(t)}
                  style={[
                    styles.tagBtn,
                    selectedTag === t && styles.tagSelected,
                  ]}
                  rippleColor="rgba(0, 0, 0, .1)"
                >
                  <Text
                    style={{
                      color: selectedTag === t ? "white" : "#4A3F35",
                      fontWeight: "600",
                    }}
                  >
                    #{t}
                  </Text>
                </TouchableRipple>
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

          </Card.Content>
        </Card>

        {/* PREVIOUS ENTRIES */}
        <Text style={styles.sectionTitle}>Previous Entries ✨</Text>

        {entries.length === 0 && (
          <Text style={styles.emptyText}>Start writing your first entry…</Text>
        )}

        {entries.map((item) => (
          <Card key={item.id} style={styles.entryCard}>
            <Card.Content>

              <View style={styles.entryHeader}>
                <Text style={styles.entryDate}>{item.date}</Text>
                <Text style={styles.entryMood}>{item.mood}</Text>
              </View>

              <Text style={styles.entryTag}>#{item.tag}</Text>
              <Text style={styles.entryText}>{item.text}</Text>

            </Card.Content>
          </Card>
        ))}

      </ScrollView>
    </>
  );
}

// ---------------- STYLES ----------------

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFDF8",
    paddingHorizontal: 20,
  },

  // BIG HEADSPACE BUBBLE
  bigBubble: {
    backgroundColor: "#FFEED9",
    padding: 16,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 25,
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
    minHeight: 120,
    padding: 10,
    marginBottom: 15,
  },

  sectionLabel: {
    fontSize: 15,
    fontWeight: "600",
    color: "#6E604F",
    marginBottom: 8,
    marginTop: 5,
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

  // ENTRY CARD
  entryCard: {
    backgroundColor: "#FFEFD9",
    borderRadius: 25,
    marginBottom: 15,
    elevation: 2,
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
