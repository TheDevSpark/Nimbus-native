
import Header from "@/components/ui/Header";
import { Stack } from "expo-router";

export default function AddPropertyLayout() {
  return (
    <Stack
    >
      <Stack.Screen name="index" options={{ header: () => <Header title="Add Property" /> }} />
    </Stack>
  );
}
