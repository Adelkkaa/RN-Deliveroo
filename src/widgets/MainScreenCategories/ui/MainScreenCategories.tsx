import { ScrollView, StyleSheet } from "react-native";
import { CategoryCard } from "@/entities/CategoryCard";
import { categories } from "@/shared/assets/data/home";

export const MainScreenCategories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {categories.map((category, index) => (
        <CategoryCard key={index} img={category.img} text={category.text} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
