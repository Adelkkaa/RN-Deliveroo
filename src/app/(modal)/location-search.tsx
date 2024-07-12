import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import MapView, { MapPressEvent, Marker } from "react-native-maps";
import { GooglePlacesAutoComplete } from "@/features/GooglePlacesAutoComplete";
import { Colors } from "@/shared/constants/Colors";
import { ILocation } from "@/shared/types/types";
import { Button } from "@/shared/ui";
import { getCurrentLocation } from "@/shared/utils/getCurrentLocation";

const INITIAL_LOCATION = {
  latitude: 55.7965,
  longitude: 49.1066,
  latitudeDelta: 0.1,
  longitudeDelta: 0.1,
};

const LocationSearchScreen = () => {
  const navigation = useNavigation();
  const [location, setLocation] = useState<ILocation>(INITIAL_LOCATION);

  const onPressMap = (event: MapPressEvent) => {
    const newCoordinate = event.nativeEvent.coordinate;
    setLocation((prev) => ({
      ...prev,
      latitude: newCoordinate.latitude,
      longitude: newCoordinate.longitude,
    }));
  };

  useEffect(() => {
    getCurrentLocation(setLocation);
  }, []);

  return (
    <View style={styles.container}>
      <GooglePlacesAutoComplete setLocation={setLocation} />
      <MapView
        showsTraffic={true}
        showsScale={true}
        showsUserLocation={true}
        style={styles.map}
        region={location}
        showsMyLocationButton={true}
        onPress={onPressMap}
      >
        <Marker coordinate={location} />
      </MapView>
      <View style={styles.absoluteBox}>
        <Button
          style={styles.button}
          textStyle={styles.buttonText}
          text="Confirm"
          onPress={() => navigation.goBack()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: {
    flex: 1,
  },
  absoluteBox: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  button: {
    margin: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
  },
});
export default LocationSearchScreen;
