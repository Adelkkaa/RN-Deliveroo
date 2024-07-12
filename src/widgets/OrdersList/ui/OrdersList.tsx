import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useBasketStore } from "@/entities/Basket";
import { OrderListFooter } from "@/features/OrdersListFooter";
import { OrdersListItem } from "@/features/OrdersListItem";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

export const OrdersList = () => {
  const { products } = useBasketStore();

  return (
    <FlatList
      data={products}
      ListHeaderComponent={
        <Text variant="Bold" style={styles.section}>
          Items
        </Text>
      }
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      renderItem={({ item }) => <OrdersListItem item={item} />}
      ListFooterComponent={OrderListFooter}
    />
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
    margin: 16,
  },
  separator: { height: 1, backgroundColor: Colors.grey },
});
