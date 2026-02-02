import { useMemo, useState } from "react";
import * as SQLite from 'expo-sqlite';

import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  FlatList,
  ScrollView,
  useWindowDimensions,
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import GeminiButton from "@/components/GeminiButton";

const db = await SQLite.openDatabaseAsync('databaseName');

export default function App() {
  const { width } = useWindowDimensions();

  // Breakpoints for "web-like" layout vs phone layout
  const isThreeCol = width >= 1000;   // desktop/web/tablet
  const isTwoCol = width >= 700 && width < 1000; // optional: center + right; left stacks
  const isPhone = width < 700;

  const [search, setSearch] = useState("");
  const [textInput, setTextInput] = useState("");
  const [selected, setSelected] = useState("");
  const [fieldInput, setFieldInput] = useState("");


  const results = useMemo(
    () => [
      "Result / possibility 1",
      "Result / possibility 2",
      "Result / possibility 3",
      "Result / possibility 4",
      "Another option",
      "Something else",
    ],
    []
  );

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    if (!s) return results;
    return results.filter((r) => r.toLowerCase().includes(s));
  }, [search, results]);

  const LeftPanel = (
    <View style={[styles.panel, styles.left]}>
      <View style={styles.searchRow}>
        <TextInput
          value={search}
          onChangeText={setSearch}
          placeholder="Search..."
          style={styles.searchInput}
        />
          {/*<Pressable onPress={() => console.log("Add")} style={styles.addButton}>
          <Text style={styles.addButtonText}>＋</Text>
        </Pressable> */}
        <GeminiButton onPress={() => console.log("Add")} />

      </View>

      <FlatList
        data={filtered}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.listGap}
        renderItem={({ item }) => (
          <View style={styles.resultItem}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </View>
  );

  const CenterPanel = (
    <View style={[styles.panel, styles.center]}>
      <ScrollView>
        <Text style={styles.h2}>Plain Text Area</Text>
        <Text style={styles.storyText}>
          This is the center area with plain text. You can replace this with your story
          content or any other text.
          {"\n\n"}
          Tip: On web/tablet you’ll see a 3-column layout. On phone it stacks into a
          single column so it stays readable.
        </Text>
      </ScrollView>
    </View>
  );

  const RightPanel = (
    <View style={[styles.panel, styles.right]}>
      <View style={styles.btnRow}>
        <Pressable style={styles.smallBtn} onPress={() => console.log("Button 1")}>
          <Text>Button 1</Text>
        </Pressable>
        <Pressable style={styles.smallBtn} onPress={() => console.log("Button 2")}>
          <Text>Button 2</Text>
        </Pressable>
        <Pressable style={styles.smallBtn} onPress={() => console.log("Button 3")}>
          <Text>Button 3</Text>
        </Pressable>
      </View>

      <TextInput
        value={textInput}
        onChangeText={setTextInput}
        placeholder="Input..."
        style={styles.input}
      />

      <View style={styles.pickerWrap}>
        <Picker selectedValue={selected} onValueChange={setSelected}>
          <Picker.Item label="Choose an option..." value="" />
          <Picker.Item label="Option A" value="A" />
          <Picker.Item label="Option B" value="B" />
          <Picker.Item label="Option C" value="C" />
        </Picker>
      </View>

      <TextInput
        value={fieldInput}
        onChangeText={setFieldInput}
        placeholder="Field input..."
        style={[styles.input, styles.textarea]}
        multiline
      />
    </View>
  );

  return (
    <View style={styles.screen}>
      {/* Layout rules:
          - 3 columns: Left | Center | Right
          - 2 columns: Center | Right, and Left stacks on top
          - Phone: stack all three
      */}

      {isThreeCol && (
        <View style={styles.row}>
          {LeftPanel}
          {CenterPanel}
          {RightPanel}
        </View>
      )}

      {isTwoCol && (
        <View style={styles.col}>
          {LeftPanel}
          <View style={styles.row}>
            {CenterPanel}
            {RightPanel}
          </View>
        </View>
      )}

      {isPhone && (
        <ScrollView contentContainerStyle={styles.col}>
          {LeftPanel}
          {CenterPanel}
          {RightPanel}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f6f7f9",
    padding: 16,
  },

  row: {
    flex: 1,
    flexDirection: "row",
    gap: 16, // supported in modern RN & Expo Web; if not, replace with margins
  },
  col: {
    flexGrow: 1,
    flexDirection: "column",
    gap: 16,
  },

  panel: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e8ee",
    borderRadius: 12,
    padding: 14,
    overflow: "hidden",
    minHeight: 200,
  },

  left: {
    width: 280,
  },
  center: {
    flex: 1,
    minWidth: 320,
  },
  right: {
    width: 280,
  },

  searchRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#d7dbe6",
    borderRadius: 10,
  },

  addButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: "#111827",
    justifyContent: "center",
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "600",
  },

  listGap: {
    gap: 8,
  },
  resultItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#eef0f6",
    borderRadius: 10,
    backgroundColor: "#fafbff",
  },

  h2: {
    fontSize: 22,
    fontWeight: "700",
    marginBottom: 8,
  },
  storyText: {
    fontSize: 16,
    lineHeight: 24,
  },

  btnRow: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 10,
  },
  smallBtn: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#d7dbe6",
    borderRadius: 10,
    alignItems: "center",
  },

  input: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#d7dbe6",
    borderRadius: 10,
    marginBottom: 10,
  },

  pickerWrap: {
    borderWidth: 1,
    borderColor: "#d7dbe6",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
  },

  textarea: {
    minHeight: 120,
    textAlignVertical: "top", // Android: start at top
  },
});