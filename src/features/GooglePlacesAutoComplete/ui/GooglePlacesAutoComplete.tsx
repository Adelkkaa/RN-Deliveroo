import { Ionicons } from "@expo/vector-icons";
import { FC } from "react";
import { StyleSheet, View } from "react-native";
import {
  GooglePlaceData,
  GooglePlaceDetail,
  GooglePlacesAutocomplete,
} from "react-native-google-places-autocomplete";
import { Colors } from "@/shared/constants/Colors";
import { ILocation } from "@/shared/types/types";

const API_KEY = process.env.EXPO_PUBLIC_GOOGLE_API_KEY;

interface IGooglePlacesAutoCompleteProps {
  setLocation: React.Dispatch<React.SetStateAction<ILocation>>;
}

export const GooglePlacesAutoComplete: FC<IGooglePlacesAutoCompleteProps> = ({
  setLocation,
}) => {
  const onSelectLocation = (
    data: GooglePlaceData,
    details: GooglePlaceDetail | null,
  ) => {
    const point = details?.geometry.location;
    if (!point) return;
    setLocation((prev) => ({
      ...prev,
      latitude: point.lat,
      longitude: point.lng,
    }));
  };
  return (
    <GooglePlacesAutocomplete
      placeholder="Search or move the map"
      fetchDetails={true}
      onPress={onSelectLocation}
      query={{
        key: API_KEY,
        language: "en",
      }}
      renderLeftButton={() => (
        <View style={styles.boxIcon}>
          <Ionicons name="search-outline" size={24} color={Colors.medium} />
        </View>
      )}
      styles={{
        container: styles.container,
        textInput: styles.textInput,
        textInputContainer: styles.textInputContainer,
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
  },
  boxIcon: {
    position: "absolute",
    left: 15,
    top: 18,
    zIndex: 1,
  },
  textInput: {
    backgroundColor: Colors.grey,
    paddingLeft: 35,
    borderRadius: 10,
  },
  textInputContainer: {
    padding: 8,
    backgroundColor: Colors.white,
  },
});
