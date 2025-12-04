// import React, { useRef, useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   Animated,
//   TouchableOpacity,
// } from "react-native";
// import { Button } from "react-native-paper";

// export default function MeditationScreen() {
//   const bubbleAnim = useRef(new Animated.Value(1)).current;
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [timer, setTimer] = useState(0);
//   const intervalRef = useRef(null);

//   const startBreathing = () => {
//     setIsPlaying(true);

//     Animated.loop(
//       Animated.sequence([
//         Animated.timing(bubbleAnim, {
//           toValue: 1.15,
//           duration: 3000,
//           useNativeDriver: true,
//         }),
//         Animated.timing(bubbleAnim, {
//           toValue: 0.95,
//           duration: 3000,
//           useNativeDriver: true,
//         }),
//       ])
//     ).start();

//     intervalRef.current = setInterval(() => {
//       setTimer((t) => t + 1);
//     }, 1000);
//   };

//   const stopBreathing = () => {
//     setIsPlaying(false);
//     bubbleAnim.stopAnimation();
//     clearInterval(intervalRef.current);
//   };

//   const toggleMeditation = () => {
//     if (isPlaying) stopBreathing();
//     else startBreathing();
//   };

//   const formatTime = (sec) =>
//     `${Math.floor(sec / 60)}:${("0" + (sec % 60)).slice(-2)}`;

//   return (
//     <View style={styles.container}>
//       {/* HEADER */}
//       <Text style={styles.title}>Meditation 🧘‍♂️</Text>
//       <Text style={styles.subtitle}>Relax. Breathe. Be present.</Text>

//       {/* BREATHING BUBBLE */}
//       <Animated.View
//         style={[
//           styles.breathBubble,
//           {
//             transform: [{ scale: bubbleAnim }],
//           },
//         ]}
//       >
//         <Text style={styles.bubbleText}>
//           {isPlaying ? "Breathe..." : "Tap to Begin"}
//         </Text>
//       </Animated.View>

//       {/* PLAY / PAUSE BUTTON */}
//       <TouchableOpacity onPress={toggleMeditation} style={styles.playBtn}>
//         <Text style={styles.playText}>
//           {isPlaying ? "Pause ⏸" : "Start ▶️"}
//         </Text>
//       </TouchableOpacity>

//       {/* TIMER */}
//       <Text style={styles.timerLabel}>Session Time</Text>
//       <Text style={styles.timer}>{formatTime(timer)}</Text>

//       {/* RESET BUTTON */}
//       <Button
//         mode="contained"
//         buttonColor="#F8A94B"
//         textColor="white"
//         style={styles.resetBtn}
//         onPress={() => {
//           stopBreathing();
//           setTimer(0);
//         }}
//       >
//         Reset
//       </Button>
//     </View>
//   );
// }

// // ---------------- STYLES ----------------------------------

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#FFF8ED",
//     alignItems: "center",
//     paddingTop: 60,
//   },

//   title: {
//     fontSize: 32,
//     fontWeight: "bold",
//     color: "#EA8C3C",
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#A48368",
//     marginTop: 6,
//     marginBottom: 40,
//   },

//   // BREATHING BUBBLE
//   breathBubble: {
//     width: 220,
//     height: 220,
//     borderRadius: 150,
//     backgroundColor: "#FFE3C2",
//     justifyContent: "center",
//     alignItems: "center",
//     shadowColor: "#000",
//     shadowOpacity: 0.1,
//     shadowRadius: 10,
//     marginBottom: 40,
//   },
//   bubbleText: {
//     fontSize: 18,
//     color: "#8B6242",
//     fontWeight: "600",
//   },

//   // PLAY BUTTON
//   playBtn: {
//     backgroundColor: "#F8A94B",
//     paddingVertical: 14,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     marginBottom: 20,
//   },
//   playText: {
//     color: "white",
//     fontWeight: "700",
//     fontSize: 18,
//   },

//   // TIMER
//   timerLabel: {
//     fontSize: 16,
//     color: "#7D6B57",
//     marginTop: 20,
//   },
//   timer: {
//     fontSize: 36,
//     fontWeight: "bold",
//     color: "#6B573F",
//     marginVertical: 10,
//   },

//   resetBtn: {
//     marginTop: 20,
//     borderRadius: 20,
//   },
// });
import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Easing,
} from "react-native";

export default function MeditationScreen() {
  const bubbleAnim = useRef(new Animated.Value(1)).current;
  const bgAnim = useRef(new Animated.Value(0)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState("Tap to Start");
  const [timer, setTimer] = useState(0);

  const phases = [
    { label: "Inhale…", duration: 4000 },
    { label: "Hold…", duration: 2000 },
    { label: "Exhale…", duration: 5000 },
  ];

  let intervalRef = useRef(null);

  // BACKGROUND GRADIENT ANIMATION (soft Headspace effect)
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

  // BREATHING CYCLE
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

  const stopBreathing = () => {
    setIsPlaying(false);
    clearInterval(intervalRef.current);
    bubbleAnim.stopAnimation();
    setPhase("Tap to Start");
  };

  // CIRCLE PROGRESS (Headspace style)
  const progressCircle = bubbleAnim.interpolate({
    inputRange: [0.9, 1.15],
    outputRange: ["#F8A94B", "#F6BF73"],
  });

  const toggleMeditation = () => {
    if (isPlaying) stopBreathing();
    else startBreathing();
  };

  return (
    <Animated.View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Meditation 🧘‍♂️</Text>
      <Text style={styles.subtitle}>Relax & follow the guide</Text>

      {/* PROGRESS RING */}
      <Animated.View
        style={[
          styles.progressRing,
          { borderColor: progressCircle },
        ]}
      >
        {/* BREATHING BUBBLE */}
        <Animated.View
          style={[
            styles.bubble,
            { transform: [{ scale: bubbleAnim }] },
          ]}
        >
          <Text style={styles.bubbleText}>{phase}</Text>
        </Animated.View>
      </Animated.View>

      {/* START / PAUSE BUTTON */}
      <TouchableOpacity onPress={toggleMeditation} style={styles.playBtn}>
        <Text style={styles.playText}>
          {isPlaying ? "Pause ⏸" : "Start ▶️"}
        </Text>
      </TouchableOpacity>

      {/* TIMER */}
      <Text style={styles.timerLabel}>Time</Text>
      <Text style={styles.timer}>{timer}s</Text>

      {/* RESET */}
      <TouchableOpacity
        onPress={() => {
          stopBreathing();
          setTimer(0);
        }}
        style={styles.resetBtn}
      >
        <Text style={styles.resetText}>Reset</Text>
      </TouchableOpacity>
    </Animated.View>
  );
}

// ------------------- STYLES ------------------------

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 70,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#E88A3E",
  },
  subtitle: {
    fontSize: 16,
    color: "#9C846B",
    marginBottom: 40,
  },

  progressRing: {
    width: 260,
    height: 260,
    borderRadius: 130,
    borderWidth: 12,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
    borderColor: "#F6BF73",
  },

  bubble: {
    width: 180,
    height: 180,
    borderRadius: 100,
    backgroundColor: "#FFE2C4",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
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
    marginTop: 10,
  },
  timer: {
    fontSize: 38,
    color: "#6E5A47",
    fontWeight: "bold",
    marginVertical: 10,
  },

  resetBtn: {
    backgroundColor: "#FCE9D6",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 10,
  },
  resetText: {
    color: "#A17550",
    fontWeight: "700",
  },
});
