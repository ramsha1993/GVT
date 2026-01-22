import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function GiftDetail() {
  const router = useRouter();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // For now, using gift1.png as the main image
  // In a real app, this would come from route params
  const images = [
    require("../assets/images/giftimg2.png"),
    require("../assets/images/giftimg1.png"), // Duplicate for demo
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Image Carousel Section */}
        <View style={styles.imageSection}>
          <View style={styles.imageContainer}>
            {/* Left Arrow */}
            <TouchableOpacity
              style={[styles.arrowButton, styles.leftArrow]}
              onPress={handlePrevImage}
            >
              <Ionicons name="chevron-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>

            {/* Gift Image */}
            <Image
              source={images[currentImageIndex]}
              style={styles.giftImage}
              resizeMode="contain"
            />

            {/* 360 Label */}
            <Image
              source={require("../assets/images/360.png")}
              style={styles.label360}
              resizeMode="contain"
            />

            {/* Right Arrow */}
            <TouchableOpacity
              style={[styles.arrowButton, styles.rightArrow]}
              onPress={handleNextImage}
            >
              <Ionicons name="chevron-forward" size={24} color="#FFFFFF" />
            </TouchableOpacity>
          </View>

          {/* Pagination Dots */}
          <View style={styles.paginationContainer}>
            {images.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.dot,
                  currentImageIndex === index && styles.activeDot,
                ]}
              />
            ))}
          </View>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          {/* Title */}
          <View style={styles.titleContainer}>
            <Text style={styles.titleItalic}>Hand Crafted </Text>
            <Text style={styles.titleRegular}>Elephant Statue</Text>
          </View>

          {/* Main Description */}
          <Text style={styles.mainDescription}>
            A symbol of wisdom, strength, and prosperity, this handcrafted elephant statue
            was presented to the Government of Abu Dhabi as a token of enduring friendship
            and cultural appreciation. The intricate design reflects traditional artistry
            and the spirit of unity between nations.
          </Text>

          {/* Gift Origin Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Gift Origin</Text>
            <Text style={styles.sectionText}>
              This statue was received from the Government of India during an official
              diplomatic visit in 2018, symbolizing the shared values of peace, cultural harmony,
              and respect for heritage.
            </Text>
          </View>

          {/* Presentation Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Presentation</Text>
            <Text style={styles.sectionText}>
              The gift was formally presented during a state ceremony held at the Presidential
              Palace, where leaders exchanged commemorative artifacts representing their
              nations' heritage and mutual respect.
            </Text>
          </View>

          {/* Material & Craftsmanship Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Material & Craftsmanship</Text>
            <Text style={styles.sectionText}>
              Hand-carved from marble and adorned with semi-precious stones and gold leaf
              detailing, this piece showcases the precision and elegance of traditional Indian
              artistry.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEDCF", // Main background
  },
  scrollContent: {
    flexGrow: 1,
  },
  imageSection: {
    backgroundColor: "#FFFFFF",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 40,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    height: 300,
  },
  giftImage: {
    width: "100%",
    height: "100%",
  },
  label360: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
    width: 50,
    height: 50,
  },
  arrowButton: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 10,
  },
  leftArrow: {
    left: 10,
  },
  rightArrow: {
    right: 10,
  },
  paginationContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    gap: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D0D0D0",
  },
  activeDot: {
    backgroundColor: "#333333",
  },
  contentSection: {
    backgroundColor: "#FFF6E7",
    paddingHorizontal: 40,
    paddingVertical: 20,
  },
  titleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 16,
  },
  titleItalic: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 32,
    color: "#1A1A1A",
  },
  titleRegular: {
    fontFamily: "InstrumentSans",
    fontSize: 32,
    color: "#1A1A1A",
    fontWeight: "500",
  },
  mainDescription: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#4A4A4A",
    lineHeight: 22,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: "InstrumentSans",
    fontSize: 18,
    color: "#1A1A1A",
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionText: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#4A4A4A",
    lineHeight: 22,
  },
});
