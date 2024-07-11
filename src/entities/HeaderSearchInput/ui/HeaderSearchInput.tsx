import { Ionicons } from "@expo/vector-icons";
import React, { FC } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  ViewStyle,
} from "react-native";
import { Colors } from "@/shared/constants/Colors";

interface ITextInputProps extends TextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export const HeaderSearchInput: FC<ITextInputProps> = ({
  style,
  containerStyle,
  ...props
}) => {
  return (
    <Pressable style={[styles.searchField, containerStyle]}>
      <Ionicons
        style={styles.searchIcon}
        name="search"
        size={20}
        color={Colors.medium}
      />
      <TextInput style={[styles.input, style]} {...props} />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  searchField: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    padding: 10,
    color: Colors.mediumDark,
  },
  searchIcon: {
    paddingLeft: 10,
  },
});
