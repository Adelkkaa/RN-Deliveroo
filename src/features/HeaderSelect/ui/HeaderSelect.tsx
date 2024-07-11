import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

export const HeaderSelect: FC<TouchableOpacityProps> = ({
  style,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.titleContainer, style]} {...props}>
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
