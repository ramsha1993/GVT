import Slider from "@react-native-community/slider";
import { useGLTF } from "@react-three/drei/native";
import { Canvas, useFrame } from "@react-three/fiber/native";
import { Asset } from "expo-asset";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import { Suspense, useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import * as THREE from "three";
import "../polyfills";

const { width } = Dimensions.get("window");

// Preload the asset to ensure it's available
const modelAsset = Asset.fromModule(require("../assets/3dmodel/elephant_3d.glb"));

function Model({ rotation }: { rotation: number }) {
  // Use the local URI from the preloaded asset
  // @ts-ignore
  const gltf = useGLTF(modelAsset.uri || modelAsset.localUri || require("../assets/3dmodel/elephant_3d.glb")) as any;
  const mesh = useRef<THREE.Group>(null);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y = rotation;
    }
  });

  return (
    <primitive 
      object={gltf.scene} 
      ref={mesh} 
      scale={[2.8, 2.8, 2.8]} 
      position={[0, -1.2, 0]} 
    />
  );
}

import { useTheme } from "../contexts/ThemeContext";

export default function GiftDetail() {
  const { isDarkMode } = useTheme();
  const [rotation, setRotation] = useState(0);
  const [assetLoaded, setAssetLoaded] = useState(false);

  useEffect(() => {
    async function loadAsset() {
      try {
        await modelAsset.downloadAsync();
        setAssetLoaded(true);
      } catch (e) {
        console.error("Failed to load 3D model asset:", e);
      }
    }
    loadAsset();
  }, []);

  return (
    <SafeAreaView style={[styles.container, isDarkMode && { backgroundColor: 'transparent' }]}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 3D Model Viewer Container */}
        <View style={[styles.modelContainer, isDarkMode && styles.darkModelContainer]}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#C98B5E" />
          </View>
          {assetLoaded && (
            <Canvas 
              camera={{ position: [0, 0, 5], fov: 50 }} 
              style={{ flex: 1 }}
              frameloop="always" // Continuous rendering for slider interaction
            >
              <ambientLight intensity={7} />
              <directionalLight position={[5, 10, 5]} intensity={1.5} />
              <directionalLight position={[-5, 5, 5]} intensity={1.0} />
              <directionalLight position={[0, 0, 5]} intensity={1.0} />
              <Suspense fallback={null}>
                <Model rotation={rotation} />
              </Suspense>
            </Canvas>
          )}
        </View>

        {/* Rotation Slider */}
        <View style={styles.controlsSection}>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={Math.PI * 2}
            value={rotation}
            onValueChange={setRotation}
            minimumTrackTintColor="#BCA488" 
            maximumTrackTintColor="#BCA488" 
            thumbTintColor="#C98B5E" 
          />
          <Text style={[styles.sliderText, isDarkMode && styles.textGrey]}>Slide to Rotate</Text>
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={[styles.titleItalic, isDarkMode && styles.textWhite]}>Handcrafted</Text>
          <Text style={[styles.titleRegular, isDarkMode && styles.textWhite]}>Elephant Statue</Text>
          
          <View style={styles.metadataRow}>
            <View style={styles.metadataItem}>
              <Text style={[styles.metadataLabel, isDarkMode && styles.textWhite]}>Collection Number</Text>
              <Text style={[styles.metadataValue, isDarkMode && styles.textWhite]}>UAE-IND-2018-04</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.metadataItem}>
              <Text style={[styles.metadataLabel, isDarkMode && styles.textWhite]}>Category</Text>
              <Text style={[styles.metadataValue, isDarkMode && styles.textWhite]}>Sculpture</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.metadataItem}>
              <Text style={[styles.metadataLabel, isDarkMode && styles.textWhite]}>Gift Type</Text>
              <Text style={[styles.metadataValue, isDarkMode && styles.textWhite]}>Received</Text>
            </View>
          </View>

          <Text style={[styles.description, isDarkMode && styles.textGrey]}>
            A symbol of wisdom, strength, and prosperity, reflecting traditional craftsmanship and unity.
          </Text>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          
            {/* Gift Origin */}
            <LinearGradient
              colors={isDarkMode ? ['#0F0F0F', '#0F0F0F'] : ['#FFFFFF', '#FFF5E4' ]}
              style={[styles.infoCard, isDarkMode && styles.darkInfoCard]}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
            >
              <LinearGradient
                colors={isDarkMode ? ['#FFFCB4', '#CBA969'] : ['#FFF9F0', '#FFEacc']}
                style={[styles.iconContainer, isDarkMode && styles.goldIconContainer]}
              >
                <Image
                  source={require("../assets/images/globe.png")}
                  style={[styles.icon, { tintColor: isDarkMode ? '#1A1A1A' : '#8B5A2B' }]}
                  resizeMode="contain"
                />
              </LinearGradient>
            <Text style={[styles.cardTitle, isDarkMode && styles.textWhite]}>Gift Origin</Text>
            
            <View style={styles.originRow}>
              <View style={styles.originItem}>
                <Text style={[styles.originLabel, isDarkMode && styles.textGrey]}>Source/Giver</Text>
                <Text style={[styles.originValue, isDarkMode && styles.textWhite]}>Gifted by the Government of India</Text>
              </View>
              <View style={[styles.originDivider, isDarkMode && styles.goldDivider]} />
              <View style={styles.originItem}>
                <Text style={[styles.originLabel, isDarkMode && styles.textGrey]}>Date</Text>
                <Text style={[styles.originValue, isDarkMode && styles.textWhite]}>Received: January 24, 2018</Text>
              </View>
              <View style={[styles.originDivider, isDarkMode && styles.goldDivider]} />
              <View style={styles.originItem}>
                <Text style={[styles.originLabel, isDarkMode && styles.textGrey]}>Location</Text>
                <Text style={[styles.originValue, isDarkMode && styles.textWhite]}>Presidential Palace, Abu Dhabi</Text>
              </View>
            </View>

            <Text style={[styles.cardText, isDarkMode && styles.textGrey]}>
              This statue was received from the Government of India during an official diplomatic visit in 2018, symbolizing the shared values of peace, cultural harmony, and respect between both nations.
            </Text>
            </LinearGradient>

          {/* Gift Presentation */}
          <LinearGradient
             colors={isDarkMode ? ['#0F0F0F', '#0F0F0F'] : ['rgba(255, 255, 255, 0.5)', 'rgba(255, 245, 228, 0.5)']}
             style={[styles.infoCard, isDarkMode && styles.darkInfoCard]}
             start={{ x: 0.5, y: 0 }}
             end={{ x: 0.5, y: 1 }}
          >
            <LinearGradient
                colors={isDarkMode ? ['#FFFCB4', '#CBA969'] : ['#FFF9F0', '#FFEacc']}
                style={[styles.iconContainer, isDarkMode && styles.goldIconContainer]}
              >
              <Image
                source={require("../assets/images/wheat.png")}
                style={[styles.icon, { tintColor: isDarkMode ? '#1A1A1A' : '#8B5A2B' }]}
                resizeMode="contain"
              />
            </LinearGradient>
            <Text style={[styles.cardTitle, isDarkMode && styles.textWhite]}>Gift Presentation</Text>
            <Text style={[styles.cardText, isDarkMode && styles.textGrey]}>
              Formally presented during a state ceremony at the Presidential Palace, where leaders exchanged artifacts representing heritage.
            </Text>
          </LinearGradient>

          {/* Material & Artistry */}
          <LinearGradient
             colors={isDarkMode ? ['#0F0F0F', '#0F0F0F'] : ['rgba(255, 255, 255, 0.5)', 'rgba(255, 245, 228, 0.5)']}
             style={[styles.infoCard, isDarkMode && styles.darkInfoCard]}
             start={{ x: 0.5, y: 0 }}
             end={{ x: 0.5, y: 1 }}
          >
             <LinearGradient
                colors={isDarkMode ? ['#FFFCB4', '#CBA969'] : ['#FFF9F0', '#FFEacc']}
                style={[styles.iconContainer, isDarkMode && styles.goldIconContainer]}
              >
              <Image
                source={require("../assets/images/books.png")}
                style={[styles.icon, { tintColor: isDarkMode ? '#1A1A1A' : '#8B5A2B' }]}
                resizeMode="contain"
              />
            </LinearGradient>
            <Text style={[styles.cardTitle, isDarkMode && styles.textWhite]}>Material & Artistry</Text>
            <View style={styles.materialRow}>
              <View style={styles.materialColumn}>
                <Text style={[styles.materialLabel, isDarkMode && styles.textGrey]}>Material</Text>
                <Text style={[styles.materialValue, isDarkMode && styles.textWhite]}>White Marble</Text>
              </View>
              <View style={styles.materialColumn}>
                <Text style={[styles.materialLabel, isDarkMode && styles.textGrey]}>Finish</Text>
                <Text style={[styles.materialValue, isDarkMode && styles.textWhite]}>24K Gold</Text>
              </View>
            </View>
          </LinearGradient>

                  {/* Quote Box */}
                  <LinearGradient
                    colors={['rgba(208, 140, 91, 0.5)', 'rgba(208, 140, 91, 0.25)']}
                    style={styles.quoteBox}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                  >
                    <Image 
                      source={require("../assets/icons/quote.png")} 
                      style={styles.quoteIcon} 
                      resizeMode="contain"
                    />
                    
                    <Text style={[styles.quoteText, isDarkMode && styles.textWhite]}>
                      This piece represents more than a gift; it's a bridge between souls and histories.
                    </Text>
                    
                    <View style={styles.authorSection}>
                      <Text style={[styles.authorName, isDarkMode && styles.textWhite]}>John Do</Text>
                      <Text style={[styles.authorTitle, isDarkMode && styles.textGrey]}>Master Artisan, Sri Lanka</Text>
                    </View>
                  </LinearGradient>

          {/* Technical Essence */}
          <View style={[styles.technicalSection, isDarkMode && styles.darkTechnicalSection]}>
            <Text style={[styles.technicalTitle, isDarkMode && styles.textWhite]}>Technical Essence</Text>
            
            <View style={styles.technicalRow}>
              <Text style={styles.technicalLabel}>Dimensions</Text>
              <Text style={[styles.technicalValue, isDarkMode && styles.textWhite]}>12"H x 15"W x 8"D</Text>
            </View>
            
            <View style={styles.technicalRow}>
              <Text style={styles.technicalLabel}>Weight</Text>
              <Text style={[styles.technicalValue, isDarkMode && styles.textWhite]}>4.2 kg</Text>
            </View>
            
            <View style={styles.technicalRow}>
              <Text style={styles.technicalLabel}>Authenticity</Text>
              <Text style={[styles.technicalValue, isDarkMode && styles.textWhite]}>Signed Certificate</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      {isDarkMode && (
        <LinearGradient
            colors={['#3E392C', '#08090C']}
            style={[StyleSheet.absoluteFillObject, { zIndex: -2 }]}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0.8, y: 1 }}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEDCF", 
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: 40,
  },
  modelContainer: {
    backgroundColor: "#FFFFFF",
    height: 400,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden', 
    marginBottom: 20,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1,
  },
  controlsSection: {
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  slider: {
    width: width - 40,
    height: 40,
  },
  sliderText: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#5A5A5A",
    marginTop: 5,
  },
  titleSection: {
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  titleItalic: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 40,
    color: "#2A2A2A",
    textAlign: "center",
  },
  titleRegular: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 40,
    color: "#2A2A2A",
    textAlign: "center",
    marginTop: -10,
  },
  description: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#5A5A5A",
    textAlign: "center",
    lineHeight: 22,
    marginTop: 15,
  },
  contentSection: {
    paddingHorizontal: 20,
  },
  quoteBox: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 30,
    marginBottom: 40,
    position: "relative",
    overflow: "visible", // Allow quote icon to float if needed, though designed completely inside
  },
  quoteIcon: {
    position: "absolute",
    right: 30,
    top: 30,
    width: 100,
    height: 100,
    opacity: 0.8,
    tintColor: "#FFFFFF" 
  },
  quoteText: {
    fontFamily: "InstrumentSans",
    fontSize: 18,
    color: "#2A2A2A",
    lineHeight: 26,
    marginBottom: 30,
    maxWidth: "80%",
  },
  authorSection: {
    marginTop: 10,
  },
  authorName: {
    fontFamily: "InstrumentSans",
    fontSize: 18,
    color: "#1A1A1A",
    fontWeight: "bold",
  },
  authorTitle: {
    fontFamily: "InstrumentSans",
    fontSize: 12,
    color: "#4A4A4A",
    fontWeight: "bold",
  },
  infoCard: {
    borderRadius: 20,
    padding: 30,
    marginBottom: 20,
    alignItems: "center",
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.6)',
  },
  iconContainer: {
    width: 60,
    height: 60,
    marginBottom: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E6CFA0', 
    backgroundColor: '#FFF0D9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -45, // Pulls the icon up
    shadowColor: "#C98B5E", // Warm shadow
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 4,
  },
  icon: {
    width: 28,
    height: 28,
  },
  cardTitle: {
    fontFamily: "InstrumentSans",
    fontSize: 26,
    color: "#2C2C2C",
    fontWeight: "500",
    marginBottom: 20,
    textAlign: "center",
  },
  cardText: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#4A4A4A",
    lineHeight: 22,
    textAlign: "center",
    maxWidth: "90%",
  },
  materialRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
    gap: 40,
  },
  materialColumn: {
    alignItems: "center",
  },
  materialLabel: {
    fontFamily: "InstrumentSans",
    fontSize: 12,
    color: "#D08C5B", // Updated to reddish-brown gold for light mode
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
  },
  materialValue: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#2A2A2A",
    fontWeight: "600",
    textAlign: "center",
  },
  technicalSection: {
    marginTop: 20,
    padding: 30,
    backgroundColor: 'rgba(255,255,255,0.4)', 
    borderRadius: 20,
  },
  technicalTitle: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 28,
    color: "#2A2A2A",
    textAlign: "center",
    marginBottom: 30,
  },
  technicalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    borderBottomWidth: 0,
  },
  technicalLabel: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#888888",
  },
  technicalValue: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#1A1A1A",
    fontWeight: "700",
  },
  // New Styles
  metadataRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 20,
    gap: 15,
  },
  metadataItem: {
    alignItems: "center",
  },
  metadataLabel: {
    fontFamily: "InstrumentSans",
    fontSize: 10,
    color: "#2A2A2A", // Default for light mode
    fontWeight: "700",
    marginBottom: 4,
    textAlign: "center",
  },
  metadataValue: {
    fontFamily: "InstrumentSans",
    fontSize: 10,
    color: "#2A2A2A",
    fontWeight: "600",
    textAlign: "center",
  },
  divider: {
    width: 2,
    height: 30,
    backgroundColor: "#C98B5E",
    marginTop: 5,
  },
  originRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  originItem: {
    alignItems: "center",
    flex: 1,
    paddingHorizontal: 5,
  },
  originLabel: {
    fontFamily: "InstrumentSans",
    fontSize: 11,
    color: "#8C7B70", // Warm grey
    marginBottom: 6,
    textAlign: "center",
  },
  originValue: {
    fontFamily: "InstrumentSans",
    fontSize: 13,
    color: "#1A1A1A",
    textAlign: "center",
    lineHeight: 18,
    fontWeight: "500",
  },
  originDivider: {
    width: 1,
    height: "100%",
    backgroundColor: "#D4B895", // Muted gold
    alignSelf: "center",
  },
  // Dark Mode Styles
  textWhite: { color: '#FFF' },
  textGold: { color: '#CBA969' },
  textGrey: { color: '#A0A0A0' },
  darkModelContainer: {
    backgroundColor: '#3E392C',
  },
  darkInfoCard: {
    backgroundColor: '#0F0F0F',
    borderColor: '#222',
  },
  goldIconContainer: {
    backgroundColor: '#FFFCB4',
    borderWidth: 0,
    marginTop: -45, // Pulls the icon up to overlap/float
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
  darkIconContainer: {
    // Replaced by goldIconContainer usage
  },
  darkTechnicalSection: {
    backgroundColor: '#000000',
    borderRadius: 20,
  },
  goldDivider: {
    backgroundColor: '#CBA969',
  },
  // Removed unused styles
});
