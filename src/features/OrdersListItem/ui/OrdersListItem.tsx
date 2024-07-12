import React, { FC } from "react";
import { StyleSheet, View } from "react-native";
import { Product, useBasketStore } from "@/entities/Basket";
import { Colors } from "@/shared/constants/Colors";
import { SwipeableRow, Text } from "@/shared/ui";

interface IOrdersListItemProps {
  item: Product & {
    quantity: number;
  };
}

export const OrdersListItem: FC<IOrdersListItemProps> = ({ item }) => {
  const { reduceProduct } = useBasketStore();

  const onDelete = () => reduceProduct(item);

  return (
    <SwipeableRow onDelete={onDelete}>
      <View style={styles.row}>
        <Text style={styles.quantity}>{item.quantity}x</Text>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.price}>${item.price * item.quantity}</Text>
      </View>
    </SwipeableRow>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    padding: 10,
    gap: 20,
    alignItems: "center",
  },
  section: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 16,
  },
  quantity: { color: Colors.primary, fontSize: 18 },
  name: { flex: 1, fontSize: 18 },
  price: { fontSize: 18 },
});
