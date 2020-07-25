import React from "react";
import { Card, CardItem, Body, Container } from "native-base";
import { StyleSheet, Text } from "react-native";

export default class AchievementCard extends React.Component {
  render() {

    return (
      <Card style = {styles.roundedCard}>
          <CardItem>
              <Body>
                <Text>Test</Text>
                <Text>Test</Text>
              </Body>
          </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  roundedCard: {
    padding: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: "25.6%",
    height: "26%",
    marginRight: 10,
  },

  cardItem: {
    flex: 1,
    flexDirection: "column",
  },

  calorieText: {
    color: "#FFA26B",
    fontSize: 34,
  },
});