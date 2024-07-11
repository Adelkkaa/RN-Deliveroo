import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

export const HeaderSelect = () => {
  return (
    <TouchableOpacity style={styles.titleContainer}>
      <Text style={styles.title}>Delivery · Now</Text>
      <View style={styles.locationName}>
        <Text variant="Bold" style={styles.subtitle}>
          London
        </Text>
        <Ionicons name="chevron-down" size={20} color={Colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  locationName: {
    flexDirection: "row",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 18,
  },
});
