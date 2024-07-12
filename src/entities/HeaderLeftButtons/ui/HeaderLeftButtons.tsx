import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "@/shared/constants/Colors";

export const HeaderLeftButtons = () => {
  return (
    <View style={styles.bar}>
      <TouchableOpacity style={styles.roundButton}>
        <Ionicons name="share-outline" size={24} color={Colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundButton}>
        <Ionicons name="search-outline" size={24} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  roundButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
});
