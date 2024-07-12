import { HeaderBackButton } from "@/entities/HeaderBackButton";
import { HeaderLeftButtons } from "@/entities/HeaderLeftButtons";
import { Colors } from "@/shared/constants/Colors";

export const detailsHeaderOptions = {
  headerTransparent: true,
  headerTitle: "",
  headerTintColor: Colors.primary,
  headerLeft: () => <HeaderBackButton />,
  headerRight: () => <HeaderLeftButtons />,
};
