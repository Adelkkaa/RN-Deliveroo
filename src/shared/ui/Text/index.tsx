import { FC } from "react";
import { Text as BaseText, TextProps } from "react-native";
import { Fonts } from "@/shared/constants/Fonts";

interface ITextProps extends TextProps {
  variant?: keyof typeof Fonts;
}

export const Text: FC<ITextProps> = ({
  variant = "Regular",
  children,
  style,
  ...props
}) => {
  return (
    <BaseText style={[{ fontFamily: Fonts[variant] }, style]} {...props}>
      {children}
    </BaseText>
  );
};
