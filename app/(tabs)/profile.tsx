import Header from "@/components/ui/Header";
import { Feather } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Header title="Profile" />
      <ScrollView style={styles.scrollView}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <View style={styles.placeholderImage}>
              <Image
                source={require("../../assets/images/user.png")}
                style={{ width: 105, height: 105, borderRadius: 50 }}
              />
            </View>
          </View>

          <Text style={styles.profileName}>John Doe</Text>
          <Text style={styles.profileTitle}>Senior Real Estate Agent</Text>

          <View style={styles.separator} />

          <Text style={styles.profileDescription}>
            Dedicated to connecting clients with their dream properties,
            ensuring smooth transactions and lasting satisfaction. Over 10 years
            of experience in the Greater Metro Area.
          </Text>

          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.editProfileButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Notes Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notes</Text>
          <View style={styles.notesContainer}>
            <Text style={styles.notesText}>
              Clients appreciate prompt follow-ups. Ensure all scheduled
              viewings are confirmed 24 hours in advance. Prioritize listings
              with virtual tours for wider reach.
            </Text>
          </View>
        </View>

        {/* Offline Status */}
        <View style={styles.offlineSection}>
          <View style={styles.offlineContainer}>
            <Feather name="cloud-off" size={20} color="#6b7280" />
            <Text style={styles.offlineText}>You are currently offline.</Text>
            <TouchableOpacity style={styles.offlineButton}>
              <Text style={styles.offlineButtonText}>Offline</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Notification Settings */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notification Settings</Text>

          <View style={styles.notificationItem}>
            <View style={styles.notificationLeft}>
              <Feather name="bell" size={20} color="#6b7280" />
              <Text style={styles.notificationText}>Push Notifications</Text>
            </View>
            <View style={styles.toggleSwitch}>
              <View style={styles.toggleActive} />
            </View>
          </View>

          <View style={styles.notificationItem}>
            <View style={styles.notificationLeft}>
              <Feather name="mail" size={20} color="#6b7280" />
              <Text style={styles.notificationText}>Email Notifications</Text>
            </View>
            <View style={styles.toggleSwitch}>
              <View style={styles.toggleActive} />
            </View>
          </View>

          <View style={styles.notificationItem}>
            <View style={styles.notificationLeft}>
              <Feather name="message-circle" size={20} color="#6b7280" />
              <Text style={styles.notificationText}>SMS Alerts</Text>
            </View>
            <View style={styles.toggleSwitch}>
              <View style={styles.toggleInactive} />
            </View>
          </View>
        </View>

        {/* Account Management */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Management</Text>

          <TouchableOpacity style={styles.accountItem}>
            <View style={styles.accountLeft}>
              <Feather name="settings" size={20} color="#6b7280" />
              <Text style={styles.accountText}>Account Details</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountItem}>
            <View style={styles.accountLeft}>
              <Feather name="help-circle" size={20} color="#6b7280" />
              <Text style={styles.accountText}>Help & Support</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountItem}>
            <View style={styles.accountLeft}>
              <Feather name="book-open" size={20} color="#6b7280" />
              <Text style={styles.accountText}>Privacy Policy</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#d1d5db" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.accountItem}>
            <View style={styles.accountLeft}>
              <Feather name="log-out" size={20} color="#6b7280" />
              <Text style={styles.accountText}>Logout</Text>
            </View>
            <Feather name="chevron-right" size={20} color="#d1d5db" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  profileSection: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
    marginBottom: 20,
  },
  profileImageContainer: {
    position: "relative",
    marginBottom: 16,
  },
  placeholderImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  profileName: {
    fontSize: 24,
    color: "#111827",
    marginBottom: 4,
    fontFamily: "Poppins_700Bold",
  },
  profileTitle: {
    fontSize: 16,
    color: "#6b7280",
    marginBottom: 16,
    fontFamily: "Poppins_500Medium",
  },
  separator: {
    width: "100%",
    height: 1,
    backgroundColor: "#e5e7eb",
    marginBottom: 16,
  },
  profileDescription: {
    fontSize: 14,
    color: "#374151",
    textAlign: "center",
    lineHeight: 20,
    marginBottom: 20,
    fontFamily: "Poppins_400Regular",
  },
  editProfileButton: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  editProfileButtonText: {
    fontSize: 16,
    color: "#374151",
    fontFamily: "Poppins_500Medium",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    color: "#111827",
    marginBottom: 12,
    fontFamily: "Poppins_600SemiBold",
  },
  notesContainer: {
    backgroundColor: "#f3f4f6",
    borderRadius: 12,
    padding: 16,
  },
  notesText: {
    fontSize: 14,
    color: "#374151",
    lineHeight: 20,
    fontFamily: "Poppins_400Regular",
  },
  offlineSection: {
    marginBottom: 20,
  },
  offlineContainer: {
    backgroundColor: "#f0fdf4",
    borderRadius: 12,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  offlineText: {
    flex: 1,
    fontSize: 14,
    color: "#374151",
    marginLeft: 8,
    fontFamily: "Poppins_400Regular",
  },
  offlineButton: {
    backgroundColor: "#10b981",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  offlineButtonText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
  notificationItem: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationText: {
    fontSize: 16,
    color: "#374151",
    marginLeft: 12,
    fontFamily: "Poppins_400Regular",
  },
  toggleSwitch: {
    width: 44,
    height: 24,
    backgroundColor: "#d1d5db",
    borderRadius: 12,
    padding: 2,
  },
  toggleActive: {
    width: 20,
    height: 20,
    backgroundColor: "#007AF5",
    borderRadius: 10,
    marginLeft: 20,
  },
  toggleInactive: {
    width: 20,
    height: 20,
    backgroundColor: "#d1d5db",
    borderRadius: 10,
  },
  accountItem: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  accountLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  accountText: {
    fontSize: 16,
    color: "#374151",
    marginLeft: 12,
    fontFamily: "Poppins_400Regular",
  },
});
