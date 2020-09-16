import React from "react";
import { Card, CardItem } from "native-base";
import { StyleSheet, Text } from "react-native";

export default class DashboardCard extends React.Component {
  render() {
    let calories = this.props.calories;
    let mealTime = this.props.mealTime;
    let meal = this.props.meal;

    return (
      <Card style={styles.roundedCard}>
        <CardItem style={styles.cardItem}>
          <Text style={{ fontSize: 20 }}>{meal}</Text>
          <Text style={{ fontSize: 15 }}>{mealTime}</Text>
        </CardItem>
        <CardItem style={styles.cardItem}>
          <Text style={{ color: "#FFA26B", fontSize: 34 }}>{calories}</Text>
          <Text>calories</Text>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  roundedCard: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 37,
    marginRight: 37,
    marginTop: 10,
    padding: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
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
