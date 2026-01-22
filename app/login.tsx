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

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (email === "admin" && password === "admin") {
      router.push("/home");
    } else {
      setError("Invalid credentials. Please try admin/admin.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
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
    // Shadow isn't strictly visible in the flat design provided, but can add subtle depth if needed
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.05,
    // shadowRadius: 3.84,
    // elevation: 5,
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
});
