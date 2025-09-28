import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link, useRouter } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function HomeScreen() {
  const CARD_RADIUS = 16;
  const { width } = Dimensions.get("window");
  const router = useRouter(); 

  // Load Fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null; // jab tak font load na ho
  }

  // Dummy Data
  const properties = [
    {
      id: 1,
      address: "123 Ocean View Dr, Miami, FL 33139",
      price: "$1,850,000",
      beds: 4,
      baths: 3,
      status: "For Sale",
    },
    {
      id: 2,
      address: "456 Palm Grove St, Los Angeles, CA 90210",
      price: "$2,450,000",
      beds: 5,
      baths: 4,
      status: "For Sale",
    },
    {
      id: 3,
      address: "789 Sunset Blvd, Beverly Hills, CA 90212",
      price: "$3,200,000",
      beds: 6,
      baths: 5,
      status: "For Sale",
    },
    {
      id: 4,
      address: "321 Lake Shore Dr, Chicago, IL 60611",
      price: "$1,200,000",
      beds: 3,
      baths: 2,
      status: "For Sale",
    },
    {
      id: 5,
      address: "654 Bayfront Ave, San Francisco, CA 94123",
      price: "$2,950,000",
      beds: 5,
      baths: 4,
      status: "For Sale",
    },
  ];

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.screen}>
        <ScrollView
          contentContainerStyle={{ paddingBottom: 40 }}
          showsVerticalScrollIndicator={false}
        >
          {properties.map((item) => (
            <Link
              key={item.id}
              href={{
                pathname: "./[id]",
                params: { id: item.id.toString() },
              }}
            >
              <View
                key={item.id}
                style={[
                  styles.card,
                  { borderRadius: CARD_RADIUS, width: width * 0.92 },
                ]}
              >
                <Image
                  source={require("../../../assets/images/house.png")}
                  resizeMode="cover"
                  style={styles.image}
                />
                <View style={styles.content}>
                  {/* Address + Badge Row */}
                  <View style={styles.headerRow}>
                    <Text style={styles.address}>{item.address}</Text>
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{item.status}</Text>
                    </View>
                  </View>

                  {/* Price */}
                  <Text style={styles.price}>{item.price}</Text>

                  {/* Beds & Baths */}
                  <View style={styles.infoRow}>
                    <Text style={styles.infoText}>🛏 {item.beds} beds</Text>
                    <Text style={styles.infoText}>🛁 {item.baths} baths</Text>
                  </View>
                </View>
              </View>
            </Link>
          ))}
        </ScrollView>
        <View
          style={{
            backgroundColor: "#007AF5",
            borderRadius: 30,
            position: "absolute",
            bottom: 20,
            right: 20,
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            onPress={() => router.push("/add-property")}
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <AntDesign name="plus" size={24} color="white" />
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  screen: {
    flex: 1,
    alignItems: "center",
  },
  card: {
    maxWidth: 360,
    overflow: "hidden",
    backgroundColor: "#fff",
    paddingBottom: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    backgroundColor: "transparent",
  },
  content: {
    backgroundColor: "#fff",
    padding: 15,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  address: {
    fontSize: 16,
    color: "#1f2937",
    flexShrink: 1,
    marginRight: 8,
    fontFamily: "Poppins_600SemiBold",
  },
  badge: {
    backgroundColor: "#6C9D76FF",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginTop: 4,
  },
  badgeText: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  price: {
    fontSize: 22,
    color: "#111827",
    marginTop: 12,
    fontFamily: "Poppins_700Bold",
  },
  infoText: {
    color: "#4b5563",
    fontSize: 14,
    marginRight: 24,
    fontFamily: "Poppins_400Regular",
  },
  infoRow: {
    flexDirection: "row",
    marginTop: 12,
  },
});
