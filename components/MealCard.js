import React from "react";
import { Card, CardItem } from "native-base";
import { StyleSheet, Text } from "react-native";

export default class MealCard extends React.Component {
  render() {
    let calories = this.props.calories;
    let quantity = this.props.quantity;
    let mealItem = this.props.mealItem;

    return (
      <Card style={styles.roundedCard}>
        <CardItem style={styles.cardItemLeft}>
          <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 3, paddingBottom: 3}}>{mealItem}</Text>
          <Text style={{ fontSize: 14 }}>{quantity}</Text>
        </CardItem>
        <CardItem style={styles.cardItemRight}>
          <Text style={{fontSize: 30 }}>{calories}</Text>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  roundedCard: {
    flex: 0,
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    padding: 6,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    width: "100%",
    padding: 10,
    marginBottom: 10,
  },

  cardItemLeft: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start"
  },
  
  cardItemRight: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-end"
  },

  calorieText: {
    color: "#FFA26B",
    fontSize: 34,
  },
});
