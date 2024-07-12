import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBasketStore } from "@/entities/Basket";
import { Colors } from "@/shared/constants/Colors";
import { Button } from "@/shared/ui";

interface IOrdersFooterProps {
  setOrder: React.Dispatch<React.SetStateAction<boolean>>;
}
export const OrdersFooter: FC<IOrdersFooterProps> = ({ setOrder }) => {
  const { clearCart } = useBasketStore();

  const startCheckout = () => {
    setOrder(true);
    clearCart();
  };
  return (
    <View style={styles.footer}>
      <SafeAreaView edges={["bottom"]} style={styles.safeArea}>
        <Button
          text="Order now"
          onPress={startCheckout}
          style={styles.fullButton}
          textStyle={styles.footerText}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: { backgroundColor: Colors.white },
  footer: {
    position: "absolute",
    backgroundColor: Colors.white,
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 10,
    elevation: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 20,
  },
  fullButton: {
    borderRadius: 8,
    justifyContent: "center",
    flex: 1,
    height: 50,
  },
  footerText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
