import { StyleSheet, View } from "react-native";
import { SelectLink } from "@/entities/SelectLink";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";
import { filterMockData } from "../model/constants";

export const FilterListHeader = () => {
  return (
    <>
      <View style={styles.container}>
        {filterMockData.map((item) => (
          <SelectLink
            key={item.title}
            wrapperStyle={styles.wrapperStyle}
            title={item.title}
            icon={item.icon}
          />
        ))}
      </View>
      <Text variant="Bold" style={styles.header}>
        Categories
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 8,
    marginBottom: 16,
  },
  header: {
    fontSize: 16,
    marginBottom: 16,
  },
  wrapperStyle: {
    padding: 0,
    borderWidth: 0,
    paddingVertical: 10,
    borderColor: Colors.grey,
    borderBottomWidth: 1,
  },
});
