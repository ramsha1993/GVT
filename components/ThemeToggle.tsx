import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <TouchableOpacity onPress={toggleTheme} activeOpacity={0.8} style={styles.container}>
        {/* Light Mode State */}
        {!isDarkMode && (
            <View style={[styles.pill, styles.pillLight]}>
                <View style={styles.circleDark}>
                     <Image 
                        source={require('../assets/icons/light.png')} 
                        style={[styles.icon, { tintColor: '#FFF' }]} 
                        resizeMode="contain"
                    />
                </View>
                <Text style={styles.textLight}>Light</Text>
            </View>
        )}

        {/* Dark Mode State */}
        {isDarkMode && (
             <View style={[styles.pill, styles.pillDark]}>
                <Text style={styles.textDark}>Dark</Text>
                <View style={styles.circleGold}>
                    <Image 
                        source={require('../assets/icons/dark.png')} 
                        style={[styles.icon, { tintColor: '#1A1A1A' }]} 
                        resizeMode="contain"
                    />
                </View>
            </View>
        )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 999,
  },
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 30,
    padding: 4,
    minWidth: 100,
    justifyContent: 'space-between',
    borderWidth: 1,
  },
  // Light Mode Styles
  pillLight: {
    backgroundColor: 'transparent',
    borderColor: '#333',
  },
  textLight: {
    fontFamily: 'InstrumentSans',
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
    marginRight: 15,
  },
  circleDark: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  // Dark Mode Styles
  pillDark: {
    backgroundColor: 'transparent',
    borderColor: '#CBA969',
  },
  textDark: {
    fontFamily: 'InstrumentSans',
    fontSize: 16,
    color: '#FFF',
    fontWeight: '500',
    marginLeft: 15,
  },
  circleGold: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#CBA969', // Gold background for icon circle
    alignItems: 'center',
    justifyContent: 'center',
  },

  icon: {
    width: 18,
    height: 18,
  },
});
