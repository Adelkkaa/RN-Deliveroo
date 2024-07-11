import { FC } from "react";
import { FlatList } from "react-native";
import { FilterChecbox } from "@/features/FilterCheckbox";
import { FilterListHeader } from "@/features/FilterListHeader";
import { ICategory } from "../model/types";

interface IFilterListProps {
  items: ICategory[];
  setItems: React.Dispatch<React.SetStateAction<ICategory[]>>;
}

export const FilterList: FC<IFilterListProps> = ({ items, setItems }) => {
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => (
        <FilterChecbox
          item={item}
          index={index}
          items={items}
          setItems={setItems}
        />
      )}
      ListHeaderComponent={<FilterListHeader />}
    />
  );
};
