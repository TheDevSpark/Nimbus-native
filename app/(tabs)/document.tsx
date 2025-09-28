import Header from "@/components/ui/Header";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
  Image,
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
  useFonts,
} from "@expo-google-fonts/poppins";

export default function DocumentScreen() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const documents = [
    {
      id: 1,
      name: "Client Agreement - John Doe",
      date: "Uploaded: Oct 26, 2023",
      status: "Signed",
      icon: "file-text",
    },
    {
      id: 2,
      name: "Offer Letter - 123 Main St",
      date: "Uploaded: Oct 25, 2023",
      status: "Pending Review",
      icon: "file-text",
    },
  ];

  return (
    <View style={styles.container}>
      <Header title="Documents" />
      <ScrollView style={styles.scrollView}>
        {/* Action Buttons */}
        <View style={styles.actionButtonsContainer}>
          <TouchableOpacity style={styles.uploadButton}>
            <AntDesign name="upload" size={20} color="white" />
            <Text style={[styles.text, styles.uploadButtonText]}>
              Upload New Document
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.signButton}>
            <Feather name="edit-3" size={20} color="white" />
            <Text style={[styles.text, styles.signButtonText]}>
              Initiate E-Signature
            </Text>
          </TouchableOpacity>
        </View>

        {/* Recent Documents */}
        <View style={styles.section}>
          <Text style={[styles.text, styles.sectionTitle]}>
            Recent Documents
          </Text>

          {documents.map((doc) => (
            <View key={doc.id} style={styles.documentCard}>
              <View style={styles.documentInfo}>
                <View style={styles.documentIcon}>
                  <Feather name={doc.icon as any} size={24} color="#007AF5" />
                </View>
                <View style={styles.documentDetails}>
                  <Text style={[styles.text, styles.documentName]}>
                    {doc.name}
                  </Text>
                  <Text style={[styles.text, styles.documentDate]}>
                    {doc.date}
                  </Text>
                  <Text style={[styles.text, styles.documentStatus]}>
                    {doc.status}
                  </Text>
                </View>
              </View>
              <View style={styles.documentActions}>
                <TouchableOpacity style={styles.viewButton}>
                  <Feather name="eye" size={16} color="#007AF5" />
                  <Text style={[styles.text, styles.viewButtonText]}>View</Text>
                </TouchableOpacity>
                {doc.status === "Pending Review" && (
                  <TouchableOpacity style={styles.signActionButton}>
                    <Feather name="edit-3" size={16} color="white" />
                    <Text style={[styles.text, styles.signActionButtonText]}>
                      Sign
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          ))}
        </View>

        {/* E-Signatures Section */}
        <View style={styles.section}>
          <Text style={[styles.text, styles.sectionTitle]}>
            Streamline with E-Signatures
          </Text>
          <Text style={[styles.text, styles.sectionDescription]}>
            Integrate seamlessly with DocuSign or HelloSign to get contracts
            signed faster. Secure, legally binding, and fully trackable.
          </Text>

          <View style={styles.eSignatureCard}>
            <View style={styles.eSignatureImage}>
              <Image
                source={require("../../assets/images/documentinner.png")}
                style={[
                  styles.eSignatureOverlay,
                  {
                    opacity: 0.7,
                  },
                ]}
              />
            </View>
            <View style={styles.eSignatureOverlay}>
              <Text style={[styles.text, styles.eSignatureOverlayText]}>
                Connect & Sign
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.learnMoreButton}>
            <Text style={[styles.text, styles.learnMoreButtonText]}>
              Learn More
            </Text>
          </TouchableOpacity>
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
  actionButtonsContainer: {
    marginBottom: 24,
  },
  uploadButton: {
    backgroundColor: "#007AF5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  uploadButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 8,
  },
  signButton: {
    backgroundColor: "#10b981",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
  },
  signButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 16,
  },
  documentCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  documentInfo: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  documentIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#f0f9ff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  documentDetails: {
    flex: 1,
  },
  documentName: {
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginBottom: 4,
  },
  documentDate: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    marginBottom: 4,
    color: "#6b7280",
  },
  documentStatus: {
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
  documentActions: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewButton: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  viewButtonText: {
    color: "#007AF5",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
    marginLeft: 4,
  },
  signActionButton: {
    backgroundColor: "#10b981",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  signActionButtonText: {
    color: "white",
    fontSize: 14,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 4,
  },
  sectionDescription: {
    fontSize: 14,
    fontFamily: "Poppins_400Regular",
    color: "#6b7280",
    lineHeight: 20,
    marginBottom: 16,
  },
  eSignatureCard: {
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
  },
  eSignatureImage: {
    height: 200,
  },
  eSignatureOverlay: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  eSignatureOverlayText: {
    color: "rgba(0, 0, 0, 0.7)",
    fontSize: 18,
    fontFamily: "Poppins_500Medium",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  learnMoreButton: {
    backgroundColor: "#6C9D76FF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    borderRadius: 12,
    marginTop: 12,
  },
  learnMoreButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 8,
  },
});
