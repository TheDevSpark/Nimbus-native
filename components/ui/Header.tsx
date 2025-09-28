import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Feather from "@expo/vector-icons/Feather";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <View style={styles.headermain}>
      <Text style={{ fontSize: 24, fontWeight: "700", width: "30%", fontFamily: "Poppins_700Bold" }}></Text>

      {/* Dynamic Title */}
      <Text style={{ fontSize: 18, fontWeight: "700", color: "#3671BAFF", fontFamily: "Poppins_700Bold" }}>
        {title}
      </Text>

      <View style={styles.styleTextView} />
      <Feather name="bell" size={24} color="#3671BAFF" />
      <Image
        source={require("../../assets/images/savee.png")}
        style={{ width: 30, height: 30, borderRadius: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headermain: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    // paddingBottom: 12,
    backgroundColor: "white",
    padding: 16,
    borderBottomColor: "#E5E7EB",
    borderBottomWidth: 1,
  },
  styleTextView: {},
});
