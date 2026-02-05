import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#f6f7f9", padding: 16 },
  row: { flex: 1, flexDirection: "row", gap: 16 },
  col: { flexGrow: 1, flexDirection: "column", gap: 16 },

  panel: {
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e6e8ee",
    borderRadius: 12,
    padding: 14,
    minHeight: 200,
  },

  left: { width: 280 },
  center: { flex: 1, minWidth: 320 },
  right: { width: 280 },

  h2: { fontSize: 22, fontWeight: "700", marginBottom: 8 },
  storyText: { fontSize: 16, lineHeight: 24 },

  btnRow: { flexDirection: "row", gap: 8, marginBottom: 10 },
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

  textarea: { minHeight: 120, textAlignVertical: "top" },
});