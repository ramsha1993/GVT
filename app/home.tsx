import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const { height } = Dimensions.get("window");

export default function Home() {
  const router = useRouter();
  const { isDarkMode } = useTheme();
  const [filterVisible, setFilterVisible] = useState(false);

  const { type } = useLocalSearchParams();
  const isSent = type === 'sent';
  const sectionTitle = isSent ? "Gifts Sent" : "Gifts Received";

  // Define contents for Sent vs Received
  // Sent -> Elephant -> gift-detail
  // Received -> Peacock -> gift-detail-received

  const renderGiftCard = () => {
    if (isSent) {
      // Sent: Elephant
      return isDarkMode ? (
        <LinearGradient
          colors={['#FFFCB4', '#CBA969']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.giftCard, { borderWidth: 0 }]}
        >
          <Image
            source={require("../assets/images/giftimg1.png")}
            style={[styles.giftImage, { borderRadius: 20 }]}
            resizeMode="contain"
          />
          <Text style={styles.giftTitle}>Handcrafted Peacock Statue</Text>
 
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() => router.push("/gift-detail-received")}
          >
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </LinearGradient>
      ) : (
        <View style={styles.giftCard}>
          <Image
            source={require("../assets/images/giftimg1.png")}
            style={styles.giftImage}
            resizeMode="contain"
          />
          <Text style={styles.giftTitle}>Handcrafted Peacock Statue</Text>
 
          <TouchableOpacity
            style={styles.learnMoreButton}
            onPress={() => router.push("/gift-detail-received")}
          >
            <Text style={styles.learnMoreText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      // Received: Peacock
      return isDarkMode ? (
        <LinearGradient
          colors={['#FFFCB4', '#CBA969']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={[styles.giftCard, { borderWidth: 0 }]}
        >
            <Image
            source={require("../assets/images/giftimg2.png")}
            style={[styles.giftImage, { borderRadius: 20 }]}
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
        </LinearGradient>
      ) : (
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
      );
    }
  };

  const content = (
    <SafeAreaView style={[styles.container, isDarkMode && { backgroundColor: 'transparent' }]}>
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Header with Filter Icon */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setFilterVisible(true)} style={styles.filterButton}>
          <Image 
            source={isDarkMode ? require('../assets/icons/filter.png') : require('../assets/icons/filter_l.png')}
            style={{ width: 28, height: 28 }}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Curved Container */}
        <View style={[styles.curvedContainer, isDarkMode && styles.darkCurvedContainer]}>
          {/* Gifts Section */}
          <View style={styles.giftsSection}>
            <Text style={[styles.sectionTitle, isDarkMode && styles.textWhite]}>{sectionTitle}</Text>
            <Text style={[styles.sectionDescription, isDarkMode && styles.textGrey]}>
              A glimpse into the remarkable artifacts and handcrafted treasures shared through
              international goodwill.
            </Text>

            {renderGiftCard()}
          </View>
        </View>
      </ScrollView>

      {/* Filter Drawer Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={filterVisible}
        onRequestClose={() => setFilterVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={[styles.modalContent, isDarkMode && styles.darkModalContent]}>
            {/* Modal Header */}
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={() => setFilterVisible(false)}>
                <Ionicons name="close" size={30} color="#C98B5E" />
              </TouchableOpacity>
            </View>

            {/* Search Bar */}
            <View style={[styles.searchContainer, isDarkMode && styles.darkInput]}>
              <Ionicons name="search-outline" size={20} color="#5A5A5A" style={styles.searchIcon} />
              <TextInput
                placeholder="Search"
                placeholderTextColor="#5A5A5A"
                style={[styles.searchInput, isDarkMode && { color: '#FFF' }]}
              />
            </View>

            {/* Filters Title Row */}
            <View style={styles.filtersTitleRow}>
              <Text style={[styles.filtersTitle, isDarkMode && styles.textWhite]}>Filters</Text>
              <Ionicons name="options-outline" size={24} color={isDarkMode ? "#FFF" : "#1A1A1A"} />
            </View>

            <ScrollView contentContainerStyle={styles.filtersScroll}>
              <View style={styles.filtersGrid}>
                {/* ... (Chips would need conditional styling too, simplified for brevity but applying generic logic if possible or leaving as is if acceptable) */}
                 {/* Name/Title */}
                 <TouchableOpacity style={[styles.filterChip, isDarkMode && styles.darkChip]}>
                   <Text style={[styles.filterChipText, isDarkMode && styles.textWhite]}>Name/Title</Text>
                 </TouchableOpacity>
                 {/* Year */}
                 <TouchableOpacity style={[styles.filterChip, isDarkMode && styles.darkChip]}>
                   <Text style={[styles.filterChipText, isDarkMode && styles.textWhite]}>Year</Text>
                 </TouchableOpacity>
                 <TouchableOpacity style={[styles.filterChip, isDarkMode && styles.darkChip]}>
                   <Text style={[styles.filterChipText, isDarkMode && styles.textWhite]}>Country of Origin</Text>
                   <Ionicons name="chevron-down" size={16} color={isDarkMode ? "#FFF" : "#4A4A4A"} style={styles.chipIcon} />
                 </TouchableOpacity>
                 {/* ... More chips */}
                 <TouchableOpacity style={[styles.filterChip, styles.filterChipActive]}>
                   <Text style={[styles.filterChipText, styles.filterChipTextActive]}>Gift Received</Text>
                 </TouchableOpacity>
                 {/* ... */}
              </View>
            </ScrollView>

            {/* Bottom Actions */}
            <View style={styles.bottomActions}>
              <TouchableOpacity style={styles.clearAllButton}>
                <Text style={[styles.clearAllText, isDarkMode && styles.textWhite]}>Clear All (1)</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.searchButton, isDarkMode && { backgroundColor: '#CBA969' }]}>
                <Text style={[styles.searchButtonText, isDarkMode && { color: '#000' }]}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );

  if (isDarkMode) {
    return (
      <LinearGradient
        colors={['#3E392C', '#08090C']}
        style={{ flex: 1 }}
        start={{ x: 0.2, y: 0 }}
        end={{ x: 0.8, y: 1 }}
      >
        {content}
      </LinearGradient>
    );
  }

  return content;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEDCF", // Main background
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 0,
    alignItems: "flex-start",
  },
  filterButton: {
    padding: 10,
  },
  scrollContent: {
    flexGrow: 1,
    paddingTop: 10,
  },
  curvedContainer: {
    backgroundColor: "#FFF6E7", // Curved container
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 40,
    paddingTop: 40,
    paddingBottom: 40,
    marginTop: 20,
    minHeight: height,
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
  // Modal Styles
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#FFF8E7", // Beige background for modal
    height: "90%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  modalHeader: {
    alignItems: "flex-end",
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF5E6", // Light beige input background
    borderWidth: 1,
    borderColor: "#E6D5C4",
    borderRadius: 30,
    paddingHorizontal: 20,
    height: 50,
    marginBottom: 30,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#2A2A2A",
  },
  filtersTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  filtersTitle: {
    fontFamily: "InstrumentSans", // Or specific font if differing
    fontSize: 24,
    color: "#1A1A1A",
    fontWeight: "500",
  },
  filtersScroll: {
    paddingBottom: 20,
  },
  filtersGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    justifyContent: "space-between",
  },
  filterChip: {
    width: "48%", // Two columns
    backgroundColor: "#FFF8E7",
    borderWidth: 1,
    borderColor: "#A0A0A0",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
    flexDirection: "row",
  },
  filterChipActive: {
    backgroundColor: "#5A5A5A", // Dark grey background
    borderColor: "#5A5A5A",
  },
  filterChipText: {
    fontFamily: "InstrumentSans",
    fontSize: 13,
    color: "#4A4A4A",
  },
  filterChipTextActive: {
    color: "#FFFFFF",
  },
  chipIcon: {
    marginLeft: 8,
    position: "absolute",
    right: 15,
  },
  quantityChip: {
    width: "100%", // Full width
    justifyContent: "space-between",
    paddingHorizontal: 24,
  },
  quantityControls: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  quantityText: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#4A4A4A",
  },
  bottomActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
    paddingTop: 20,
    gap: 15,
  },
  clearAllButton: {
    flex: 1,
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#A0A0A0",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
  },
  clearAllText: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#1A1A1A",
    fontWeight: "500",
  },
  searchButton: {
    flex: 1,
    backgroundColor: "#333333",
    borderRadius: 30,
    paddingVertical: 16,
    alignItems: "center",
  },
  searchButtonText: {
    fontFamily: "InstrumentSans",
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "500",
  },
  // Dark Mode
  textWhite: { color: '#FFF' },
  textGrey: { color: '#A0A0A0' },
  darkCurvedContainer: {
    backgroundColor: 'transparent',
  },
  darkModalContent: {
    backgroundColor: '#1E1E1E',
  },
  darkInput: {
    backgroundColor: '#333',
    borderColor: '#555',
  },
  darkChip: {
    backgroundColor: '#333',
    borderColor: '#555',
  },
});
