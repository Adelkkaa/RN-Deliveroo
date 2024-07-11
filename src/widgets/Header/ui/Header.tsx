import { Ionicons } from "@expo/vector-icons";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { StatusBar } from "expo-status-bar";
import React, { useRef } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HeaderBottomSheet } from "@/features/HeaderBottomSheet";
import { HeaderSearchBar } from "@/features/HeaderSearchBar";
import { HeaderSelect } from "@/features/HeaderSelect";
import { Colors } from "@/shared/constants/Colors";

export const Header = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef.current?.present();
  };
  return (
    <SafeAreaView edges={["top"]}>
      <StatusBar style="dark" />
      <HeaderBottomSheet ref={bottomSheetRef} />
      <View style={styles.topContainer}>
        <TouchableOpacity>
          <Image
            style={styles.logo}
            source={require("@/shared/assets/images/bike.png")}
          />
        </TouchableOpacity>
        <HeaderSelect onPress={openModal} />
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <HeaderSearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
