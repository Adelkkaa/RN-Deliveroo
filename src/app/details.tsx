import { useNavigation } from "expo-router";
import React, { useLayoutEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { useSharedValue, withTiming } from "react-native-reanimated";
import { restaurant } from "@/shared/assets/data/restaurant";
import { Colors } from "@/shared/constants/Colors";
import ParallaxScrollView from "@/shared/lib/ParallaxScrollView";
import { Text } from "@/shared/ui";
import { detailsHeaderOptions } from "@/widgets/DetailsHeader";
import { DetailsMainContent } from "@/widgets/DetailsMainContent";
import { DetailsStickyNavigation } from "@/widgets/DetailsStickyNavigation";

const Details = () => {
  const navigation = useNavigation();

  const opacity = useSharedValue(0);

  useLayoutEffect(() => {
    navigation.setOptions(detailsHeaderOptions);
  }, []);

  const onScroll = (event: any) => {
    const y = event.nativeEvent.contentOffset.y;
    if (y > 350) {
      opacity.value = withTiming(1);
    } else {
      opacity.value = withTiming(0);
    }
  };

  return (
    <>
      <ParallaxScrollView
        scrollEvent={onScroll}
        backgroundColor={Colors.white}
        style={styles.container}
        parallaxHeaderHeight={250}
        stickyHeaderHeight={100}
        renderBackground={() => (
          <Image
            source={restaurant.img}
            style={{ height: 300, width: "100%" }}
          />
        )}
        contentBackgroundColor={Colors.lightGrey}
        renderStickyHeader={() => (
          <View key="sticky-header" style={styles.stickySection}>
            <Text style={styles.stickySectionText}>{restaurant.name}</Text>
          </View>
        )}
      >
        <DetailsMainContent {...restaurant} />
      </ParallaxScrollView>

      {/* Sticky segments */}
      <DetailsStickyNavigation food={restaurant.food} opacity={opacity} />
      {/* Footer Basket */}
      {/* {items > 0 && (
        <View style={styles.footer}>
          <SafeAreaView edges={["bottom"]} style={{ backgroundColor:Colors.white }}>
            <Link href="/basket" asChild>
              <TouchableOpacity style={styles.fullButton}>
                <Text variant="Bold" style={styles.basket}>{items}</Text>
                <Text variant="Bold" style={styles.footerText}>View Basket</Text>
                <Text variant="Bold" style={styles.basketTotal}>${total}</Text>
              </TouchableOpacity>
            </Link>
          </SafeAreaView>
        </View>
      )} */}
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  stickySection: {
    backgroundColor: Colors.white,
    marginLeft: 70,
    height: 100,
    justifyContent: "flex-end",
  },

  stickySectionText: {
    fontSize: 20,
    margin: 20,
  },

  footer: {
    position: "absolute",
    backgroundColor: Colors.white,
    bottom: 0,
    left: 0,
    width: "100%",
    padding: 10,
    elevation: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    paddingTop: 20,
  },
  fullButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    height: 50,
  },
  footerText: {
    color: Colors.white,
    fontSize: 16,
  },
  basket: {
    color: Colors.white,
    backgroundColor: "#19AA86",
    padding: 8,
    borderRadius: 2,
  },
  basketTotal: {
    color: Colors.white,
    fontSize: 16,
  },
});

export default Details;
