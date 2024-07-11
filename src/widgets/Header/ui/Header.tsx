import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderSearchBar } from "@/features/HeaderSearchBar";
import { HeaderSelect } from "@/features/HeaderSelect";
import { Colors } from "@/shared/constants/Colors";

export const Header = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.topContainer}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("@/shared/assets/images/bike.png")}
          />
        </TouchableOpacity>
        <HeaderSelect />
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <HeaderSearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  topContainer: {
    height: 60,
    backgroundColor: Colors.white,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logo: {
    width: 30,
    height: 30,
  },

  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
});
