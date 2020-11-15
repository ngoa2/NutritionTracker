import React from "react";
import { Card, CardItem, Body, View } from "native-base";
import { StyleSheet, Text, Image } from "react-native";
import house from "../src/images/icons/home_icon.png";

export default class AchievementSet extends React.Component {
  render() {
    let achievementArray = [
      ["Completed the Goal", require("../src/images/icons/home_icon.png")],
      ["50 meals logged", require("../src/images/icons/down.png")],
      [
        "Weekly protein intake",
        require("../src/images/icons/overview_icon.png"),
      ],
      ["test 123", require("../src/images/icons/profile_icon.png")],
      ["hello world", require("../src/images/icons/right.png")],
      ["beef burger", require("../src/images/icons/up.png")],
    ];

    let cardSet = achievementArray.map((card) => {
      return (
        <Card key = {card} style={styles.roundedCard}>
          <CardItem style={{ alignSelf: "center" }}>
            <Image
              style={{ tintColor: "#FFA26B", width: 43, height: 43 }}
              source={card[1]}
            />
          </CardItem>
          <CardItem style={{ paddingLeft: 0, paddingRight: 0 }}>
            <Body style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontSize: 10,
                  textAlign: "center",
                }}
              >
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
    backgroundColor: "#FFFF",
    borderRadius: 15,
    marginRight: 10,
    justifyContent: "flex-end",
  },

  cardItem: {
    flex: 1,
    flexDirection: "column",
  },
});
