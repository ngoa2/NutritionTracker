import React from "react";
import { Card, CardItem, Body, Container } from "native-base";
import { StyleSheet, Text, Image } from "react-native";
import plus from '../src/images/icons/plus.png';

export default class LockedCard extends React.Component {
  render() {

    return (
      <Card style={styles.roundedCard}>
          <CardItem>
              <Body>
                <Image source={plus} style={{ height:50, width:50 }} />
              </Body>
          </CardItem>
          <CardItem style={styles.cardItem}>
              <Body>
                <Text style={{fontSize: 9, fontWeight: 'bold', backgroundColor: "grey",}}>Completed the first goal</Text>
              </Body>
          </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  roundedCard: {
    position: 'relative',
    width: 100,
    height: '80%',
    flex: 0,
    flexDirection: "column",
    // alignItems: 'flex-end',
    padding: 4,
    backgroundColor: "grey",
    borderRadius: 15,
    marginRight: 10,
    justifyContent: 'flex-end',
  },

  card: {

  },

  cardItem: {
    backgroundColor: "grey",
  },

  calorieText: {
    color: "#FFA26B",
    fontSize: 34,
  },
});