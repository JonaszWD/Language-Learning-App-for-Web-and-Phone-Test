import { StyleSheet, View, Pressable } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = {
  onPress?: () => void;
};

export default function GeminiButton({ onPress }: Props) {
    return (
      <View style={styles.circleButtonContainer}>
        <Pressable style={styles.circleButton} onPress={onPress}>
          <MaterialIcons name="add" size={19} color="#25292e" />
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 42,
    height: 42,
    marginHorizontal: 30,
    borderWidth: 2,
    borderColor: '#ffd33d',
    borderRadius: 21,
    padding: 1,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 21,
    backgroundColor: '#fff',
    padding:1,
  },
});
