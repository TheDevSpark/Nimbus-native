import Header from "@/components/ui/Header";
import { AntDesign, Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function CalendarScreen() {
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedView, setSelectedView] = useState("Day");

  // Dynamic Data
  const appointments = [
    {
      id: 1,
      time: "10:00 AM",
      date: "May 15",
      title: "Property Showing",
      location: "123 Main St, Anytown",
      client: "Jane Doe",
    },
    {
      id: 2,
      time: "02:00 PM",
      date: "May 15",
      title: "Client Meeting",
      location: "Cafe Central",
      client: "John Smith",
    },
    {
      id: 3,
      time: "11:00 AM",
      date: "May 16",
      title: "New Listing Photo Shoot",
      location: "789 Oak Ave, Anytown",
      client: "N/A",
    },
  ];

  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <Header title="Calendar" />
      <ScrollView style={styles.scrollView}>
        {/* Calendar Navigation */}
        <View style={styles.calendarNav}>
          <AntDesign name="left" size={20} color="#007AF5" />
          <Text style={styles.monthText}>May 2024</Text>
          <AntDesign name="right" size={20} color="#007AF5" />
        </View>

        {/* Add Appointment Button */}
        <TouchableOpacity style={styles.addButton}>
          <AntDesign name="plus" size={20} color="white" />
          <Text style={styles.addButtonText}>Add Appointment</Text>
        </TouchableOpacity>

        {/* View Selector */}
        <View style={styles.viewSelector}>
          {["Day", "Week", "Month"].map((view) => (
            <TouchableOpacity
              key={view}
              style={[
                styles.viewButton,
                selectedView === view && styles.selectedViewButton,
              ]}
              onPress={() => setSelectedView(view)}
            >
              <Text
                style={[
                  styles.viewButtonText,
                  selectedView === view && styles.selectedViewButtonText,
                ]}
              >
                {view}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Calendar Grid */}
        <View style={styles.calendarGrid}>
          <View style={styles.weekDays}>
            {["S", "M", "T", "W", "T", "F", "S"].map((day) => (
              <Text key={day} style={styles.weekDayText}>
                {day}
              </Text>
            ))}
          </View>
          <View style={styles.daysGrid}>
            {calendarDays.map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.dayButton,
                  selectedDate === day && styles.selectedDay,
                ]}
                onPress={() => setSelectedDate(day)}
              >
                <Text
                  style={[
                    styles.dayText,
                    selectedDate === day && styles.selectedDayText,
                  ]}
                >
                  {day}
                </Text>
                {day === 16 && <View style={styles.eventDot} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Upcoming Appointments */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Upcoming Appointments</Text>
          <View style={styles.appointmentsCard}>
            {appointments.map((appointment, index) => (
              <View key={appointment.id}>
                <View style={styles.appointmentItem}>
                  <View style={styles.appointmentInfo}>
                    <Text style={styles.appointmentTime}>
                      {appointment.time}, {appointment.date}
                    </Text>
                    <Text style={styles.appointmentTitle}>
                      {appointment.title}
                    </Text>
                    <View style={styles.appointmentLocationRow}>
                      <Feather name="map-pin" size={16} color="#6b7280" />
                      <Text style={styles.appointmentLocation}>
                        {appointment.location}
                      </Text>
                    </View>
                    <View style={styles.appointmentClientRow}>
                      <Feather name="users" size={16} color="#6b7280" />
                      <Text style={styles.appointmentClient}>
                        Client: {appointment.client}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.appointmentActions}>
                    <TouchableOpacity style={styles.rescheduleButton}>
                      <Text style={styles.rescheduleButtonText}>
                        Reschedule
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.detailsButton}>
                      <Text style={styles.detailsButtonText}>Details</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {index < appointments.length - 1 && (
                  <View style={styles.separator} />
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Notifications & Status */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications & Status</Text>
          <View style={styles.statusItem}>
            <Text style={styles.statusText}>Offline Mode</Text>
            <View style={styles.activeTag}>
              <Text style={styles.activeTagText}>Active</Text>
            </View>
          </View>
          <View style={styles.statusItem}>
            <Text style={styles.statusText}>Push Notifications</Text>
            <View style={styles.toggleSwitch}>
              <View style={styles.toggleActive} />
            </View>
          </View>
        </View>

        {/* Calendar Integrations */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Calendar Integrations</Text>
          <View style={styles.integrationItem}>
            <Text style={styles.integrationText}>Google Calendar</Text>
            <TouchableOpacity style={styles.connectButton}>
              <Text style={styles.connectButtonText}>Connect</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.integrationItem}>
            <Text style={styles.integrationText}>Outlook Calendar</Text>
            <TouchableOpacity style={styles.connectButton}>
              <Text style={styles.connectButtonText}>Connect</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f9fafb" },
  scrollView: { flex: 1, padding: 16 },

  calendarNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  monthText: {
    fontSize: 18,
    color: "#007AF5",
    fontFamily: "Poppins_600SemiBold",
  },

  addButton: {
    backgroundColor: "#007AF5",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  addButtonText: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_600SemiBold",
    marginLeft: 8,
  },

  viewSelector: {
    flexDirection: "row",
    backgroundColor: "#f3f4f6",
    borderRadius: 8,
    padding: 4,
    marginBottom: 16,
  },
  viewButton: { flex: 1, padding: 8, alignItems: "center", borderRadius: 6 },
  selectedViewButton: { backgroundColor: "#007AF5" },
  viewButtonText: {
    fontSize: 14,
    color: "#6b7280",
    fontFamily: "Poppins_500Medium",
  },
  selectedViewButtonText: { color: "white" },

  calendarGrid: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  weekDays: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 12,
  },
  weekDayText: {
    fontSize: 14,
    color: "#6b7280",
    fontFamily: "Poppins_500Medium",
  },
  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dayButton: {
    width: "14%",
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 8,
  },
  selectedDay: { backgroundColor: "#007AF5" },
  dayText: { fontSize: 14, color: "#374151", fontFamily: "Poppins_400Regular" },
  selectedDayText: { color: "white", fontFamily: "Poppins_500Medium" },
  eventDot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: "#007AF5",
    position: "absolute",
    bottom: 2,
  },

  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 18,
    color: "#111827",
    marginBottom: 12,
    fontFamily: "Poppins_600SemiBold",
  },

  appointmentsCard: {
    backgroundColor: "white",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  appointmentItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingVertical: 12,
  },
  appointmentInfo: { flex: 1 },
  appointmentTime: {
    fontSize: 14,
    color: "#007AF5",
    marginBottom: 4,
    fontFamily: "Poppins_500Medium",
  },
  appointmentTitle: {
    fontSize: 16,
    color: "#111827",
    marginBottom: 8,
    fontFamily: "Poppins_600SemiBold",
  },
  appointmentLocationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  appointmentLocation: {
    fontSize: 14,
    color: "#6b7280",
    marginLeft: 8,
    fontFamily: "Poppins_400Regular",
  },
  appointmentClientRow: { flexDirection: "row", alignItems: "center" },
  appointmentClient: {
    fontSize: 14,
    color: "#6b7280",
    marginLeft: 8,
    fontFamily: "Poppins_400Regular",
  },

  appointmentActions: { alignItems: "flex-end" },
  rescheduleButton: {
    borderWidth: 1,
    borderColor: "#007AF5",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    marginBottom: 8,
  },
  rescheduleButtonText: {
    color: "#007AF5",
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
  detailsButton: { paddingHorizontal: 12, paddingVertical: 6 },
  detailsButtonText: {
    color: "#007AF5",
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
  },
  separator: { height: 1, backgroundColor: "#e5e7eb", marginVertical: 8 },

  statusItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  statusText: {
    fontSize: 16,
    color: "#111827",
    fontFamily: "Poppins_500Medium",
  },
  activeTag: {
    backgroundColor: "#ef4444",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  activeTagText: {
    color: "white",
    fontSize: 12,
    fontFamily: "Poppins_500Medium",
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

  integrationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  integrationText: {
    fontSize: 16,
    color: "#111827",
    fontFamily: "Poppins_400Regular",
  },
  connectButton: {
    borderWidth: 1,
    borderColor: "#007AF5",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  connectButtonText: {
    color: "#007AF5",
    fontSize: 14,
    fontFamily: "Poppins_500Medium",
  },
});
