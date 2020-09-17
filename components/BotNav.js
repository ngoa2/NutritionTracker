import React from "react";
import { BottomNavigation } from "react-native-paper";

import DashboardScreen from "../screens/DashboardScreen";
import OverviewScreen from "../screens/OverviewScreen";
import AchievementScreen from "../screens/AchievementScreen";
import ProfileScreen from "../screens/ProfileScreen";
import Navigator from "../routes/ButtonNav";

// TESTING pURPOSES
// import GoalsScreen from "../screens/GoalsScreen";

let Dashboard = () => <Navigator />;
let Overview = () => <OverviewScreen />;
let Achievement = () => <AchievementScreen />;
let Profile = () => <ProfileScreen />;

let BotNav = () => {
  let [index, setIndex] = React.useState(0);
  let [routes] = React.useState([
    {
      key: "dashboard",
      icon: require("../src/images/icons/home_icon.png"),
      color: "white",
    },
    {
      key: "overview",
      icon: require("../src/images/icons/overview_icon.png"),
      color: "white",
    },
    {
      key: "achievement",
      icon: require("../src/images/icons/achievements_icon.png"),
      color: "white",
    },
    {
      key: "profile",
      icon: require("../src/images/icons/profile_icon.png"),
      color: "white",
    },
  ]);

  let renderScene = BottomNavigation.SceneMap({
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
      activeColor="#2CBA8D"
      inactiveColor="black"
      // barStyle={{
      //   borderRadius: 10,
      //   bottom: 10,
      //   height: 100,
      //   width: "95%",
      //   backgroundColor: "black",
      //   justifyContent: "center",
      //   marginLeft: "2.5%",
      // }}
    />
  );
};

export default BotNav;
