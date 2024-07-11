import React, { useState } from "react";
import { Text, View } from "react-native";
import MapView from "react-native-maps";

const LocationSearchScreen = () => {
  const [location, setLocation] = useState({
    latitude: 55.7965,
    longitude: 49.1066,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  return (
    <MapView
      region={location}
      style={{ flex: 1 }}
      showsUserLocation
      showsMyLocationButton
    />
  );
};
export default LocationSearchScreen;
