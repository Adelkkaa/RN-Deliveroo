import { Link } from "expo-router";
import { FC } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { restaurant } from "@/shared/assets/data/restaurant";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

type IDetailsSectionItemProps = (typeof restaurant.food)[0]["meals"][0];

export const DetailsSectionItem: FC<IDetailsSectionItemProps> = ({
  id,
  img,
  info,
  name,
  price,
}) => {
  return (
    <Link href={{ pathname: "/(modal)/dish", params: { id } }} asChild>
      <TouchableOpacity style={styles.item}>
        <View style={{ flex: 1 }}>
          <Text variant="Bold" style={styles.dish}>
            {name}
          </Text>
          <Text style={styles.dishText}>{info}</Text>
          <Text style={styles.dishText}>${price}</Text>
        </View>
        <Image source={img} style={styles.dishImage} />
      </TouchableOpacity>
    </Link>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Colors.white,
    padding: 16,
    flexDirection: "row",
  },
  dishImage: {
    height: 80,
    width: 80,
    borderRadius: 4,
  },
  dish: {
    fontSize: 16,
  },
  dishText: {
    fontSize: 14,
    color: Colors.mediumDark,
    paddingVertical: 4,
  },
});
