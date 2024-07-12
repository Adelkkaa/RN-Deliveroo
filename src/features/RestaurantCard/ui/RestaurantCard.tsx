import { Link } from "expo-router";
import { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

interface IRestaurantCardProps {
  img: any;
  name: string;
  rating: string;
  ratings: string;
  distance: string;
}

export const RestaurantCard: FC<IRestaurantCardProps> = ({
  img,
  distance,
  name,
  rating,
  ratings,
}) => {
  return (
    <Link href="/details" asChild>
      <TouchableOpacity>
        <View style={styles.restaurantCard}>
          <Image source={img} style={styles.image} />
          <View style={styles.restaurantBox}>
            <Text variant="Bold" style={styles.restaurantText}>
              {name}
            </Text>
            <Text style={{ color: Colors.green }}>
              {rating} {ratings}
            </Text>
            <Text style={{ color: Colors.medium }}>{distance}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  restaurantCard: {
    width: 300,
    height: 250,
    backgroundColor: Colors.white,
    marginEnd: 10,
    elevation: 2,
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.06,
    borderRadius: 4,
  },
  restaurantText: {
    paddingVertical: 5,
    fontSize: 14,
  },
  image: {
    flex: 5,
    width: undefined,
    height: undefined,
  },
  restaurantBox: {
    flex: 2,
    padding: 10,
  },
});
