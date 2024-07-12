import React from "react";
import { StyleSheet, View } from "react-native";
import { useBasketStore } from "@/entities/Basket";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

const FEES = {
  service: 2.99,
  delivery: 5.99,
};
export const OrderListFooter = () => {
  const { total } = useBasketStore();

  return (
    <View>
      <View style={styles.separator} />
      <View style={styles.totalRow}>
        <Text style={styles.total}>Subtotal</Text>
        <Text style={styles.textPrice}>${total}</Text>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.total}>Service fee</Text>
        <Text style={styles.textPrice}>${FEES.service}</Text>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.total}>Delivery fee</Text>
        <Text style={styles.textPrice}>${FEES.delivery}</Text>
      </View>

      <View style={styles.totalRow}>
        <Text style={styles.total}>Order Total</Text>
        <Text variant="Bold" style={styles.textPrice}>
          ${(total + FEES.service + FEES.delivery).toFixed(2)}
        </Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  totalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: Colors.white,
  },
  total: {
    fontSize: 18,
    color: Colors.medium,
  },
  separator: { height: 1, backgroundColor: Colors.grey },
  textPrice: { fontSize: 18 },
});
