import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { FC } from "react";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacityProps,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { Colors } from "@/shared/constants/Colors";

interface IButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
export const Button: FC<IButtonProps> = ({
  text,
  style,
  textStyle,
  ...props
}) => {
  const opacity = useSharedValue(1);

  const handlePressIn = () => {
    opacity.value = withTiming(0.5, { duration: 100 });
  };

  const handlePressOut = () => {
    opacity.value = withTiming(1, { duration: 100 });
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <AnimatedPressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      style={[styles.button, animatedStyles, style]}
      {...props}
    >
      <Text style={[styles.buttonText, textStyle]}>{text}</Text>
    </AnimatedPressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
  },
});
