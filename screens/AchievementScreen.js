import React from "react";
import { StyleSheet, Text, View } from "react-native";

const AchievementScreen = () => {
  return (
    <View style={styles.container}>
      <Text>AchievementScreen</Text>
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

export default AchievementScreen;
