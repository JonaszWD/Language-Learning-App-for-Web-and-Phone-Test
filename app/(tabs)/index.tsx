import { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

console.log("Hey");

export default function App() {
  const [story, setStory] = useState("");

  const callPython = async () => {
    const res = await fetch("http://0.0.0.0:8000/make_story", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    const data = await res.json();
    setStory(data.story);
  };

  return (
    <View style={styles.container}>
        <Button title="Generate story (Python)" onPress={callPython} />
        <Text style={styles.text}>{story}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },

  text: {
    fontSize: 20,
    color: '#fff',
  },
});