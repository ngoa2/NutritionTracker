import React from "react";
import { Card, CardItem, Body, View } from "native-base";
import { StyleSheet, Text, Image } from "react-native";

export default class LockedCard extends React.Component {
  render() {
    let achievementArray = [
      ["100 meals logged", require("../src/images/icons/home_icon.png")],
      ["7-day keto diet", require("../src/images/icons/down.png")],
      [
        "Low-cholesterol diet",
        require("../src/images/icons/overview_icon.png"),
      ],
      ["test 123", require("../src/images/icons/profile_icon.png")],
      ["hello world", require("../src/images/icons/right.png")],
      ["beef burger", require("../src/images/icons/up.png")],
    ];

    let cardSet = achievementArray.map((card) => {
      return (
        <Card style={styles.roundedCard}>
          <CardItem style={{ backgroundColor: "gray", alignSelf: "center" }}>
            <Image style={{ width: 43, height: 43 }} source={card[1]} />
          </CardItem>
          <CardItem style={{ backgroundColor: "gray" }}>
            <Body>
              <Text style={{ fontSize: 9, textAlign: "center", fontSize: 10 }}>
                {card[0]}
              </Text>
            </Body>
          </CardItem>
        </Card>
      );
    });

    return <View style={styles.scrollbar}>{cardSet}</View>;
  }
}

const styles = StyleSheet.create({
  scrollbar: {
    marginLeft: 37,
    marginTop: 10,
    height: 500,
    flexDirection: "row",
  },
  roundedCard: {
    position: "relative",
    width: 96,
    height: 147,
    flex: 1,
    flexDirection: "column",
    padding: 4,
    backgroundColor: "gray",
    borderRadius: 15,
    marginRight: 10,
    justifyContent: "flex-end",
  },

  cardItem: {
    flex: 1,
    flexDirection: "column",
  },
});
