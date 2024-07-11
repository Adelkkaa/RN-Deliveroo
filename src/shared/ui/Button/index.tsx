import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacityProps,
} from "react-native";
import { Colors } from "@/shared/constants/Colors";

interface IButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
}

export const Button: FC<IButtonProps> = ({
  text,
  style,
  textStyle,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles.button, style]} {...props}>
      <Text style={[textStyle, styles.buttonText]}>Confirm</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    margin: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
  },
});
