import { View, ScrollView, useWindowDimensions } from "react-native";
import { useState } from "react";
import LeftPanel from "@/components/panels/LeftPanel";
import CenterPanel from "@/components/panels/CenterPanel";
import RightPanel from "@/components/panels/RightPanel";
import { styles } from "@/styles/commonStyles";

export default function App() {
  const { width } = useWindowDimensions();

  const isThreeCol = width >= 1000;
  const isTwoCol = width >= 700 && width < 1000;
  const isPhone = width < 700;

  // ⭐ SHARED STATE (the connection)
  const [selectedStoryId, setSelectedStoryId] = useState<number | null>(null);

  return (
    <View style={styles.screen}>
      {isThreeCol && (
        <View style={styles.row}>
          <LeftPanel onSelect={setSelectedStoryId} />
          <CenterPanel storyId={selectedStoryId} />
          <RightPanel />
        </View>
      )}

      {isTwoCol && (
        <View style={styles.col}>
          <LeftPanel onSelect={setSelectedStoryId} />
          <View style={styles.row}>
            <CenterPanel storyId={selectedStoryId} />
            <RightPanel />
          </View>
        </View>
      )}

      {isPhone && (
        <ScrollView contentContainerStyle={styles.col}>
          <LeftPanel onSelect={setSelectedStoryId} />
          <CenterPanel storyId={selectedStoryId} />
          <RightPanel />
        </ScrollView>
      )}
    </View>
  );
}