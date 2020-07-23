import React from "react";
import { StyleSheet, Text, View } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchScreen;
