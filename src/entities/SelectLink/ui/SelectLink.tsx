import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { Colors } from "@/shared/constants/Colors";
import { Text } from "@/shared/ui";

interface ISelectLinkProps extends TouchableOpacityProps {
  title: string;
  icon: React.ComponentProps<typeof Ionicons>["name"];
  iconColor?: string;
}
export const SelectLink: FC<ISelectLinkProps> = ({
  title,
  icon,
  iconColor,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <View style={styles.wrapper}>
        <Ionicons name={icon} size={20} color={iconColor || Colors.medium} />
        <Text style={styles.title}>{title}</Text>
        <Ionicons name="chevron-forward" size={20} color={Colors.primary} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  title: { flex: 1 },
  wrapper: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    backgroundColor: Colors.white,
    padding: 16,
    borderColor: Colors.grey,
    borderWidth: 1,
  },
});
