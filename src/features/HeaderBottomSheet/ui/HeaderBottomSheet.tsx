import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
  useBottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useRouter } from "expo-router";
import React, { forwardRef, useCallback, useMemo } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SelectLink } from "@/entities/SelectLink";
import { Colors } from "@/shared/constants/Colors";
import { Button, Text } from "@/shared/ui";

export type Ref = BottomSheetModal;

export const HeaderBottomSheet = forwardRef<Ref>((_, ref) => {
  const router = useRouter();
  const snapPoints = useMemo(() => ["50%"], []);
  const renderBackdrop = useCallback(
    (props: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        {...props}
      />
    ),
    [],
  );
  const { dismiss } = useBottomSheetModal();

  const hanglePressLink = (href: string) => {
    dismiss();
    router.push(href);
  };

  return (
    <BottomSheetModal
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{ borderRadius: 0, backgroundColor: Colors.lightGrey }}
      overDragResistanceFactor={0}
      ref={ref}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
    >
      <View style={styles.contentContainer}>
        <View style={styles.toggle}>
          <TouchableOpacity style={styles.toggleActive}>
            <Text variant="Bold" style={styles.activeText}>
              Delivery
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toggleInactive}>
            <Text style={styles.inactiveText}>Pickup</Text>
          </TouchableOpacity>
        </View>

        <Text variant="Bold" style={styles.subheader}>
          Your Location
        </Text>
        <SelectLink
          onPress={() => hanglePressLink("/(modal)/location-search")}
          title="Current location"
          icon="location-outline"
        />

        <Text variant="Bold" style={styles.subheader}>
          Arrival time
        </Text>
        <SelectLink title="Now" icon="stopwatch-outline" />
        <Button
          style={styles.button}
          onPress={() => dismiss()}
          text="Confirm"
        />
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
  },
  toggle: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 32,
  },
  toggleActive: {
    backgroundColor: Colors.primary,
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  activeText: {
    color: Colors.white,
  },
  toggleInactive: {
    padding: 8,
    borderRadius: 32,
    paddingHorizontal: 30,
  },
  inactiveText: {
    color: Colors.primary,
  },

  subheader: {
    fontSize: 16,
    margin: 16,
  },
  button: {
    margin: 16,
  },
});
