import { FC } from "react";
import { SectionList, StyleSheet, View } from "react-native";
import { DetailsSectionItem } from "@/features/DetailsSectionItem";
import { restaurant } from "@/shared/assets/data/restaurant";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

type IDetailsMainContentProps = typeof restaurant;
export const DetailsMainContent: FC<IDetailsMainContentProps> = ({
  about,
  delivery,
  food,
  name,
  tags,
}) => {
  const DATA = food.map((item, index) => ({
    title: item.category,
    data: item.meals,
    index,
  }));

  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.restaurantName}>{name}</Text>
      <Text style={styles.restaurantDescription}>
        {delivery} ·{" "}
        {tags.map(
          (tag, index) => `${tag}${index < tags.length - 1 ? " · " : ""}`,
        )}
      </Text>
      <Text style={styles.restaurantDescription}>{about}</Text>
      <SectionList
        contentContainerStyle={{ paddingBottom: 50 }}
        keyExtractor={(item, index) => `${item.id + index}`}
        scrollEnabled={false}
        sections={DATA}
        renderItem={({ item }) => <DetailsSectionItem {...item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        SectionSeparatorComponent={() => (
          <View style={styles.sectionSeparator} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text variant="Bold" style={styles.sectionHeader}>
            {title}
          </Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    backgroundColor: Colors.lightGrey,
  },
  restaurantName: {
    fontSize: 30,
    margin: 16,
  },
  restaurantDescription: {
    fontSize: 16,
    margin: 16,
    lineHeight: 22,
    color: Colors.medium,
  },
  sectionHeader: {
    fontSize: 22,
    marginTop: 40,
    margin: 16,
  },

  separator: {
    marginHorizontal: 16,
    height: 1,
    backgroundColor: Colors.grey,
  },
  sectionSeparator: { height: 1, backgroundColor: Colors.grey },
});
