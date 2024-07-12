import { Link } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useBasketStore } from "@/entities/Basket";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

export const DetailsFooter = () => {
  const { items, total } = useBasketStore();

  return (
    <>
      {items > 0 && (
        <View style={styles.footer}>
          <SafeAreaView
            edges={["bottom"]}
            style={{ backgroundColor: Colors.white }}
          >
            <Link href="/basket" asChild>
              <TouchableOpacity style={styles.fullButton}>
                <Text variant="Bold" style={styles.basket}>
                  {items}
                </Text>
                <Text variant="Bold" style={styles.footerText}>
                  View Basket
                </Text>
                <Text variant="Bold" style={styles.basketTotal}>
                  ${total}
                </Text>
              </TouchableOpacity>
            </Link>
          </SafeAreaView>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
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
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    height: 50,
  },
  footerText: {
    color: Colors.white,
    fontSize: 16,
  },
  basket: {
    color: Colors.white,
    backgroundColor: "#19AA86",
    padding: 8,
    borderRadius: 2,
  },
  basketTotal: {
    color: Colors.white,
    fontSize: 16,
  },
});
