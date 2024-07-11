import { Ionicons } from "@expo/vector-icons";

interface IFilterProps {
  icon: React.ComponentProps<typeof Ionicons>["name"];
  title: string;
}

export const filterMockData: IFilterProps[] = [
  {
    icon: "arrow-down-outline",
    title: "Sort",
  },
  {
    icon: "fast-food-outline",
    title: "Hygiene rating",
  },
  {
    icon: "pricetag-outline",
    title: "Offers",
  },
  {
    icon: "nutrition-outline",
    title: "Dietary",
  },
];
