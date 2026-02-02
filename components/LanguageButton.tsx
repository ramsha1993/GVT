import { Ionicons } from "@expo/vector-icons";
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../contexts/ThemeContext';

export default function LanguageButton() {
  const { isDarkMode } = useTheme();

  return (
    <TouchableOpacity style={[
      styles.container, 
      isDarkMode ? styles.containerDark : styles.containerLight
    ]}>
      <Text style={[
        styles.text, 
        isDarkMode ? styles.textDark : styles.textLight
      ]}>ENG</Text>
      <Ionicons 
        name="chevron-down" 
        size={16} 
        color={isDarkMode ? '#FFFFFF' : '#1A1A1A'} 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderRadius: 30, // Matching ThemeToggle rounded look (though plan said 20, 30 might be closer to pill)
    paddingHorizontal: 16,
    paddingVertical: 10, // Adjusted to match height of ThemeToggle roughly
  },
  containerLight: {
    borderColor: '#1A1A1A',
    backgroundColor: 'transparent',
  },
  containerDark: {
    borderColor: '#CBA969',
    backgroundColor: 'transparent',
  },
  text: {
    fontFamily: 'InstrumentSans',
    fontSize: 14,
    fontWeight: '500',
  },
  textLight: {
    color: '#1A1A1A',
  },
  textDark: {
    color: '#FFFFFF',
  },
});
