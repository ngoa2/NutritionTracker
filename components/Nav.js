import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  Alert,
} from "react-native";
import OverviewScreen from "../screens/OverviewScreen";
// import AchievementScreen from "../screens/AchievementCard";
import ProfileScreen from "../screens/ProfileScreen";
import DashboardScreen from "../screens/DashboardScreen";
import SearchScreen from "../screens/SearchScreen";

export default class BottomNavigator extends Component {
  // toggleOpen = () => {};

  render() {
    return (
      <View style={styles.navStyle}>
        {/* Add */}
        <View style={styles.addButton}>
          <TouchableOpacity
            onPress={() => {
              Alert.alert("click");
            }}
          >
            <Image source={require("../src/images/icons/add_icon.png")}></Image>
          </TouchableOpacity>
        </View>

        {/* Bottom Navigation*/}
        <View style={styles.bottomNav}>
          {/* Home */}
          <View style={styles.category}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                style={{ marginLeft: 15 }}
                source={require("../src/images/icons/home_icon.png")}
              ></Image>
            </TouchableOpacity>
          </View>

          {/* Overview */}
          <View style={styles.category}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                style={{ marginRight: 35 }}
                source={require("../src/images/icons/overview_icon.png")}
              ></Image>
            </TouchableOpacity>
          </View>
          {/* Achievment */}
          <View style={styles.category}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                style={{ marginLeft: 35 }}
                source={require("../src/images/icons/achievements_icon.png")}
              ></Image>
            </TouchableOpacity>
          </View>

          {/* Profile */}
          <View style={styles.category}>
            <TouchableOpacity
              onPress={() => {
                Alert.alert("click");
              }}
            >
              <Image
                style={{ marginRight: 15 }}
                source={require("../src/images/icons/profile_icon.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navStyle: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#E5E5E5",
    alignItems: "center",
  },
  category: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomNav: {
    borderRadius: 10,
    position: "absolute",
    backgroundColor: "white",
    bottom: "3%",
    height: 62,
    width: "95%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  add: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "grey",
    shadowOpacity: 0.1,
    shadowOffset: { x: 2, y: 0 },
    shadowRadius: 2,
    borderRadius: 30,
    position: "absolute",
    bottom: 20,
    right: 0,
    top: 5,
    left: 5,
    shadowOpacity: 5.0,
    backgroundColor: "#2CBA8D",
  },

  addButton: {
    position: "absolute",
    width: 70,
    height: 85,
    borderRadius: 35,
    bottom: 35,
    zIndex: 10,
    backgroundColor: "white",
  },
});
