import { View, Text, ScrollView } from "react-native";
import { styles } from "@/styles/commonStyles";
import StoryTextBox from "@/components/StoryTextBox";

export default function CenterPanel({
  storyId,
}: {
  storyId: number | null;
}) {
      return (
        <View style={[styles.panel, styles.center]}>
          <ScrollView>
            <StoryTextBox storyId={null} />
          </ScrollView>
        </View>
      );
  }
