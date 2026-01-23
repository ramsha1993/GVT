import React, { useEffect } from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, View } from 'react-native';
import Animated, {
    Easing,
    runOnJS,
    useAnimatedStyle,
    useSharedValue,
    withTiming
} from 'react-native-reanimated';

const { width, height } = Dimensions.get('window');

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  const opacity = useSharedValue(1);

  useEffect(() => {
    // Show splash for 3 seconds, then fade out
    const timeout = setTimeout(() => {
      opacity.value = withTiming(0, { duration: 500, easing: Easing.out(Easing.ease) }, () => {
        runOnJS(onFinish)();
      });
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <ImageBackground
        source={require('../assets/images/splash-bg.png')}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 9999, // Ensure it stays on top
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 250, 
    height: 250,
  },
});
