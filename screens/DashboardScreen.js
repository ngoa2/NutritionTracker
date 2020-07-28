import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DashboardCard from "../components/DashboardCard";
import { Container, Body } from "native-base";
import ProgressCircle from "react-native-progress-circle";

export default class DashboardScreen extends React.Component {
  render() {
    return (
      <Container style={styles.background}>
        <Text style={styles.textTitle}>Daily Nutrition Test</Text>
        <View
          style={{
            justifyContent: "center",
            alignSelf: "center",
            backgroundColor: "transparent",
            marginBottom: 20,
          }}
        >
          <ProgressCircle
            percent={30}
            radius={100}
            borderWidth={9}
            color="#FFFFFF"
            shadowColor="#FFA26B"
            bgColor="#2CBA8D"
          >
            <Text style={{ fontWeight: "bold", fontSize: 45, color: "white" }}>
              {" "}
              460{" "}
            </Text>
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              {" "}
              left to reach 1840{" "}
            </Text>
          </ProgressCircle>
        </View>
        <View style={styles.bottomHalf}>
          <Body style={styles.roundedBody}>
            <DashboardCard calories="10" meal="dinner" mealTime="10pm" />
            <DashboardCard calories="10" meal="dinner" mealTime="10pm" />
            <DashboardCard calories="10" meal="dinner" mealTime="10pm" />
            <Text style={styles.mealButton}>+ Add A Meal</Text>
          </Body>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    height: "100%",
    width: "100%",
    backgroundColor: "#2CBA8D",
  },

  bottomHalf: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    position: "relative",
  },

  roundedBody: {
    backgroundColor: "#F9F9F9",
    paddingTop: 8,
    borderTopRightRadius: 36,
    borderTopLeftRadius: 36,
    height: "100%",
    width: "100%",
    alignItems: "flex-start",
  },

  mealButton: {
    alignSelf: "flex-start",
    fontSize: 15,
    marginLeft: 37,
    marginTop: 12,
    fontWeight: "bold",
    color: "#2CBA8D",
  },

  textTitle: {
    fontSize: 34,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "white",
    marginTop: 68,
    marginLeft: 37,
    marginBottom: 20,
  },
});
