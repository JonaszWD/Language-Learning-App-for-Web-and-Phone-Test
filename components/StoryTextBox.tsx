import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const API_BASE = "http://127.0.0.1:8000";

export default function StoryTextBox({ storyId }: { storyId: number | null }) {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  useEffect(() => {
    if (!storyId) {
      setTitle("");
      setStory("");
      return;
    }

    (async () => {
      const res = await fetch(`${API_BASE}/words/get_story${storyId}`);
      const data = await res.json();
      setTitle(data.title ?? "");
      setStory(data.story ?? "");
    })().catch(console.error);
  }, [storyId]);

  return (
    <View>
      <Text style={styles.h2}>{title || "Select a story"}</Text>
      <TextInput
        value={story}
        editable={false}
        multiline
        placeholder="Story will appear here..."
        style={styles.textbox}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  h2: { fontSize: 18, fontWeight: "700", marginBottom: 8 },
  textbox: {
    minHeight: 220,
    borderWidth: 1,
    borderColor: "#d7dbe6",
    borderRadius: 10,
    padding: 12,
    textAlignVertical: "top",
    backgroundColor: "white",
  },
});