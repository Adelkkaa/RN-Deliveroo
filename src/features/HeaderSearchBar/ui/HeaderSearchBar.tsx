import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { HeaderSearchInput } from "@/entities/HeaderSearchInput";
import { Colors } from "@/shared/constants/Colors";

export const HeaderSearchBar = () => {
  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchSection}>
        <HeaderSearchInput placeholder="Restaurants, groceries, dishes" />
        <Link href="/(modal)/filter" asChild>
          <TouchableOpacity style={styles.optionButton}>
            <Ionicons name="options-outline" size={20} color={Colors.primary} />
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    height: 60,
    backgroundColor: Colors.white,
  },
  searchSection: {
    flexDirection: "row",
    gap: 10,
    flex: 1,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  optionButton: {
    padding: 10,
    borderRadius: 50,
  },
});
