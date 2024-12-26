import { Tabs } from "expo-router";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorCerulean,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: true,
          title: "Shoppnig List",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="format-list-bulleted"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="clock-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="lightbulb-on-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </Tabs>
  );
}
