import React from "react";
import { StyleSheet, View, Text } from "react-native";

import Nav from "./components/Nav";
import BotNav from "./components/BotNav";
import OverviewScreen from "./screens/OverviewScreen";
// import AchievementScreen from "../screens/AchievementCard";
import ProfileScreen from "./screens/ProfileScreen";
import DashboardScreen from "./screens/DashboardScreen";
import SearchScreen from "./screens/SearchScreen";

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      {/* <ProfileScreen />
      <SearchScreen /> */}
      {/* <DashboardScreen /> */}
      <BotNav />
      {/* <Nav /> */}
=======
      <Nav />
      {/* <BotNav /> */}
>>>>>>> 728212c028433c77649aa4e7a4c5b94ce731fdbb
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
});
