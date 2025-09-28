import { Feather } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function DetailsScreen() {
  const { id } = useLocalSearchParams();
  const { width } = Dimensions.get('window');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Dummy Data - Exactly like the image
  const properties = [
    {
      id: 1,
      address: "123 Ocean View Dr, Coastal City, CA 90210",
      price: "$1,850,000",
      beds: 4,
      baths: 3,
      sqft: 2800,
      status: "For Sale",
      description:
        "Experience luxury living at its finest in this stunning coastal residence. Boasting breathtaking panoramic ocean views, this meticulously designed home offers an unparalleled blend of elegance and comfort. The open-concept living space is bathed in natural light, featuring high ceilings and premium finishes throughout. Enjoy gourmet cooking in the state-of-the-art kitchen, complete with top-tier appliances and a large island. The expansive master suite includes a private balcony overlooking the pacific, a spa-like ensuite bathroom, and a generous walk-in closet. Three additional bedrooms provide ample space for family or guests. Step outside to a beautifully landscaped yard, perfect for entertaining, with",
      features: [
        "Central AC",
        "2-Car Garage", 
        "Gourmet Kitchen",
        "High-Speed Internet",
        "Pet-Friendly",
        "Ocean View",
        "Gym Access",
        "Security System",
        "Private Balcony",
      ],
      images: [
        require("../../../assets/images/house.png"),
        require("../../../assets/images/house.png"), // Placeholder - same image
        require("../../../assets/images/house.png"), // Placeholder - same image
        require("../../../assets/images/house.png"), // Placeholder - same image
        require("../../../assets/images/house.png"), // Placeholder - same image
      ],
    },
    {
      id: 2,
      address: "456 Palm Grove St, Los Angeles, CA 90210",
      price: "$2,450,000",
      beds: 5,
      baths: 4,
      sqft: 3500,
      status: "For Sale",
      description:
        "Beautiful modern house located in Beverly Hills with top amenities and luxury lifestyle.",
      features: ["Swimming Pool", "Garden", "Smart Home System"],
      images: [
        require("../../../assets/images/house.png"),
        require("../../../assets/images/house.png"),
        require("../../../assets/images/house.png"),
        require("../../../assets/images/house.png"),
        require("../../../assets/images/house.png"),
      ],
    },
  ];

  const property = properties.find((p) => p.id.toString() === id);

  if (!property) {
    return (
      <View style={styles.center}>
        <Text style={styles.noPropertyText}>No property found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Property Image Gallery with Horizontal Scroll */}
      <View style={styles.imageContainer}>
        <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
          style={styles.imageScrollView}
          onMomentumScrollEnd={(event) => {
            const index = Math.round(event.nativeEvent.contentOffset.x / width);
            setCurrentImageIndex(index);
          }}
        >
          {property.images.map((image, index) => (
            <Image
              key={index}
              source={image}
              style={[styles.image, { width }]}
              resizeMode="cover"
            />
          ))}
        </ScrollView>
        <View style={styles.galleryIndicator}>
          <Text style={styles.galleryText}>{currentImageIndex + 1}/5</Text>
        </View>
      </View>

      {/* Price + Address + Status */}
      <View style={styles.headerCard}>
        <View style={styles.priceAddressContainer}>
          <Text style={styles.price}>{property.price}</Text>
          <Text style={styles.address}>{property.address}</Text>
        </View>
        <View style={styles.headerActions}>
         
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>{property.status}</Text>
          </View>
        </View>
      </View>

      {/* Beds, Baths, Sqft */}
      <View style={styles.infoCard}>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="bed-empty" size={24} color="#3671BAFF" />
          <Text style={styles.infoText}>{property.beds} Beds</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="shower" size={24} color="#3671BAFF" />
          <Text style={styles.infoText}>{property.baths} Baths</Text>
        </View>
        <View style={styles.infoItem}>
          <MaterialCommunityIcons name="home-outline" size={24} color="#3671BAFF" />
          <Text style={styles.infoText}>{property.sqft} Sqft</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionCard}>
        <Text style={styles.heading}>Description</Text>
        <Text style={styles.text}>{property.description}</Text>
      </View>

      {/* Features & Amenities */}
      <View style={styles.featuresCard}>
        <Text style={styles.heading}>Features & Amenities</Text>
        <View style={styles.featuresGrid}>
          {property.features.map((feature, idx) => (
            <View key={idx} style={styles.featureItem}>
              <View style={styles.featureIcon}>
                <Feather name="check" size={16} color="#10b981" />
              </View>
              <Text style={styles.featureText}>{feature}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Location */}
      <View style={styles.locationCard}>
        <Text style={styles.heading}>Location</Text>
        <View style={styles.mapContainer}>
          <View style={styles.mapPlaceholder}>
            <Feather name="map-pin" size={24} color="#ef4444" />
          </View>
          <View style={styles.mapAddress}>
            <Text style={styles.mapAddressText}>{property.address}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.viewMapButton}>
          <Feather name="map-pin" size={16} color="white" />
          <Text style={styles.viewMapButtonText}>View on Map</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#f9fafb" 
  },
  center: { 
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  imageContainer: {
    position: "relative",
  },
  imageScrollView: {
    height: 300,
  },
  image: { 
    height: 300 
  },
  galleryIndicator: {
    position: "absolute",
    bottom: 16,
    right: 16,
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  galleryText: {
    fontSize: 12,
    color: "#111827",
    fontFamily: "Poppins_500Medium",
  },
  // Card Styles with White Borders/Shadows
  headerCard: {
    backgroundColor: "white",
    margin: 16,
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  priceAddressContainer: {
    flex: 1,
  },
  price: {
    fontSize: 28,
    color: "#000",
    fontFamily: "Poppins_700Bold",
    marginBottom: 4,
  },
  address: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Poppins_400Regular",
  },
  headerActions: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  homeButton: {
    backgroundColor: "#f0f9ff",
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#007AF5",
  },
  statusBadge: {
    backgroundColor: "#3671BAFF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  statusText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  infoCard: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  infoItem: {
    alignItems: "center",
  },
  infoText: {
    fontSize: 14,
    color: "#333",
    fontFamily: "Poppins_500Medium",
    marginTop: 4,
  },
  descriptionCard: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  heading: {
    fontSize: 20,
    marginBottom: 12,
    fontFamily: "Poppins_600SemiBold",
    color: "#111827",
  },
  text: {
    fontSize: 14,
    color: "#444",
    lineHeight: 22,
    fontFamily: "Poppins_400Regular",
  },
  featuresCard: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    marginBottom: 12,
  },
  featureIcon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#f0fdf4",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  featureText: {
    fontSize: 14,
    color: "#374151",
    fontFamily: "Poppins_400Regular",
  },
  locationCard: {
    backgroundColor: "white",
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "#f3f4f6",
  },
  mapContainer: {
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    height: 200,
    position: "relative",
    marginBottom: 12,
  },
  mapPlaceholder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapAddress: {
    position: "absolute",
    bottom: 12,
    left: 12,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  mapAddressText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
  viewMapButton: {
    backgroundColor: "#007AF5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  viewMapButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    marginLeft: 8,
  },
  noPropertyText: {
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
    color: "#555",
  },
});
