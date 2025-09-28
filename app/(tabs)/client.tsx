import Header from "@/components/ui/Header";
import { Feather } from "@expo/vector-icons";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

export default function ClientScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const clients = [
    {
      id: 1,
      name: "Carlos Mendoza",
      status: "New",
      lastContact: "1 hour ago",
      address: "22 Ocean View",
      lastMessage: "Hel",
    },
    {
      id: 2,
      name: "Carlos Mendoza",
      status: "New",
      lastContact: "1 hour ago",
      address: "22 Ocean View",
      lastMessage: "Hel",
    },
    {
      id: 3,
      name: "Carlos Mendoza",
      status: "New",
      lastContact: "1 hour ago",
      address: "22 Ocean View",
      lastMessage: "Hel",
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Clients" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.section}>
          {/* Section Header */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>New Leads</Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>3</Text>
            </View>
          </View>

          {/* Clients List */}
          {clients.map((client) => (
            <View key={client.id} style={styles.clientCard}>
              <View style={styles.clientInfo}>
                {/* Client Header */}
                <View style={styles.clientHeader}>
                  <Text style={styles.clientName}>{client.name}</Text>
                  <View style={styles.statusBadge}>
                    <Text style={styles.statusText}>{client.status}</Text>
                  </View>
                </View>

                {/* Client Details */}
                <View style={styles.clientDetails}>
                  <View style={styles.avatarContainer}>
                    <View style={styles.placeholderAvatar}>
                      <Feather name="user" size={24} color="#6b7280" />
                    </View>
                  </View>

                  <View style={styles.contactInfo}>
                    <Text style={styles.contactText}>
                      Last contact: {client.lastContact}
                    </Text>
                    <Text style={styles.addressText}>{client.address}</Text>
                  </View>
                </View>

                {/* Last Message */}
                <View style={styles.messageContainer}>
                  <Feather name="message-circle" size={16} color="#6b7280" />
                  <Text style={styles.messageText}>
                    Last message about follow-up: '{client.lastMessage}'
                  </Text>
                </View>
              </View>

              {/* Action Buttons */}
              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.callButton}>
                  <Feather name="phone" size={16} color="#374151" />
                  <Text style={styles.buttonText}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.emailButton}>
                  <Feather name="mail" size={16} color="#374151" />
                  <Text style={styles.buttonText}>Email</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.profileButton}>
                  <Text style={styles.profileButtonText}>Profile</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Poppins_400Regular",
    color: "#111827",
  },
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Poppins_700Bold",
    color: "#111827",
  },
  countBadge: {
    backgroundColor: "#6b7280",
    borderRadius: 15,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
  },
  clientCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  clientInfo: {
    marginBottom: 16,
  },
  clientHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  clientName: {
    fontSize: 18,
    fontFamily: "Poppins_700Bold",
    color: "#111827",
  },
  statusBadge: {
    backgroundColor: "#10b981",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  statusText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins_600SemiBold",
  },
  clientDetails: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  avatarContainer: {
    marginRight: 12,
  },
  placeholderAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
    justifyContent: "center",
  },
  contactInfo: {
    flex: 1,
  },
  contactText: {
    fontSize: 14,
    color: "#6b7280",
    fontFamily: "Poppins_400Regular",
    marginBottom: 4,
  },
  addressText: {
    fontSize: 14,
    color: "#6b7280",
    fontFamily: "Poppins_400Regular",
  },
  messageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  messageText: {
    fontSize: 14,
    color: "#6b7280",
    marginLeft: 8,
    flex: 1,
    fontFamily: "Poppins_400Regular",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  callButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 8,
  },
  emailButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#e5e7eb",
    paddingVertical: 10,
    borderRadius: 8,
    marginRight: 8,
  },
  profileButton: {
    flex: 1,
    backgroundColor: "#374151",
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 12,
    color: "#374151",
    marginLeft: 4,
    fontFamily: "Poppins_500Medium",
  },
  profileButtonText: {
    fontSize: 12,
    color: "white",
    fontFamily: "Poppins_600SemiBold",
  },
});
