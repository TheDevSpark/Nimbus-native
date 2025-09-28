import {
  Poppins_400Regular,
  Poppins_600SemiBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React, { useState } from "react";
import {
  FlatList,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddPropertyScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_600SemiBold,
  });

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    type: "",
    price: "",
    bedrooms: "",
    bathrooms: "",
    area: "",
    description: "",
  });

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const propertyTypes = ["Apartment", "House", "Villa", "Penthouse"];

  // Status & Settings states
  const [offlineMode, setOfflineMode] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
    console.log({ ...formData, [field]: value }); // console me print hoga
  };

  if (!fontsLoaded) {
    return null;
  }

  const renderBox = (label: any) => (
    <TouchableOpacity style={styles.box}>
      <Text style={[styles.plus, { fontFamily: "Poppins_600SemiBold" }]}>
        +
      </Text>
      <Text style={[styles.label, { fontFamily: "Poppins_400Regular" }]}>
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.screen}>
        {/* Photos & Videos Section */}
        <View style={styles.card}>
          <Text style={[styles.title, { fontFamily: "Poppins_600SemiBold" }]}>
            Photos & Videos
          </Text>

          <View style={styles.grid}>
            {renderBox("Add Photo")}
            {renderBox("Add Photo")}
            {renderBox("Add Photo")}
            {renderBox("Add Video")}
          </View>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.button}>
              <Ionicons name="camera-outline" size={20} color="#111827" />
              <Text
                style={[styles.btnText, { fontFamily: "Poppins_400Regular" }]}
              >
                Add More Photos
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Feather name="video" size={20} color="#111827" />
              <Text
                style={[styles.btnText, { fontFamily: "Poppins_400Regular" }]}
              >
                Upload Video
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Basic Information Section */}
        <View style={styles.Basiccard}>
          <Text style={styles.title}>Basic Information</Text>

          <Text style={styles.label}>Property Name</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., Luxurious City Penthouse"
            placeholderTextColor="#9ca3af"
            value={formData.name}
            onChangeText={(val) => handleChange("name", val)}
          />

          <Text style={styles.label}>Address</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 123 Main St, City, State"
            placeholderTextColor="#9ca3af"
            value={formData.address}
            onChangeText={(val) => handleChange("address", val)}
          />

          <Text style={styles.label}>Property Type</Text>
          <TouchableOpacity
            style={styles.input}
            onPress={() => setDropdownVisible(true)}
          >
            <Text style={{ color: formData.type ? "#111827" : "#9ca3af" }}>
              {formData.type || "Select Property Type"}
            </Text>
          </TouchableOpacity>

          {/* Custom Dropdown */}
          <Modal visible={dropdownVisible} transparent animationType="fade">
            <TouchableOpacity
              style={styles.modalOverlay}
              activeOpacity={1}
              onPressOut={() => setDropdownVisible(false)}
            >
              <View style={styles.dropdown}>
                <FlatList
                  data={propertyTypes}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.dropdownItem}
                      onPress={() => {
                        handleChange("type", item);
                        setDropdownVisible(false);
                      }}
                    >
                      <Text style={styles.dropdownText}>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>

          <Text style={styles.label}>Price (USD)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 500000"
            keyboardType="numeric"
            placeholderTextColor="#9ca3af"
            value={formData.price}
            onChangeText={(val) => handleChange("price", val)}
          />

          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 8 }}>
              <Text style={styles.label}>Bedrooms</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., 3"
                keyboardType="numeric"
                placeholderTextColor="#9ca3af"
                value={formData.bedrooms}
                onChangeText={(val) => handleChange("bedrooms", val)}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.label}>Bathrooms</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., 2"
                keyboardType="numeric"
                placeholderTextColor="#9ca3af"
                value={formData.bathrooms}
                onChangeText={(val) => handleChange("bathrooms", val)}
              />
            </View>
          </View>

          <Text style={styles.label}>Area (sqft)</Text>
          <TextInput
            style={styles.input}
            placeholder="e.g., 1500"
            keyboardType="numeric"
            placeholderTextColor="#9ca3af"
            value={formData.area}
            onChangeText={(val) => handleChange("area", val)}
          />

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={[styles.input, { height: 100 }]}
            placeholder="Provide a detailed description of the property..."
            placeholderTextColor="#9ca3af"
            multiline
            value={formData.description}
            onChangeText={(val) => handleChange("description", val)}
          />
        </View>

        {/* Status & Settings Section */}
        <View style={styles.Basiccard}>
          <Text style={styles.title}>Status & Settings</Text>

          <View style={styles.settingRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.settingTitle}>Property Status</Text>
              <Text style={styles.settingSubtitle}>
                Current visibility and availability.
              </Text>
            </View>
            <View style={styles.badge}>
              <Text style={styles.badgeText}>Draft</Text>
            </View>
          </View>

          <View style={styles.settingRow}>
            <View style={{ flex: 1 }}>
             <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
              <MaterialIcons name="wifi-off" size={20} color="#6C9D76FF" />
              <View>
                <Text style={styles.settingTitle}>Offline Mode</Text>
              <Text style={styles.settingSubtitle}>
                Work on properties without internet.
              </Text>
              </View>
             </View>
            </View>
            <TouchableOpacity
              style={[
                styles.statusBadge,
                { backgroundColor: offlineMode ? "#6C9D76FF" : "#D1D5DB" },
              ]}
              onPress={() => setOfflineMode(!offlineMode)}
            >
              <Text style={styles.statusText}>
                
                {offlineMode ? "Offline" : "Online"}
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.settingRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.settingTitle}>Push Notifications</Text>
              <Text style={styles.settingSubtitle}>
                Receive updates on property changes.
              </Text>
            </View>
            <Switch
              value={pushNotifications}
              onValueChange={setPushNotifications}
            />
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveBtn}>
          <Text style={styles.saveBtnText}>Save Property</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#fff" },
  screen: { flex: 1, padding: 16 },
  card: {
    borderColor: "#E5E7EB",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
  },
  Basiccard: {
    borderColor: "#E5E7EB",
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 20,
  },
  title: { fontSize: 18, marginBottom: 16, color: "#111827" },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" },
  box: {
    width: "48%",
    height: 120,
    backgroundColor: "#f9fafb",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: "#d1d5db",
    borderStyle: "dashed",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },
  plus: { fontSize: 28, color: "#6b7280" },
  label: { fontSize: 14, color: "#374151", marginVertical: 10 },
  footer: { flexDirection: "row", justifyContent: "space-between" },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
    backgroundColor: "#f9fafb",
    borderWidth: 1,
    borderColor: "#d1d5db",
    padding: 8,
    borderRadius: 8,
    justifyContent: "center",
  },
  btnText: { fontSize: 11, color: "#111827" },
  input: {
    borderWidth: 1,
    borderColor: "#d1d5db",
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#111827",
  },
  row: { flexDirection: "row", justifyContent: "space-between" },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  dropdown: {
    margin: 32,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E7EB",
  },
  dropdownText: { fontSize: 16, color: "#111827" },

  // Settings
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  settingTitle: { fontSize: 14, color: "#111827", fontWeight: "600" },
  settingSubtitle: { fontSize: 12, color: "#6b7280" },
  badge: {
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: { fontSize: 12, color: "#374151" },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  statusText: { color: "#fff", fontWeight: "600" },
  saveBtn: {
    marginTop: 20,
    backgroundColor: "#3671BAFF", 
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  saveBtnText: { color: "#fff", fontSize: 16, fontWeight: "600" },
});
