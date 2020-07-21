import React from "react";
import { StyleSheet, View, Text } from "react-native";
import DashboardScreen from "./screens/DashboardScreen";
import BottomNav from "./components/BottomNav";

export default function App() {
  return (
    <View style={styles.container}>
      <DashboardScreen />
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
