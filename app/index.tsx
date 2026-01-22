import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function Index() {
  return (
    <ImageBackground
      source={require("../assets/images/introbg.png")}
      style={styles.background}
      resizeMode="cover"
    >
      <StatusBar style="dark" />
      <SafeAreaView style={styles.contentContainer}>
        <View style={styles.textAndButtonsContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.welcomeText}>Welcome to Our</Text>
            <Text style={styles.collectionText}>Gift Collection</Text>
            <Text style={styles.descriptionText}>
              Explore a curated showcase of gifts presented to the Government of Abu
              Dhabi from nations and leaders around the world.{"\n"}
              Please log in with your official credentials or create an account to
              begin your journey through this distinguished collection.
            </Text>
          </View>

          <View style={styles.buttonContainer}>
            <Link href="/signup" asChild>
              <TouchableOpacity style={styles.signUpButton}>
                <Text style={styles.signUpButtonText}>Sign Up</Text>
              </TouchableOpacity>
            </Link>
            <Link href="/login" asChild>
              <TouchableOpacity style={styles.logInButton}>
                <Text style={styles.logInButtonText}>Log In</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </View>
      </SafeAreaView>
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
  signUpButton: {
    backgroundColor: "#2C2C2C",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    alignItems: "center",
  },
  signUpButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "InstrumentSans",
  },
  logInButton: {
    backgroundColor: "transparent",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  logInButtonText: {
    color: "#2C2C2C",
    fontSize: 14,
    fontWeight: "500",
    fontFamily: "InstrumentSans",
  },
});
