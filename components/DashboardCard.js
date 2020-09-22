import React from "react";
import { Card, CardItem } from "native-base";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { overlay } from "react-native-paper";

export default class DashboardCard extends React.Component {
  render() {
    let calories = this.props.calories;
    let mealTime = this.props.mealTime;
    let meal = this.props.meal;

    return (
      <TouchableOpacity onPress={this.props.onPress} activeOpacity={1} >
      <Card style={styles.roundedCard}>
        <CardItem style={styles.cardItemLeft}>
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>{meal}</Text>
          <Text style={{ fontSize: 17 }}>{mealTime}</Text>
        </CardItem>
        <CardItem style={styles.cardItemRight}>
          <Text style={{ color: "#FFA26B", fontSize: 34, fontWeight: 'bold' }}>{calories}</Text>
          <Text style={{ fontSize: 17 }}>calories</Text>
        </CardItem>
      </Card>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  // roundedCard: {
  //   flex: 1,
  //   flexDirection: "row",
  //   marginLeft: 37,
  //   marginRight: 37,
  //   marginTop: 10,
  //   padding: 6,
  //   backgroundColor: "#FFFFFF",
  //   borderRadius: 15,
  // },

  roundedCard: {
    position: 'relative',
    // width: '86%',
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    padding: 8,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginBottom: 8,
    marginLeft: 37,
    marginRight: 37,
  },

  cardItemLeft: {
    flexGrow: 5,
    flex: 1,
    flexDirection: "column",
    alignItems: 'flex-start',
  },

  cardItemRight: {
    flexGrow: 5,
    flex: 1,
    flexDirection: "column",
    alignItems: 'flex-end',
  },

  calorieText: {
    color: "#FFA26B",
    fontSize: 34,
  },
});
