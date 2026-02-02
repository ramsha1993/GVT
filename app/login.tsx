import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
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
    View
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function Login() {
  const router = useRouter();
  const { isDarkMode } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      router.push("/gift-selection");
    } else {
      setError("Invalid credentials. Please try admin/admin.");
    }
  };

  if (isDarkMode) {
    return (
      <LinearGradient
        colors={['#3E392C', '#08090C']}
        style={{ flex: 1 }}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
      >
        <Stack.Screen options={{ headerShown: false }} />
        
        <Stack.Screen options={{ headerShown: false }} />
        
        <Stack.Screen options={{ headerShown: false }} />
        
        <Stack.Screen options={{ headerShown: false }} />
        
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.keyboardAvoidingView}
        >
          <ScrollView contentContainerStyle={styles.scrollViewContent}>
            <LinearGradient
              colors={['#FFFCB4', '#CBA969']}
              style={styles.goldCard}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <Text style={styles.goldTitle}>Log in</Text>

              {error ? <Text style={styles.errorText}>{error}</Text> : null}

              <View style={styles.inputGroup}>
                <Text style={styles.goldLabel}>Email</Text>
                <TextInput
                  style={styles.goldInput}
                  placeholder="Enter email"
                  placeholderTextColor="#5A5A5A"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  value={email}
                  onChangeText={setEmail}
                />
              </View>

              <View style={styles.inputGroup}>
                <Text style={styles.goldLabel}>Password</Text>
                <View style={styles.goldPasswordContainer}>
                  <TextInput
                    style={styles.goldPasswordInput}
                    placeholder="Password"
                    placeholderTextColor="#5A5A5A"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                    style={styles.eyeIcon}
                  >
                    <Ionicons
                      name={showPassword ? "eye-off-outline" : "eye-outline"}
                      size={20}
                      color="#3A3A3A"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <TouchableOpacity style={styles.forgotPasswordButton}>
                <Text style={styles.goldForgotText}>Forgot Password</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.goldLoginButton} onPress={handleLogin}>
                <Text style={styles.goldLoginText}>Log In</Text>
              </TouchableOpacity>
            </LinearGradient>
          </ScrollView>
        </KeyboardAvoidingView>
      </LinearGradient>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <Stack.Screen options={{ headerShown: false }} />
      
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.card}>
            <Text style={styles.headerText}>Log in</Text>

            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                style={styles.input}
                placeholder="Enter email"
                placeholderTextColor="#A0A0A0"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  placeholder="Password"
                  placeholderTextColor="#A0A0A0"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
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

            <TouchableOpacity style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordText}>Forgot Password</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Log In</Text>
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
    backgroundColor: "#FFF8E7", // Light beige background
  },
  themeToggleContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    gap: 10,
    zIndex: 10,
  },
  themeLabel: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#4A4A4A",
    fontWeight: "500",
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
    backgroundColor: "#FFFCF5", // Slightly lighter card background
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
  errorText: {
    fontFamily: "InstrumentSans",
    fontSize: 12,
    color: "#FF0000",
    textAlign: "center",
    marginBottom: 16,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#4A4A4A",
    marginBottom: 8,
    fontWeight: "500",
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#D0C9B6", // Beige-ish border
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
  forgotPasswordButton: {
    alignSelf: "flex-end",
    marginBottom: 30,
  },
  forgotPasswordText: {
    fontFamily: "InstrumentSans",
    fontSize: 12,
    color: "#4A4A4A",
  },
  loginButton: {
    backgroundColor: "#333333", // Dark grey/black
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
  },
  loginButtonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "InstrumentSans",
    fontWeight: "500",
  },
  // Dark Mode Styles
  darkContentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 60,
    paddingHorizontal: 30,
  },
  darkTitle: {
    fontFamily: "InstrumentSans",
    fontSize: 42,
    color: "#FFFFFF",
    lineHeight: 48,
    textAlign: "right",
    marginBottom: 20,
    fontWeight: "500",
  },
  darkSubtext: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#E0E0E0",
    textAlign: "right",
    lineHeight: 22,
    marginBottom: 10,
    alignSelf: "flex-end",
    maxWidth: "80%",
  },
  darkCaption: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#E0E0E0",
    textAlign: "right",
    marginBottom: 30,
    alignSelf: "flex-end",
  },
  darkActionButtons: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 15,
  },
  darkSignUpButton: {
    backgroundColor: "#E2C48D",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  darkSignUpText: {
    color: "#3A3A3A",
    fontFamily: "InstrumentSans",
    fontWeight: "600",
    fontSize: 14,
  },
  darkLoginButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  darkLoginText: {
    color: "#1A1A1A",
    fontFamily: "InstrumentSans",
    fontWeight: "600",
    fontSize: 14,
  },
  // Golden Card Styles
  goldCard: {
    borderRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
    width: "100%",
  },
  goldTitle: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 42,
    color: "#2A2A2A",
    textAlign: "center",
    marginBottom: 40,
  },
  goldLabel: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#3A3A3A",
    marginBottom: 8,
    fontWeight: "500",
  },
  goldInput: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#8A8A8A", // Thin dark border
    borderRadius: 25,
    paddingVertical: 14,
    paddingHorizontal: 20,
    fontSize: 14,
    fontFamily: "InstrumentSans",
    color: "#1A1A1A",
  },
  goldPasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#8A8A8A",
    borderRadius: 25,
    height: 50,
    paddingHorizontal: 15,
  },
  goldPasswordInput: {
    flex: 1,
    height: "100%",
    fontSize: 14,
    fontFamily: "InstrumentSans",
    color: "#1A1A1A",
  },
  goldForgotText: {
    fontFamily: "InstrumentSans",
    fontSize: 12,
    color: "#3A3A3A",
  },
  goldLoginButton: {
    backgroundColor: "#1A1A1A", // Black
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  goldLoginText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontFamily: "InstrumentSans",
    fontWeight: "500",
  },
});
