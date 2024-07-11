import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React, { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
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
      <Stack.Screen name="index" options={{ header: () => <Header /> }} />
    </Stack>
  );
};

const RootLayout = () => {
  return (
    <SafeAreaProvider>
      <InitialLayout />
    </SafeAreaProvider>
  );
};

export default RootLayout;
