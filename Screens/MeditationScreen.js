import React, { useRef, useState, useEffect } from "react";
import {
  Animated,
  StyleSheet,
  Easing,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Appbar,
  Text,
  Button,
  TouchableRipple,
} from "react-native-paper";

export default function MeditationScreen() {
  const bubbleAnim = useRef(new Animated.Value(1)).current;
  const bgAnim = useRef(new Animated.Value(0)).current;

  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState("Tap to Start");
  const [timer, setTimer] = useState(0);

  const phases = [
    { label: "Inhale…", duration: 4000 },
    { label: "Hold…", duration: 2000 },
    { label: "Exhale…", duration: 5000 },
  ];

  let intervalRef = useRef(null);

  // BACKGROUND GRADIENT ANIMATION
  useEffect(() => {
    Animated.loop(
      Animated.timing(bgAnim, {
        toValue: 1,
        duration: 8000,
        easing: Easing.linear,
        useNativeDriver: false,
      })
    ).start();
  }, []);

  const bgColor = bgAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["#FFF5E8", "#FFEBD2"],
  });

  // BREATHING BUBBLE LOOP
  const animateBubble = () => {
    Animated.sequence([
      Animated.timing(bubbleAnim, {
        toValue: 1.15,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(bubbleAnim, {
        toValue: 0.9,
        duration: 3000,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const startBreathing = () => {
    setIsPlaying(true);
    setTimer(0);
    let index = 0;

    animateBubble();

    intervalRef.current = setInterval(() => {
      setTimer((t) => t + 1);
      setPhase(phases[index].label);

      index = (index + 1) % phases.length;
      animateBubble();
    }, phases[0].duration);
  };

  const stopBreathing = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current);
    bubbleAnim.stopAnimation();
    setPhase("Tap to Start");
  };

  const toggleMeditation = () => {
    isPlaying ? stopBreathing() : startBreathing();
  };

  const progressColor = bubbleAnim.interpolate({
    inputRange: [0.9, 1.15],
    outputRange: ["#F8A94B", "#F6BF73"],
  });

  return (
    <>
      {/* FIXED APP BAR */}
      <Appbar.Header>
        <Appbar.Content title="Meditation" subtitle="Relax your mind ✨" />
      </Appbar.Header>

      {/* SAFE AREA + SCROLLABLE CONTENT */}
      <SafeAreaView style={{ flex: 1 }}>
        <Animated.View
          style={[styles.container, { backgroundColor: bgColor }]}
        >
          <ScrollView
            contentContainerStyle={styles.scrollContent}
            showsVerticalScrollIndicator={false}
          >

            {/* TITLE */}
            <Text style={styles.title}>Meditation 🧘‍♂️</Text>
            <Text style={styles.subtitle}>Relax & follow the guide</Text>

            {/* PROGRESS RING */}
            <Animated.View
              style={[styles.progressRing, { borderColor: progressColor }]}
            >
              <Animated.View
                style={[
                  styles.bubble,
                  { transform: [{ scale: bubbleAnim }] },
                ]}
              >
                <Text style={styles.bubbleText}>{phase}</Text>
              </Animated.View>
            </Animated.View>

            {/* START / PAUSE */}
            <TouchableRipple
              style={styles.playBtn}
              onPress={toggleMeditation}
              rippleColor="rgba(0,0,0,0.2)"
            >
              <Text style={styles.playText}>
                {isPlaying ? "Pause ⏸" : "Start ▶️"}
              </Text>
            </TouchableRipple>

            {/* TIMER */}
            <Text style={styles.timerLabel}>Time</Text>
            <Text style={styles.timer}>{timer}s</Text>

            {/* RESET BUTTON */}
            <Button
              mode="contained"
              textColor="#A17550"
              buttonColor="#FCE9D6"
              style={styles.resetBtn}
              onPress={() => {
                stopBreathing();
                setTimer(0);
              }}
            >
              Reset
            </Button>
          </ScrollView>
        </Animated.View>
      </SafeAreaView>
    </>
  );
}

// ------------------ STYLES ------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  scrollContent: {
    paddingTop: 30,
    paddingBottom: 50,
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#E88A3E",
  },
  subtitle: {
    fontSize: 16,
    color: "#9C846B",
    marginBottom: 30,
  },

  progressRing: {
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  bubble: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: "#FFE2C4",
    justifyContent: "center",
    alignItems: "center",
  },

  bubbleText: {
    fontSize: 20,
    color: "#6E5A47",
    fontWeight: "700",
  },

  playBtn: {
    backgroundColor: "#F8A94B",
    paddingVertical: 14,
    paddingHorizontal: 45,
    borderRadius: 40,
    marginBottom: 15,
  },
  playText: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
  },

  timerLabel: {
    color: "#7D6B57",
    fontSize: 16,
  },
  timer: {
    fontSize: 38,
    color: "#6E5A47",
    fontWeight: "bold",
    marginVertical: 10,
  },

  resetBtn: {
    marginTop: 10,
    borderRadius: 25,
    paddingHorizontal: 20,
  },
});
