import React from "react";
import { BottomNavigation, Text } from "react-native-paper";
import OverviewScreen from "../screens/OverviewScreen";
import AchievementScreen from "../screens/AchievementScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DashboardScreen from "../screens/DashboardScreen";

const Dashboard = () => <DashboardScreen />;
const Overview = () => <OverviewScreen />;
const Achievement = () => <AchievementScreen />;
const Profile = () => <ProfileScreen />;

const BotNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "dashboard", title: "Dashboard", icon: "queue-music" },
    { key: "overview", title: "Overview", icon: "queue-music" },
    { key: "achievement", title: "Achievement", icon: "queue-music" },
    { key: "profile", title: "Profile", icon: "queue-music" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    dashboard: Dashboard,
    overview: Overview,
    achievement: Achievement,
    profile: Profile,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default BotNav;
