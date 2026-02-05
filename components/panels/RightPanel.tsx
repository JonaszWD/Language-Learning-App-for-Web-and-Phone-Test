import { View, Text, TextInput, Pressable } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { styles } from "@/styles/commonStyles";

export default function RightPanel() {
  const [textInput, setTextInput] = useState("");
  const [selected, setSelected] = useState("");
  const [fieldInput, setFieldInput] = useState("");

  return (
    <View style={[styles.panel, styles.right]}>
      <View style={styles.btnRow}>
        {["Button 1", "Button 2", "Button 3"].map((label) => (
          <Pressable
            key={label}
            style={styles.smallBtn}
            onPress={() => console.log(label)}
          >
            <Text>{label}</Text>
          </Pressable>
        ))}
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
}