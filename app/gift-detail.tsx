import Slider from "@react-native-community/slider";
import { useGLTF } from "@react-three/drei/native";
import { Canvas, useFrame } from "@react-three/fiber/native";
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

function Model({ rotation }: { rotation: number }) {
  // @ts-ignore
  const gltf = useGLTF(require("../assets/3dmodel/elephant_3d.glb")) as any;
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

export default function GiftDetail() {
  const [rotation, setRotation] = useState(0);
  const rotationRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* 3D Model Viewer Container */}
        <View style={styles.modelContainer}>
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#C98B5E" />
          </View>
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ flex: 1 }}>
            <ambientLight intensity={7} />
            <Suspense fallback={null}>
              <Model rotation={rotation} />
            </Suspense>
          </Canvas>
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
          <Text style={styles.sliderText}>Slide to Rotate</Text>
        </View>

        {/* Title Section */}
        <View style={styles.titleSection}>
          <Text style={styles.titleItalic}>Hand Crafted</Text>
          <Text style={styles.titleRegular}>Elephant Statue</Text>
          <Text style={styles.description}>
            A symbol of wisdom, strength, and prosperity, reflecting traditional craftsmanship and unity.
          </Text>
        </View>

        {/* Content Section */}
        <View style={styles.contentSection}>
          
          {/* Gift Origin */}
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 245, 228, 0.5)']}
            style={styles.infoCard}
          >
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/images/globe.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.cardTitle}>Gift Origin</Text>
            <Text style={styles.cardText}>
              This statue was received from the Government of India during an official diplomatic visit in 2018, symbolizing the shared values of peace, cultural harmony, and respect between both nations.
            </Text>
          </LinearGradient>

          {/* Gift Presentation */}
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 245, 228, 0.5)']}
            style={styles.infoCard}
          >
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/images/wheat.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.cardTitle}>Gift Presentation</Text>
            <Text style={styles.cardText}>
              Formally presented during a state ceremony at the Presidential Palace, where leaders exchanged artifacts representing heritage.
            </Text>
          </LinearGradient>

          {/* Material & Artistry */}
          <LinearGradient
            colors={['rgba(255, 255, 255, 0.5)', 'rgba(255, 245, 228, 0.5)']}
            style={styles.infoCard}
          >
            <View style={styles.iconContainer}>
              <Image
                source={require("../assets/images/books.png")}
                style={styles.icon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.cardTitle}>Material & Artistry</Text>
            <View style={styles.materialRow}>
              <View style={styles.materialColumn}>
                <Text style={styles.materialLabel}>Material</Text>
                <Text style={styles.materialValue}>White Marble</Text>
              </View>
              <View style={styles.materialColumn}>
                <Text style={styles.materialLabel}>Finish</Text>
                <Text style={styles.materialValue}>24K Gold</Text>
              </View>
            </View>
          </LinearGradient>

          {/* Technical Essence */}
          <View style={styles.technicalSection}>
            <Text style={styles.technicalTitle}>Technical Essence</Text>
            
            <View style={styles.technicalRow}>
              <Text style={styles.technicalLabel}>Dimensions</Text>
              <Text style={styles.technicalValue}>12"H x 15"W x 8"D</Text>
            </View>
            
            <View style={styles.technicalRow}>
              <Text style={styles.technicalLabel}>Weight</Text>
              <Text style={styles.technicalValue}>4.2 kg</Text>
            </View>
            
            <View style={styles.technicalRow}>
              <Text style={styles.technicalLabel}>Authenticity</Text>
              <Text style={styles.technicalValue}>Signed Certificate</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E7", 
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
    fontFamily: "InstrumentSans",
    fontSize: 36,
    color: "#2A2A2A",
    fontWeight: "500",
    textAlign: "center",
    marginTop: -5,
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
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E6D5C4', 
    backgroundColor: 'rgba(255,255,255,0.4)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    tintColor: '#C98B5E', 
  },
  cardTitle: {
    fontFamily: "InstrumentSans",
    fontSize: 22,
    color: "#2A2A2A",
    fontWeight: "600",
    marginBottom: 10,
    textAlign: "center",
  },
  cardText: {
    fontFamily: "InstrumentSans",
    fontSize: 15,
    color: "#4A4A4A",
    lineHeight: 24,
    textAlign: "center",
  },
  materialRow: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 15,
  },
  materialColumn: {
    alignItems: "center",
  },
  materialLabel: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#C98B5E",
    fontWeight: "700",
    marginBottom: 5,
  },
  materialValue: {
    fontFamily: "InstrumentSans",
    fontSize: 15,
    color: "#2A2A2A",
  },
  technicalSection: {
    marginTop: 20,
    padding: 20,
    backgroundColor: 'rgba(255,255,255,0.4)', 
    borderRadius: 30,
  },
  technicalTitle: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 32,
    color: "#2A2A2A",
    textAlign: "center",
    marginBottom: 20,
  },
  technicalRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#D0C4A8",
  },
  technicalLabel: {
    fontFamily: "InstrumentSans",
    fontSize: 16,
    color: "#888888",
  },
  technicalValue: {
    fontFamily: "InstrumentSans",
    fontSize: 16,
    color: "#1A1A1A",
    fontWeight: "700",
  },
});
