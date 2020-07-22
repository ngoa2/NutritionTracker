import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DashboardScreen from "./screens/DashboardScreen";
import BotNav from "./components/BotNav";

export default function App() {
  return (
    <View style={styles.container}>
      <BotNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
