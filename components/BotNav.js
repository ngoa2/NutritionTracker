import React from "react";
import { BottomNavigation, StyleSheet, View } from "react-native-paper";
import { Icon } from "react-native-elements";
import OverviewScreen from "../screens/OverviewScreen";
//import AchievementScreen from "../screens/AchievementCard";
import ProfileScreen from "../screens/ProfileScreen";
import DashboardScreen from "../screens/DashboardScreen";
import SearchScreen from "../screens/SearchScreen";

// TESTING pURPOSES
import GoalsScreen from "../screens/GoalsScreen";

let Dashboard = () => <DashboardScreen />;
let Overview = () => <OverviewScreen />;
let Achievement = () => <GoalsScreen />;
let Profile = () => <ProfileScreen />;
let Search = () => <SearchScreen />;

let BotNav = () => {
  let [index, setIndex] = React.useState(0);
  let [routes] = React.useState([
    { key: "dashboard", title: "Dashboard", icon: "queue-music" },
    { key: "overview", title: "Overview", icon: "queue-music" },
    { key: "search", title: "Search", icon: "queue-music" },
    { key: "achievement", title: "Achievement", icon: "queue-music" },
    { key: "profile", title: "Profile", icon: "queue-music" },
  ]);

  let renderScene = BottomNavigation.SceneMap({
    dashboard: Dashboard,
    overview: Overview,
    search: Search,
    achievement: Achievement,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{ paddingBottom: 48 }}
    />
  );
};

export default BotNav;
