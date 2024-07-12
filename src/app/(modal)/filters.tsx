import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import categories from "@/shared/assets/data/filter.json";
import { Colors } from "@/shared/constants/Colors";
import { Button } from "@/shared/ui";
import { FilterList } from "@/widgets/FilterList";
import { ICategory } from "@/widgets/FilterList/model/types";

const FiltersScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState<ICategory[]>(categories);
  const [selected, setSelected] = useState<ICategory[]>([]);
  const flexWidth = useSharedValue(0);
  const scale = useSharedValue(0);

  useEffect(() => {
    const hasSelected = selected.length > 0;
    const selectedItems = items.filter((item) => item.checked);
    const newSelected = selectedItems.length > 0;

    if (hasSelected !== newSelected) {
      flexWidth.value = withTiming(newSelected ? 150 : 0);
      scale.value = withTiming(newSelected ? 1 : 0);
    }

    setSelected(selectedItems);
  }, [items]);

  const handleClearAll = () => {
    const updatedItems = items.map((item) => {
      item.checked = false;
      return item;
    });
    setItems(updatedItems);
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: flexWidth.value,
      opacity: flexWidth.value > 0 ? 1 : 0,
    };
  });

  const animatedText = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });
  return (
    <View style={styles.container}>
      <FilterList items={items} setItems={setItems} />
      <View style={{ height: 76 }} />
      <View style={styles.footer}>
        <View style={styles.btnContainer}>
          <Animated.View style={[animatedStyles, styles.outlineButton]}>
            <TouchableOpacity onPress={handleClearAll}>
              <Animated.Text style={[animatedText, styles.outlineButtonText]}>
                Clear all
              </Animated.Text>
            </TouchableOpacity>
          </Animated.View>
          <Button
            style={styles.fullButton}
            text="Done"
            textStyle={styles.footerText}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: Colors.lightGrey,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: Colors.white,
    padding: 10,
    elevation: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  fullButton: {
    padding: 16,
    borderRadius: 8,
    height: 56,
    flexGrow: 1,
  },
  footerText: {
    fontSize: 16,
  },
  btnContainer: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "center",
  },
  outlineButton: {
    borderColor: Colors.primary,
    borderWidth: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    height: 56,
  },
  outlineButtonText: {
    color: Colors.primary,
    fontSize: 16,
  },
});

export default FiltersScreen;
