import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    InstrumentSans: require('../assets/fonts/Instrument_Sans/InstrumentSans-VariableFont_wdth,wght.ttf'),
    PlayfairDisplay: require('../assets/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf'),
    PlayfairDisplayItalic: require('../assets/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        SplashScreen.hideAsync();
      }, 1000); // Wait for 1 second
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="gift-detail" options={{ headerShown: false }} />
    </Stack>
  );
}
