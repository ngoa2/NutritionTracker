import React from "react";
import { Card, CardItem, Body, View } from "native-base";
import { StyleSheet, Text, Image } from "react-native";
import house from "../src/images/icons/home_icon.png";

export class AchievementCard extends React.Component {
  render() {
    return (
      <Card style={styles.roundedCard}>
        <CardItem>
          <Body>{/* <Image source={require(this.props.img)} /> */}</Body>
        </CardItem>
        <CardItem>
          <Body>
            <Text style={{ fontSize: 9, fontWeight: "bold" }}>
              {this.props.msg}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

export default class AchievementSet extends React.Component {
  render() {
    let achievementArray = {

        "Completed the First Goal": house,
      
       "50 meals logged": "../src/images/icons/home_icon.png" ,
      "Weekly protein intake": "../src/images/icons/home_icon.png" ,
      alpha: "../src/images/icons/home_icon.png" ,
      beta: "../src/images/icons/home_icon.png" ,
      gamma: "../src/images/icons/home_icon.png" ,
    };

    let cardSet = Object.keys(achievementArray).map((achievement, i) => {
      // let value = Object.values(achievement);
      // let desc = Object.getOwnPropertyNames(achievement);
      let deck = <AchievementCard msg={achievement} img={achievementArray[achievement]} />;
      return deck;
      // console.log(house);
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
    width: 100,
    height: "80%",
    flex: 1,
    flexDirection: "column",
    padding: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    marginRight: 10,
    justifyContent: "flex-end",
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

//input = image src and a description
