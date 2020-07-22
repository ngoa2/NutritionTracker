import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import SearchBar from "../components/SearchBar";
import { Card, CardItem, Container } from "native-base";

const AchievementScreen = () => {
  return (
    <Container>
      <View style={styles.background}>

      <View style={styles.searchBar}>
        <SearchBar />
        <Text style={styles.textTitle}>Chicken</Text>
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

  searchBar: {
    flex: 1,
    width: '100%',
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    position: 'absolute',
    padding: 25,
    marginTop: 80,
  },

  textTitle: {
    width: '100%',
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    position: "relative",
    top: 20,
    textAlign: 'left',
  },
});
export default AchievementScreen;
