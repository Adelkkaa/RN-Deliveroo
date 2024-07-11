import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Colors } from "@/shared/constants/Colors";

export const HeaderBackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.button}
    >
      <Ionicons name="close-outline" size={28} color={Colors.primary} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    ...Platform.select({
      android: {
        marginTop: 3,
        marginRight: 20,
      },
    }),
  },
});
