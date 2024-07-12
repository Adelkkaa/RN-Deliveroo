import { FC } from "react";
import { Image, StyleSheet, View } from "react-native";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

interface ICategoryCardProps {
  img: any;
  text: string;
}
export const CategoryCard: FC<ICategoryCardProps> = ({ img, text }) => {
  return (
    <View style={styles.categoryCard}>
      <Image source={img} />
      <Text variant="Bold" style={styles.categoryText}>
        {text}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 100,
    height: 100,
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
  categoryText: {
    padding: 6,
    fontSize: 14,
  },
});
