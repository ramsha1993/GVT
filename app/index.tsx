import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function Index() {
  const { isDarkMode, toggleTheme } = useTheme();

  const content = (
    <>

      
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <StatusBar style={isDarkMode ? "light" : "dark"} />
      <SafeAreaView style={styles.contentContainer}>
        <View style={[styles.textAndButtonsContainer, isDarkMode && { alignItems: 'flex-end' }]}>
          <View style={styles.textContainer}>
            <Text style={[styles.welcomeText, isDarkMode && styles.textWhite, isDarkMode && { textAlign: 'right' }]}>Welcome to Our</Text>
            <Text style={[styles.collectionText, isDarkMode && styles.textWhite, isDarkMode && { textAlign: 'right' }]}>Gift Collection</Text>
            <Text style={[styles.descriptionText, isDarkMode && styles.textWhiteDim, isDarkMode && { textAlign: 'right' }]}>
            This platform provides authorized access to official gifts received and exchanged.
            {"\n"}{"\n"}
            Kindly sign in to proceed.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Link href="/login" asChild>
              <TouchableOpacity style={isDarkMode ? styles.buttonSignUpDark : styles.buttonSignUpLight}>
                <Text style={isDarkMode ? styles.textSignUpDark : styles.textSignUpLight}>Login</Text>
              </TouchableOpacity>
            </Link>

          </View>
        </View>
      </SafeAreaView>
    </>
  );

  if (isDarkMode) {
    return (
      <ImageBackground
        source={require("../assets/darkmode/dark_login_bg.png")}
        style={styles.background}
        resizeMode="cover"
      >
        {content}
      </ImageBackground>
    );
  }

  return (
    <ImageBackground
      source={require("../assets/images/introbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      {content}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 130,
  },
  textAndButtonsContainer: {
    alignItems: "flex-start",
  },
  textContainer: {
    marginBottom: 24,
  },
  welcomeText: {
    fontFamily: "InstrumentSans",
    fontSize: 20,
    color: "#1A1A1A",
    letterSpacing: -0.5,
    fontWeight: "500",
  },
  collectionText: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 26,
    color: "#1A1A1A",
    marginTop: -5,
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 12,
    color: "#343332",
    lineHeight: 18,
    fontFamily: "InstrumentSans",
    maxWidth: "80%",
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    alignItems: "flex-start",
  },
  // Explicit Button Styles
  buttonSignUpLight: {
    backgroundColor: "#2C2C2C",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  buttonSignUpDark: {
    backgroundColor: '#CBA969',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  textSignUpLight: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "InstrumentSans",
  },
  textSignUpDark: {
    color: '#1A1A1A',
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "InstrumentSans",
  },
  buttonLogInLight: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonLogInDark: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },
  textLogInLight: {
    color: "#1A1A1A",
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "InstrumentSans",
  },
  textLogInDark: {
    color: '#1A1A1A',
    fontSize: 15,
    fontWeight: "600",
    fontFamily: "InstrumentSans",
  },

  textWhite: {
    color: '#FFFFFF',
  },
  textWhiteDim: {
    color: '#E0E0E0',
  },
});
