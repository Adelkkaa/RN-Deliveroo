import { ScrollView, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";
import { MainScreenCategories } from "@/widgets/MainScreenCategories";
import { MainScreenRestaurants } from "@/widgets/MainScreenRestaurants";

const MainScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <MainScreenCategories />
        <Text variant="Bold" style={styles.header}>
          Top picks in your neighbourhood
        </Text>
        <MainScreenRestaurants />
        <Text variant="Bold" style={styles.header}>
          Offers near you
        </Text>
        <MainScreenRestaurants />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.lightGrey,
    flex: 1,
  },
  wrapper: { paddingBottom: 40 },
  header: {
    fontSize: 18,
    marginTop: 16,
    marginBottom: 8,
    paddingHorizontal: 16,
  },
});

export default MainScreen;
