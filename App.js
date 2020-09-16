import React from "react";
import { StyleSheet, View, Text } from "react-native";
// import DashboardScreen from "./screens/DashboardScreen";
import BotNav from "./components/BotNav";
import Nav from "./components/Nav";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Nav /> */}
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
