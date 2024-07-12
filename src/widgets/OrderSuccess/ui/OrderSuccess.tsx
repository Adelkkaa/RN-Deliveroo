import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import ConfettiCannon from "react-native-confetti-cannon";
import { Colors } from "@/shared/constants/Colors";
import { Button, Text } from "@/shared/ui";

export const OrderSuccess = () => {
  const router = useRouter();
  return (
    <>
      <ConfettiCannon
        count={200}
        origin={{ x: -10, y: 0 }}
        fallSpeed={2500}
        fadeOut={true}
        autoStart={true}
      />
      <View style={styles.container}>
        <Text variant="Bold" style={styles.title}>
          Thank you for your order!
        </Text>
        <Button
          text="New order"
          onPress={() => router.push("/")}
          style={styles.orderBtn}
          textStyle={styles.buttonText}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: "50%", padding: 20, alignItems: "center" },
  title: { fontSize: 24, textAlign: "center" },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
  orderBtn: {
    borderRadius: 8,
    width: 250,
    height: 50,
    justifyContent: "center",
    marginTop: 20,
  },
});
