import { Link } from "expo-router";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { RestaurantCard } from "@/features/RestaurantCard";
import { restaurants } from "@/shared/assets/data/home";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

export const MainScreenRestaurants = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {restaurants.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          distance={restaurant.distance}
          img={restaurant.img}
          name={restaurant.name}
          rating={restaurant.rating}
          ratings={restaurant.ratings}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
