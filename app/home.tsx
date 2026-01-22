import { Stack, useRouter } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ headerShown: false }} />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* User Avatar - positioned absolutely on main background */}
        <Image
          source={require("../assets/images/user.png")}
          style={styles.avatar}
        />


          {/* Greeting Section */}
          <View style={styles.greetingCard}>
            <Text style={styles.greetingLabel}>Greeting</Text>
            <Text style={styles.userName}>Mr. Salman Hussain</Text>
            <Text style={styles.welcomeText}>
              Welcome to your personal collection. Explore the distinguished gifts presented to
              Abu Dhabi, symbolizing respect, friendship, and global collaboration.
            </Text>
          </View>
        {/* Curved Container with lighter background */}
        <View style={styles.curvedContainer}>
          {/* Gifts Section */}
          <View style={styles.giftsSection}>
            <Text style={styles.sectionTitle}>Gifts Received</Text>
            <Text style={styles.sectionDescription}>
              A glimpse into the remarkable artifacts and handcrafted treasures shared through
              international goodwill.
            </Text>

            {/* Gift Card 1 */}
            <View style={styles.giftCard}>
              <Image
                source={require("../assets/images/giftimg2.png")}
                style={styles.giftImage}
                resizeMode="contain"
              />
              <Text style={styles.giftTitle}>Handcrafted Elephant Statue</Text>
              <Text style={styles.giftDescription}>
                A symbol of wisdom and strength, intricately designed with traditional artistry.
              </Text>
              <TouchableOpacity
                style={styles.learnMoreButton}
                onPress={() => router.push("/gift-detail")}
              >
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
            </View>

            {/* Gift Card 2 */}
            <View style={styles.giftCard}>
              <Image
                source={require("../assets/images/giftimg1.png")}
                style={styles.giftImage}
                resizeMode="contain"
              />
              <Text style={styles.giftTitle}>Handcrafted Peacock Sculpture</Text>
              <Text style={styles.giftDescription}>
                Representing beauty and grace, this piece embodies cultural elegance.
              </Text>
              <TouchableOpacity
                style={styles.learnMoreButton}
                onPress={() => router.push("/gift-detail")}
              >
                <Text style={styles.learnMoreText}>Learn More</Text>
              </TouchableOpacity>
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
    backgroundColor: "#FFEDCF", // Main background - darker beige
  },
  scrollContent: {
    flexGrow: 1,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
    marginTop: 40,
    marginBottom: 20,
  },
  curvedContainer: {
    backgroundColor: "#FFF6E7", // Curved container - lighter beige
    borderTopLeftRadius: 20,
    borderTopRightRadius: 40,
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 40,
    marginTop: 20,
  },
  greetingCard: {
    
    paddingLeft: 20,
    backgroundColor: "transparent",
    borderRadius: 20,
    padding: 0,
    marginBottom: 30,
  },
  greetingLabel: {
    fontFamily: "InstrumentSans",
    fontSize: 22,
    color: "#1A1A1A",
    marginTop: 5,
    fontWeight: "bold",
  },
  userName: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 28,
    color: "#1A1A1A",
    marginBottom: 10,
  },
  welcomeText: {
    fontFamily: "InstrumentSans",
    fontSize: 12,
    color: "#4A4A4A",
    lineHeight: 18,
  },
  giftsSection: {
    marginTop: 5,
  },
  sectionTitle: {
    fontFamily: "PlayfairDisplayItalic",
    fontSize: 32,
    color: "#1A1A1A",
    marginBottom: 8,
  },
  sectionDescription: {
    fontFamily: "InstrumentSans",
    fontSize: 12,
    color: "#4A4A4A",
    lineHeight: 18,
    marginBottom: 20,
    width: "100%",
  },
  giftCard: {
    backgroundColor: "#FFFCF5",
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#E5D5B7",
  },
  giftImage: {
    width: "100%",
    height: 200,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  giftTitle: {
    fontFamily: "InstrumentSans",
    fontSize: 18,
    color: "#1A1A1A",
    marginBottom: 8,
    fontWeight: "500",
  },
  giftDescription: {
    fontFamily: "InstrumentSans",
    fontSize: 12,
    color: "#4A4A4A",
    lineHeight: 18,
    marginBottom: 16,
  },
  learnMoreButton: {
    backgroundColor: "#333333",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignSelf: "flex-start",
  },
  learnMoreText: {
    fontFamily: "InstrumentSans",
    fontSize: 12,
    color: "#FFFFFF",
    fontWeight: "500",
  },
});
