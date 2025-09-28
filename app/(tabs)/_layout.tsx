import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Octicons from "@expo/vector-icons/Octicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3671BAFF", // 👈 Active tab ka color
        tabBarInactiveTintColor: "#565D6DFF", // 👈 Inactive tabs ka color
        tabBarButton: HapticTab,
      }}
    >
      {/* Properties */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Properties",
          headerShown: false, // Hide default header, let index/_layout.tsx handle it
          tabBarIcon: ({ size, color }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
      />

      {/* Clients */}
      <Tabs.Screen
        name="client"
        options={{
          title: "Clients",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="team" size={size} color={color} />
          ),
        }}
      />

      {/* Calendar */}
      <Tabs.Screen
        name="calendar"
        options={{
          title: "Calendar",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Feather name="calendar" size={size} color={color} />
          ),
        }}
      />

      {/* Documents */}
      <Tabs.Screen
        name="document"
        options={{
          title: "Documents",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="file-document-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Profile */}
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <Octicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
