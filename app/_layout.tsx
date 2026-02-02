import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { View } from 'react-native';
import 'react-native-reanimated';
import LanguageButton from '../components/LanguageButton';
import ThemeToggle from '../components/ThemeToggle';
import { ThemeProvider } from '../contexts/ThemeContext';
import Splash from './splash';

export default function RootLayout() {
  const [loaded] = useFonts({
    InstrumentSans: require('../assets/fonts/Instrument_Sans/InstrumentSans-VariableFont_wdth,wght.ttf'),
    PlayfairDisplay: require('../assets/fonts/Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf'),
    PlayfairDisplayItalic: require('../assets/fonts/Playfair_Display/PlayfairDisplay-Italic-VariableFont_wght.ttf'),
  });

  const [isSplashing, setIsSplashing] = useState(true);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <View style={{ position: 'absolute', top: 50, right: 20, zIndex: 9999 }}>
            <ThemeToggle />
        </View>
        <View style={{ position: 'absolute', top: 50, left: 24, zIndex: 9999 }}>
            <LanguageButton />
        </View>
        {isSplashing && <Splash onFinish={() => setIsSplashing(false)} />}
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen name="signup" options={{ headerShown: false }} />
          <Stack.Screen name="home" options={{ headerShown: false }} />
          <Stack.Screen name="gift-detail" options={{ headerShown: false }} />
        </Stack>
      </View>
    </ThemeProvider>
  );
}
