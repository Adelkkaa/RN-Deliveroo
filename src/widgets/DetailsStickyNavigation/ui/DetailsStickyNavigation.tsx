import React, { FC, useRef, useState } from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import Animated, {
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { restaurant } from "@/shared/assets/data/restaurant";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

interface IDetailsStickyNavigationProps {
  opacity: SharedValue<number>;
  food: typeof restaurant.food;
}

export const DetailsStickyNavigation: FC<IDetailsStickyNavigationProps> = ({
  opacity,
  food,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const animatedStyles = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const scrollRef = useRef<ScrollView>(null);
  const itemsRef = useRef<TouchableOpacity[]>([]);
  const selectCategory = (index: number) => {
    const selected = itemsRef.current[index];
    setActiveIndex(index);

    selected.measure((x) => {
      scrollRef.current?.scrollTo({ x: x - 16, y: 0, animated: true });
    });
  };

  return (
    <Animated.View style={[styles.stickySegments, animatedStyles]}>
      <View style={styles.segmentsShadow}>
        <ScrollView
          ref={scrollRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.segmentScrollview}
        >
          {food.map((item, index) => (
            <TouchableOpacity
              key={index}
              ref={(ref) => (itemsRef.current[index] = ref!)}
              style={
                activeIndex === index
                  ? styles.segmentButtonActive
                  : styles.segmentButton
              }
              onPress={() => selectCategory(index)}
            >
              <Text
                variant={activeIndex === index ? "Bold" : "Regular"}
                style={
                  activeIndex === index
                    ? styles.segmentTextActive
                    : styles.segmentText
                }
              >
                {item.category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  stickySegments: {
    position: "absolute",
    height: 50,
    left: 0,
    right: 0,
    top: 100,
    backgroundColor: Colors.white,
    overflow: "hidden",
    paddingBottom: 4,
  },
  segmentsShadow: {
    backgroundColor: Colors.white,
    justifyContent: "center",
    shadowColor: Colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    height: "100%",
  },
  segmentButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
  },
  segmentText: {
    color: Colors.primary,
    fontSize: 16,
  },
  segmentButtonActive: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 50,
  },
  segmentTextActive: {
    color: Colors.white,
    fontSize: 16,
  },
  segmentScrollview: {
    paddingHorizontal: 16,
    alignItems: "center",
    gap: 20,
    paddingBottom: 4,
  },
});
