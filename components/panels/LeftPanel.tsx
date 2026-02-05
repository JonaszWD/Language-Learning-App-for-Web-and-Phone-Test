import { View } from "react-native";
import StorySearch from "@/components/StorySearch";
import { styles } from "@/styles/commonStyles";

export default function LeftPanel({
      onSelect,
    }: {
      onSelect: (id: number) => void;
    }) {
    return (
    <View style={[styles.panel, styles.left]}>
      <StorySearch />
    </View>
  );
}