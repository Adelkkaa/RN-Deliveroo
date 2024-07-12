import FontAwesome from "@expo/vector-icons/FontAwesome";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { HeaderBackButton } from "@/entities/HeaderBackButton";
import { Colors } from "@/shared/constants/Colors";
import { Header } from "@/widgets/Header";

export { ErrorBoundary } from "expo-router";

SplashScreen.preventAutoHideAsync();

const InitialLayout = () => {
  const [loaded, error] = useFonts({
    "OpenSans-Regular": require("../shared/assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Medium": require("../shared/assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-SemiBold": require("../shared/assets/fonts/OpenSans-SemiBold.ttf"),
    "OpenSans-Bold": require("../shared/assets/fonts/OpenSans-Bold.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <View />;
  }
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name="(modal)/filters"
        options={{
          presentation: "modal",
          headerTitle: "Filter",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: Colors.lightGrey,
          },
          headerLeft: () => <HeaderBackButton />,
        }}
      />
      <Stack.Screen
        name="(modal)/location-search"
        options={{
          presentation: "fullScreenModal",
          headerTitle: "Select location",
          headerLeft: () => <HeaderBackButton />,
        }}
      />
      <Stack.Screen
        name="(modal)/dish"
        options={{
          presentation: "modal",
          headerTitle: "",
          headerTransparent: true,
          headerLeft: () => <HeaderBackButton />,
        }}
      />
      <Stack.Screen
        name="basket"
        options={{
          headerTitle: "Basket",
          headerLeft: () => <HeaderBackButton />,
        }}
      />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <GestureHandlerRootView>
      <BottomSheetModalProvider>
        <SafeAreaProvider>
          <InitialLayout />
        </SafeAreaProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default RootLayout;
