import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from "expo-router";
import { useState } from "react";
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Signup() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.card}>
            <Text style={styles.headerText}>Sign up</Text>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>First name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter name"
                placeholderTextColor="#A0A0A0"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Last name</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter name"
                placeholderTextColor="#A0A0A0"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>ID number</Text>
              <TextInput
                style={styles.input}
                placeholder="00000"
                placeholderTextColor="#A0A0A0"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor="#A0A0A0"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            <View style={styles.inputGroup}>
              <View style={styles.labelContainer}>
                <Text style={styles.label}>Create Password</Text>
                <View style={styles.redDot} />
              </View>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderTextColor="#A0A0A0"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIcon}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#4A4A4A"
                  />
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity style={styles.signupButton}>
              <Text style={styles.signupButtonText}>Log In</Text> 
              {/* Keeping 'Log In' as requested in image, though 'Sign Up' makes more sense contextually. 
                  If user wants strict adherence to image, "Log In" is correct text on the button in the signup image. */}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF8E7",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFCF5",
    borderRadius: 30,
    paddingVertical: 40,
    paddingHorizontal: 24,
    width: "100%",
  },
  headerText: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 36,
    color: "#1A1A1A",
    textAlign: "center",
    marginBottom: 30,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#4A4A4A",
    marginBottom: 8,
    fontWeight: "500",
  },
  labelContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  redDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#FF0000",
    marginLeft: 4,
    marginBottom: 2,
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#D0C9B6",
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 14,
    fontFamily: "InstrumentSans",
    color: "#1A1A1A",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D0C9B6",
    borderRadius: 25,
    paddingHorizontal: 20,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 14,
    fontFamily: "InstrumentSans",
    color: "#1A1A1A",
  },
  eyeIcon: {
    padding: 5,
  },
  signupButton: {
    backgroundColor: "#333333",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 20,
  },
  signupButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "InstrumentSans",
    fontWeight: "500",
  },
});
