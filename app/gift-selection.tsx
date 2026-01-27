import { LinearGradient } from "expo-linear-gradient";
import { Stack, useRouter } from "expo-router";
import {
    Dimensions,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const { width } = Dimensions.get("window");

export default function GiftSelection() {
  const router = useRouter();
  const { isDarkMode } = useTheme();

  const handleGiftSend = () => {
    router.push("/home");
  };

  const handleGiftReceived = () => {
    router.push("/home");
  };

  const content = (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {/* Header with Profile Image */}
      <View style={styles.header}>
        <Image
          source={require("../assets/images/user.png")}
          style={styles.profileImage}
          resizeMode="cover"
        />
        <Pressable style={styles.menuButton}>
          <View style={[styles.menuLine, isDarkMode && styles.goldLine]} />
          <View style={[styles.menuLine, isDarkMode && styles.goldLine]} />
          <View style={[styles.menuLine, isDarkMode && styles.goldLine]} />
        </Pressable>
      </View>

      {/* Title Section */}
      <View style={styles.titleSection}>
        <Text style={[styles.greeting, isDarkMode && styles.textWhite]}>Greeting</Text>
        <Text style={[styles.subtitle, isDarkMode && styles.textGold]}>Hope you're well</Text>
        <Text style={[styles.description, isDarkMode && styles.textGrey]}>
          Welcome to your personal collection. Explore the distinguished gifts presented to Abu Dhabi, symbolizing respect, friendship, and global collaboration.
        </Text>
      </View>

      {/* Curved Container */}
      <View style={[styles.curvedContainer, isDarkMode && styles.darkCurvedContainer]}>
        {/* Subtitle Text */}
        <View style={styles.subtitleContainer}>
          <Text style={[styles.glimpseText, isDarkMode && styles.textGrey]}>
            A glimpse into the remarkable artifacts and handcrafted treasures shared through international goodwill.
          </Text>
        </View>

        {/* Gift Send Card */}
        <View style={styles.cardContainer}>
          <View style={[styles.card, isDarkMode && styles.darkCard]}>
            {isDarkMode && <View style={styles.cardGoldBorder} />}
            <Image
              source={require("../assets/icons/send.png")}
              style={[styles.icon, isDarkMode && { tintColor: '#CBA969' }]}
              resizeMode="contain"
            />
            <Text style={[styles.cardTitle, isDarkMode && styles.textWhite]}>Gift Send</Text>
            
            {isDarkMode ? (
                <LinearGradient
                  colors={['#FFFCB4', '#CBA969']}
                  style={styles.continueButton}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                    <Pressable onPress={handleGiftSend} style={{ width: '100%', alignItems: 'center' }}>
                        <Text style={[styles.continueButtonText, { color: '#1A1A1A' }]}>Check-Out</Text>
                    </Pressable>
                </LinearGradient>
            ) : (
                <Pressable style={styles.continueButton} onPress={handleGiftSend}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </Pressable>
            )}
          </View>
        </View>

        {/* Gift Received Card */}
        <View style={styles.cardContainer}>
          <View style={[styles.card, isDarkMode && styles.darkCard]}>
            {isDarkMode && <View style={styles.cardGoldBorder} />}
            <Image
              source={require("../assets/icons/recieved.png")}
              style={[styles.icon, isDarkMode && { tintColor: '#CBA969' }]}
              resizeMode="contain"
            />
            <Text style={[styles.cardTitle, isDarkMode && styles.textWhite]}>Gift Received</Text>
            {isDarkMode ? (
                <LinearGradient
                  colors={['#FFFCB4', '#CBA969']}
                  style={styles.continueButton}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                >
                    <Pressable onPress={handleGiftReceived} style={{ width: '100%', alignItems: 'center' }}>
                         <Text style={[styles.continueButtonText, { color: '#1A1A1A' }]}>Check-Out</Text>
                    </Pressable>
                </LinearGradient>
            ) : (
                <Pressable style={styles.continueButton} onPress={handleGiftReceived}>
                    <Text style={styles.continueButtonText}>Continue</Text>
                </Pressable>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );

  return (
    <SafeAreaView style={[styles.container, isDarkMode && { backgroundColor: 'transparent' }]}>
      <Stack.Screen options={{ headerShown: false }} />
      {isDarkMode ? (
        <LinearGradient
            colors={['#3E392C', '#08090C']}
            style={{ flex: 1 }}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 0.8, y: 1 }}
        >
            {content}
        </LinearGradient>
      ) : (
        content
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEDCF", // Darker beige background matching Home
  },
  scrollContent: {
    flexGrow: 1,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 0,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  menuButton: {
    width: 30,
    height: 24,
    justifyContent: "space-between",
  },
  menuLine: {
    width: "100%",
    height: 3,
    backgroundColor: "#C98B5E",
    borderRadius: 2,
  },
  titleSection: {
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 30,
  },
  greeting: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 40,
    color: "#1A1A1A",
    lineHeight: 48,
  },
  subtitle: {
    fontFamily: "InstrumentSans",
    fontSize: 32,
    color: "#1A1A1A",
    fontWeight: "400",
    marginTop: -5,
  },
  description: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#5A5A5A",
    lineHeight: 22,
    marginTop: 15,
  },
  curvedContainer: {
    backgroundColor: "#FFF6E7", // Lighter beige for curved section
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop: 40,
    paddingBottom: 40,
    flex: 1,
  },
  subtitleContainer: {
    paddingHorizontal: 40,
    marginBottom: 30,
  },
  glimpseText: {
    fontFamily: "InstrumentSans",
    fontSize: 13,
    color: "#6A6A6A",
    lineHeight: 20,
    textAlign: "center",
  },
  cardContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#FFEDCF", // Matching the specific beige in reference
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#4A4A4A", // Dark thin border as seen in reference
    padding: 30,
    alignItems: "center",
  },
  icon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  cardTitle: {
    fontFamily: "InstrumentSans",
    fontSize: 32,
    color: "#2A2A2A",
    fontWeight: "400",
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: "#333333", // Dark grey/black
    borderRadius: 30,
    paddingVertical: 15,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
  },
  continueButtonText: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  // Dark Mode Styles
  textWhite: {
    color: '#FFFFFF',
  },
  textGold: {
    color: '#CBA969',
  },
  textGrey: {
    color: '#A0A0A0',
  },
  goldLine: {
    backgroundColor: '#CBA969',
  },
  darkCurvedContainer: {
    backgroundColor: 'transparent',
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#CBA969',
  },
  darkCard: {
    backgroundColor: '#1A1A1A',
    borderColor: '#CBA969',
    borderWidth: 1,
  },
  cardGoldBorder: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#CBA969',
    opacity: 0.5,
  }
});
