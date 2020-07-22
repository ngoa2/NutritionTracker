import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container, Body } from "native-base";
import DashboardCard from "../components/DashboardCard";

const AchievementScreen = () => {
  return (
    <Container>
      <View style={styles.background}>

      <View style={styles.topHalf}>
        <View style={styles.searchBar}>
        <SearchBar />
        </View>
        <Text style={styles.textTitle}>Chicken</Text>
        <View style={styles.test2}>
        <Body style={styles.roundedBody}>
            <DashboardCard calories="10" meal="dinner" mealTime="10pm" />
            <DashboardCard calories="10" meal="dinner" mealTime="10pm" />
            <DashboardCard calories="10" meal="dinner" mealTime="10pm" />
        
      </Body>
      </View>
      </View>

      



    </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: "column",
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  background: {
    flex: 1,
    backgroundColor: "#2CBA8D",
  },

  topHalf: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: 'absolute',
    // padding: 25,
    // marginTop: 80,
  },

  searchBar: {
    position: 'relative',
    width: '100%',
    paddingHorizontal: 25,
    marginTop: 80,
  },

  textTitle: {
    width: '100%',
    padding: 25,
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    position: "relative",
    top: 0,
    textAlign: 'left',
  },

  roundedBody: {
    backgroundColor: "#F9F9F9",
    paddingTop: 8,
    borderRadius: 36,
  },

  test2: {
    position: 'relative',
    top: 10,
    flexDirection: "column",
    backgroundColor: "#2CBA8D",
  },
});
export default AchievementScreen;
