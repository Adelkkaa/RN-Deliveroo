import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { ILocation } from "../types/types";

export const getCurrentLocation = async (
  setLocation: React.Dispatch<React.SetStateAction<ILocation>>,
) => {
  const { status } = await requestForegroundPermissionsAsync();
  if (status !== "granted") {
    return;
  }

  const {
    coords: { latitude, longitude },
  } = await getCurrentPositionAsync({});
  setLocation((prev) => ({
    ...prev,
    latitude,
    longitude,
  }));
};
