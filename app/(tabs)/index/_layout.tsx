import Header from "@/components/ui/Header";
import { Stack } from "expo-router";

export default function IndexLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          header: () => <Header title="Properties" />,
        }}
      />
      <Stack.Screen
        name="[id]"
        options={{
          header: () => <Header title="Property Details" />,
        }}
      />
    </Stack>
  );
}
