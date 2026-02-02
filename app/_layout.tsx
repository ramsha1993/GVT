import { useFonts } from 'expo-font';
import { Stack, useSegments } from 'expo-router';
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
  const segments = useSegments();

  // Determine if we should show the language button
  // Show on index (landing), login, signup. Hide on others (home, gift-detail, etc.)
  // segments[0] might be (tabs) or similar if using groups, but here files are flat in app/ or just screen names.
  // We can check the route name.
  // Actually useSegments returns distinct segments.
  // For 'app/index.tsx', segments might be empty or ['index']?
  // Let's rely on checking if the current screen is one of the public ones.
  // If segments is empty, it's index.
  const routeName = segments[segments.length - 1]; 
  const showLanguageButton = !routeName || ['index', 'login', 'signup'].includes(routeName);


  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider>
      <View style={{ flex: 1 }}>
        <View style={{ position: 'absolute', top: 50, right: 20, zIndex: 9999 }}>
            <ThemeToggle />
        </View>
        
        {showLanguageButton && (
          <View style={{ position: 'absolute', top: 50, left: 24, zIndex: 9999 }}>
              <LanguageButton />
          </View>
        )}

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
