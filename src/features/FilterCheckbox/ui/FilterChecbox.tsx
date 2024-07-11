import { FC } from "react";
import { StyleSheet, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";
import { ICategory } from "@/widgets/FilterList/model/types";

interface IFilterCheckboxProps {
  items: ICategory[];
  item: ICategory;
  index: number;
  setItems: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

export const FilterChecbox: FC<IFilterCheckboxProps> = ({
  items,
  item,
  index,
  setItems,
}) => {
  const onPressItem = () => {
    const isChecked = items[index].checked;

    const updatedItems = items.map((item) => {
      if (item.name === items[index].name) {
        item.checked = !isChecked;
      }

      return item;
    });

    setItems(updatedItems);
  };
  return (
    <View style={styles.row}>
      <Text style={styles.itemText}>
        {item.name} ({item.count})
      </Text>
      <BouncyCheckbox
        style={styles.checkboxStyle}
        isChecked={items[index].checked}
        fillColor={Colors.primary}
        iconStyle={styles.iconStyle}
        innerIconStyle={styles.innerIconStyle}
        onPress={onPressItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  itemText: {
    flexGrow: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: Colors.white,
    justifyContent: "space-between",
  },
  checkboxStyle: {
    width: 20,
    height: 20,
  },
  iconStyle: {
    borderColor: Colors.primary,
    borderRadius: 4,
    borderWidth: 2,
  },
  innerIconStyle: { borderColor: Colors.primary, borderRadius: 4 },
});
